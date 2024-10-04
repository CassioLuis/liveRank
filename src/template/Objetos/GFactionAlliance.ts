
class GFactionAlliance {
  /**
  * Estrutura de Objeto
  * {@link http://pwdev.ru/index.php/GFactionAlliance | GFactionAlliance}
  */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['fid', 'UInt32'],
      ['endtime', 'UInt32']
    ]
  }
}

export default new GFactionAlliance()
