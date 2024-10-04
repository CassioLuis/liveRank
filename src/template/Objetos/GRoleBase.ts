import GRoleForbid from './GRoleForbid'

class GRoleBase {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRoleBase | GRoleBase}
  */
  constructor () {
    return [
      ['version', 'UByte'],
      ['id', 'UInt32'],
      ['name', 'String'],
      ['race', 'UInt32'],
      ['cls', 'UInt32'],
      ['gender', 'UByte'],
      ['customData', 'Octets'],
      ['configData', 'Octets'],
      ['customStamp', 'UInt32'],
      ['status', 'UByte'],
      ['deleteTime', 'UInt32'],
      ['createTime', 'UInt32'],
      ['lastLogin', 'UInt32'],
      ['forbidden', ['Array', GRoleForbid]],
      ['helpStates', 'Octets'],
      ['spouse', 'UInt32'],
      ['userid', 'UInt32'],
      ['crossData', 'Octets'],
      ['reserved2', 'UByte'],
      ['reserved3', 'UByte'],
      ['reserved4', 'UByte']
    ]
  }
}

export default new GRoleBase()
