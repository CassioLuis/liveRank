class FMemberInfo {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/FMemberInfo | FMemberInfo}
  */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['roleid', 'UInt32'],
      ['level', 'UByte'],
      ['occupation', 'UByte'],
      ['froleid', 'UByte'],
      ['logindday', 'UInt16'],
      ['online', 'UByte'],
      ['name', 'String'],
      ['title', 'String'],
      ['contrib', 'UInt32'],
      ['delayexpel', 'UByte'],
      ['expeltime', 'UInt32']
    ]
  }
}

export default new FMemberInfo()
