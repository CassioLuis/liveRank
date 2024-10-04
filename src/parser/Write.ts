/* eslint-disable */
import { connect, Socket } from 'net'
import Read from './Read'

class Write {
  private host: string
  private port: number
  private data: any[]
  private template: any
  private protocol: any
  private socket: Socket

  constructor (data: any) {
    this.data = []
    this.host = '127.0.0.1'
    if (typeof data === 'number') {
      this.port = data
    } else {
      this.template = JSON.parse(JSON.stringify(data))
      this.protocol = data.protocol
      this.port = this.protocol.port
    }
    this.socket = connect({ host: this.host, port: this.port })
  }

  /**
   *
   * Converte um inteiro em 1 bytes
   *
   * @example
   * ```
   * 01
   * ```
   * @param value Valor inteiro -256 ou 255
   * @param arrayMethod Metodo da api de array do javascript
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */
  public UByte (value: number, arrayMethod = 'push'): void {
    const buffer = Buffer.allocUnsafe(1)
    value < 0 && (value = 0xff - 1 - value)
    buffer.writeUInt8(value, 0)
    this.data[arrayMethod](...this.Format(buffer))
  }

  /**
   *
   * Converte um inteiro em 2 bytes
   *
   * @example
   * ```
   * 00 01
   * ```
   * @param value Valor inteiro -65.536 ou 65.535
   * @param arrayMethod Metodo da api de array do javascript
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */

  public UInt16 (value: number, arrayMethod = 'push'): void {
    const buffer = Buffer.allocUnsafe(2)
    value < 0 && (value = 0xFFFF - 1 - value)
    buffer.writeUInt16BE(value, 0)
    this.data[arrayMethod](...this.Format(buffer))
  }

  /**
   *
   * Converte um inteiro em 4 bytes
   *
   * @example
   * ```
   * 00 01 EA FE
   * ```
   * @param value Valor inteiro -4.294.967.296 ou 4.294.967.295
   * @param arrayMethod Metodo da api de array do javascript
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */

  public UInt32 (value: number, arrayMethod = 'push'): void {
    const buffer = Buffer.allocUnsafe(4)
    value < 0 && (value = 0xFFFFFFFF - 1 - value)
    buffer.writeUInt32BE(value, 0)
    this.data[arrayMethod](...this.Format(buffer))
  }

  /**
  *
  * Converte um Float em 4 bytes
  *
  * @remarks
  * Quase a mesma coisa do `UInt32` mas com float
  *
  * @example
  * ```
  * 00 01 EA FE
  * ```
  * @param value Valor a ser convertido em bytes
  * @param arrayMethod Metodo da api de array do javascript
  *
  * @returns Nada mas adiciona ao `data` local os valores convertidos.
  */
  public Float (value: number, arrayMethod = 'push'): void {
    const buffer = Buffer.allocUnsafe(4)
    buffer.writeFloatBE(value, 0)
    this.data[arrayMethod](...this.Format(buffer))
  }

  /**
   * Converte um numero a 1, 2 ou 4 bytes
   *
   * @remarks
   * Ao receber o valor ele sera comparado com o que se encaixa sendo ele o limite
   * entre os tamanhos de `Byte`, `Int16` e `Int32`
   *
   * @param value Valor a ser convertido entre as opções
   * @param arrayMethod Metodo da api de array do javascript
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */
  public CUInt (value: number, arrayMethod = 'push'): void {
    if (value <= 0x7F) {
      return this.UByte(value, arrayMethod)
    } else if (value <= 0x3FFF) {
      return this.UInt16(value + 0x8000, arrayMethod)
    } else if (value <= 0x1FFFFFFF) {
      return this.UInt32(value + 0xC0000000, arrayMethod)
    } else {
      return this.UByte(0xE0, arrayMethod)
    }
  }

  /**
   * Converte octetos em bytes
   *
   * @remarks
   * Testar melhor essa função ainda nao esta muito claro...
   *
   * @param value String em Octetos
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */
  public Octets (value?: any): void {
    if (value && value.match(/[0-9A-Fa-f]/g)) {
      const arrayBytes = value.match(/.{2}/g).map(byte => `0x${byte}`)
      this.CUInt(arrayBytes.length)
      this.data.push(...arrayBytes)
    } else {
      this.CUInt(0)
    }
  }

