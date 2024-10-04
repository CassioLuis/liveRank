class GRoleStatus {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRoleStatus | GRoleStatus}
  */
  constructor () {
    return [
      ['version', 'UByte'],
      ['level', 'UInt32'],
      ['level2', 'UInt32'],
      ['exp', 'UInt32'],
      ['sp', 'UInt32'],
      ['pp', 'UInt32'],
      ['hp', 'UInt32'],
      ['mp', 'UInt32'],
      ['posX', 'Float'],
      ['posY', 'Float'],
      ['posZ', 'Float'],
      ['worldTag', 'UInt32'],
      ['invaderState', 'UInt32'],
      ['invaderTime', 'UInt32'],
      ['pariahTime', 'UInt32'],
      ['reputation', 'UInt32'],
      ['customStatus', 'Octets'],
      ['filterData', 'Octets'],
      ['characterMode', 'Octets'],
      ['instancekeylist', 'Octets'],
      ['dbTimeExpire', 'UInt32'],
      ['dbTimeMode', 'UInt32'],
      ['dbTimeBegin', 'UInt32'],
      ['dbTimeUsed', 'UInt32'],
      ['dbTimeMax', 'UInt32'],
      ['timeUsed', 'UInt32'],
      ['dbTimeData', 'Octets'],
      ['storesize', 'UInt16'],
      ['petcorral', 'Octets'],
      ['property', 'Octets'],
      ['varData', 'Octets'],
      ['skill', 'Octets'],
      ['storehousepasswd', 'Octets'],
      ['waypointlist', 'Octets'],
      ['coolingtime', 'Octets'],
      ['npcRelation', 'Octets'],
      ['multiExpCtrl', 'Octets'],
      ['storageTask', 'Octets'],
      ['factionContrib', 'Octets'],
      ['forceData', 'Octets'],
      ['onlineAward', 'Octets'],
      ['profitTimeData', 'Octets'],
      ['countryData', 'Octets'],
      ['kingData', 'Octets'],
      ['meridianData', 'Octets'],
      ['extraprop', 'Octets'],
      ['titleData', 'Octets'],
      ['reicarnationData', 'Octets'],
      ['realmData', 'Octets'],
      ['reserved2', 'UByte'],
      ['reserved3', 'UByte']
    ]
  }
}

export default new GRoleStatus()
