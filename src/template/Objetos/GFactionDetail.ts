import FMemberInfo from './FMemberInfo'

class GFactionDetail {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GFactionDetail | GFactionDetail}
  */
  constructor () {
    return [
      ['fid', 'UInt32'],
      ['name', 'String'],
      ['nivel', 'UByte'],
      ['marechalId', 'UInt32'],
      ['announce', 'String'],
      ['sysinfo', 'String'],
      ['members', ['Array', FMemberInfo]],
      ['lastOpTime', 'UInt32']
      // ['alliance', ['Array', GFactionAlliance]],
      // ['hostile', ['Array', GFactionHostile]],
      // ['apply', ['Array', GFactionRelationApply]]
    ]
  }
}

export default new GFactionDetail()
