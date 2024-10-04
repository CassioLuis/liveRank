
class GFactionRelationApply {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GFactionRelationApply | GFactionRelationApply}
  */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['type', 'UInt32'],
      ['fid', 'UInt32'],
      ['endtime', 'UInt32']
    ]
  }
}

export default new GFactionRelationApply()
