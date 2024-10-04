/* eslint-disable */

class Read {
  private pos: number
  private buffer: Buffer
  private template
  private protocol

  constructor (data: any, template = null) {
    this.buffer = Buffer.from(data, 'binary')
    this.pos = 0
    if (template) {
      this.protocol = template.protocol
      delete template.protocol
      this.template = template
    }
  }

  public UBytes (length: number): RegExpMatchArray {
    const data = this.buffer.toString('hex', this.pos, this.pos + length).match(/.{2}/g)
    this.pos += length
    return data
  }

  public UByte (): number {
    const data = this.buffer.readUInt8(this.pos)
    this.pos++
    return data
  }

  public UInt16 (): number {
    const data = this.buffer.readUInt16BE(this.pos)
    this.pos += 2
    return data
  }

  public UInt32 (): number {
    const data = this.buffer.readUInt32BE(this.pos)
    this.pos += 4
    return data
  }

  public Float (): string {
    const data = this.buffer.readFloatBE(this.pos)
    this.pos += 4
    return data.toFixed(4)
  }

  public CUInt (): number {
    let value = this.UByte()
    switch (value & 0xE0) {
      case 0xE0:
        value = this.UInt32()
        break
      case 0xC0:
        this.pos--
        value = this.UInt32() & 0x1FFFFFFF
        break
      case 0x80:
      case 0xA0:
        this.pos--
        value = (this.UInt16()) & 0x3FFF
        break
    }
    return value
  }

  public Octets (): string {
    const length = this.CUInt()
    const data = this.buffer.toString('hex', this.pos, this.pos + length)
    this.pos += length
    return data
  }

  public String (): string {
    const length = this.CUInt()
    const data = this.buffer.toString('utf16le', this.pos, this.pos + length)
    this.pos += length
    return data
  }

  public Header (): { opCode: number; length: number; returnCode: number } {
    return {
      opCode: this.CUInt(),
      length: this.CUInt(),
      returnCode: this.UInt32()
    }
  }

  public Array (template): any[] {
    template = [...template]
    const length = this[template.shift()[1]]()
    const items = []
    for (let i = 0; i < length; i++) {
      const item = template.reduce((item, [name, type]) => {
        if (typeof type === 'string') {
          item[name] = this[type]()
        } else {
          item[name] = this[type[0]](type[1])
        }
        return item
      }, {})
      items.push(item)
    }
    return items
  }

  public UnpackAll () {
    const template = this.template
    const result: any = {}
    this.protocol && (result.protocol = this.Header())
    for (const keys in template) {
      result[keys] = {}
      const prop = result[keys]
      for (const [name, type] of template[keys]) {
        try {
          if (template[keys][0] === 'Array') {
            return this.Array(template[keys][1])
          }
          prop[name] = typeof type === 'string'
            ? this[type]()
            : this.Array(type[1])
        } catch (err) {
          console.error(err)
          return {
            error: err,
            key: keys,
            name: name
          }
        }
      }
    }
    return result
  }
}

export default Read
