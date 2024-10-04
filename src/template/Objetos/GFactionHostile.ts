
class GFactionHostile {
  /**
  * Estrutura de Objeto
  * {@link http://pwdev.ru/index.php/GFactionHostile | GFactionHostile}
  */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['fid', 'UInt32'],
      ['endtime', 'UInt32']
    ]
  }
}

export default new GFactionHostile()