  /**
   * Converte texto em bytes
   * 
   * @remarks
   * Quando o texto entrar sera feito um buffer do mesmo o tornando
   * um hexadecimal o encoding fara q seja adicionado mais 2 zeros antes
   * da string convertida em byte.
   *
   * @example
   * ```
   * UTF8 = 0A, UTF16LE = 00 0A
   * ```
   *
   * @param value Texto a ser convertido
   * @param encoding Tipo de encoding textual
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */
  public String (value: string, encoding = 'utf16le'): void {
    if (!value) return this.UByte(0)
    const buffer = this.Format(Buffer.from(value, encoding as BufferEncoding))
    this.CUInt(buffer.length)
    this.data.push(...buffer)
  }

  /**
   * Registra o Codigo de operação na escrita de bytes atual
   *
   * @example
   * ```
   * 0x78 BroadCast OPCode
   * ```
   *
   * @param value Codigo de operação a ser comunicado
   *
   * @returns Nada mas adiciona ao `data` local os valores convertidos.
   */
  public OPCode (value: number): void {
    this.CUInt(this.data.length, 'unshift')
    this.CUInt(value, 'unshift')
  }

  /**
   * Seu funcionamento ainda nao esta muito claro
   * aplicar testes ver seu funcionamento na pratica.
   *
   * @param template Sem informação ainda
   * @param data Sem informação ainda
   *
   */
  public Array (template, data): void {
    this.CUInt(data.length)
    for (const item of data) {
      for (const [name, type] of template) {
        if (name === 'length') continue
        this[type](item[name])
      }
    }
  }

  /**
   *
   * Gera os bytes de varios campos informados de uma só vez
   * usa um template para alocar a informação e fazer a conversão correta
   * do valores
   * 
   * @remarks
   * Nesse caso o template sera informado com antecedencia
   * na criação da nova instancia sendo passado como parametro
   * para o construtor
   *
   * @param data Conjunto de chave valor
   *
   * @returns Metodo d envio de dados a pw server
   */
  public PackAll (data): Promise<Buffer> {
    const template = this.template
    for (const category in template) {
      if (category === 'protocol' || category === 'misc') continue
      const fields = template[category]
      for (const [field, type] of fields) {
        const value = data[category][field]
        if (typeof type === 'string') {
          this[type](value)
        } else {
          this.Array(type[1], value)
        }
      }
    }
    this.OPCode(this.protocol.request)
    return this.Send()
  }

  /**
   * Envia a requisição usando o metodo `Send` após a resposta da pw server
   * o retorno é alocado na vareavel `buffer` e enviado para a classe `Read`
   * junto ao template para a interpretação e alocação dos tipos de dados nas
   * chaves corretas.
   *
   * @param template Conjunto de informação sobre requisição e resposta da pw server
   * 
   * @returns Retorn a resposta da pw server
   */
  public async Response (template = null): Promise<any> {
    let buffer = await this.Send()
    const pos = buffer.indexOf(this.protocol.response, 0, 'hex')
    !template && (template = this.template)
    pos > 0 && (buffer = buffer.slice(pos))
    const read = new Read(buffer, template)
    const response = read.UnpackAll()
    return response
  }

  /**
   * 
   * @param wait Informa ao sockect se precisa ou nao esperar retorno da pw server
   * 
   * @returns Retorna um array buffer para ser lido pela classe `Read.`
   */
  public Send (wait = true): Promise<Buffer> {
    return new Promise((resolve, reject): void => {
      try {
        this.socket.write(Buffer.from(this.data), 'utf8')
        this.socket.on('data', (data) => {
          if ((this.protocol && !this.protocol.wait) || !wait) {
            this.socket.destroy()
            return resolve(null)
          }

          if (data.toString('hex').startsWith(this.protocol.response)) {
            this.socket.destroy()
            return resolve(data)
          } else {
            this.Send()
          }
        })
        this.socket.on('error', data => {
          this.socket.destroy()
          console.error(data)
        })
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }

  /**
   * @returns Retorna os bytes da instancia atual
   */
  public GetData (): string[] {
    return this.data
  }

  /**
   * Converte em array de string formantando a entrada em Hexadecimal
   *
   * @example
   * ```
   * 0x00, 0x48
   * ```
   *
   * @param buffer Buffer para ser formatado em Hexadecimal
   *
   * @returns Um array de strings com bytes formatados em Hexadecimal
   *
   */
  private Format (buffer: Buffer): string[] {
    return buffer.toString('hex').match(/.{2}/g).map(e => `0x${e}`)
  }
}

export default Write
