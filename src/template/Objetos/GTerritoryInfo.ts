
class GTerritoryInfo {
  /**
   * Estrutura de Objeto
   * {@link http://pwdev.ru/index.php/GTerritoryDetail | GTerritoryDetail }
   */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['id', 'UInt16'],
      ['level', 'UInt16'],
      ['owner', 'UInt32'],
      ['occupyTime', 'UInt32'],
      ['challenger', 'UInt32'],
      ['deposit', 'UInt32'],
      ['cutoffTime', 'UInt32'],
      ['battleTime', 'UInt32'],
      ['bonusTime', 'UInt32'],
      ['color', 'UInt32'],
      ['status', 'UInt32'],
      ['timeout', 'UInt32'],
      ['maxbonus', 'UInt32'],
      ['challengeTime', 'UInt32'],
      ['challengerDetails', 'String'],
      ['reserved1', 'UByte'],
      ['reserved2', 'UByte'],
      ['reserved3', 'UByte']
    ]
  }
}

export default new GTerritoryInfo()
