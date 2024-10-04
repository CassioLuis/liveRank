
class GMPlayerInfo {
  /**
  * Estrutura de Objeto
  * {@link http://pwdev.ru/index.php/GMPlayerInfo | GMPlayerInfo}
  */
  constructor () {
    return [
      ['count', 'CUInt'],
      ['userid', 'UInt32'],
      ['roleid', 'UInt32'],
      ['linkid', 'UInt32'],
      ['localsid', 'UInt32'],
      ['gsid', 'UInt32'],
      ['status', 'UByte'],
      ['name', 'String']
    ]
  }
}

export default new GMPlayerInfo()
