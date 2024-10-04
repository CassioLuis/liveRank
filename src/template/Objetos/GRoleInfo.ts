import GRoleForbid from './GRoleForbid'
import GRoleEquipment from './GRoleEquipment'
import CrossInfoData from './CrossInfoData'

class GRoleInfo {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRoleInfo | GRoleInfo}
  */
  constructor () {
    return [
      ['version', 'UByte'],
      ['id', 'UInt32'],
      ['name', 'Octets'],
      ['race', 'UInt32'],
      ['classe', 'UInt32'],
      ['gender', 'UByte'],
      ['level', 'UInt32'],
      ['level2', 'UInt32'],
      ['posX', 'Float'],
      ['posY', 'Float'],
      ['posZ', 'Float'],
      ['worldTag', 'UInt32'],
      ['customData', 'Octets'],
      ['customStamp', 'UInt32'],
      ['customStatus', 'Octets'],
      ['characterMode', 'Octets'],
      ...GRoleEquipment as [],
      ['status', 'UByte'],
      ['deleteTime', 'UInt32'],
      ['createTime', 'UInt32'],
      ['lastLoginTime', 'UInt32'],
      ['forbidden', ['Array', GRoleForbid]],
      ['referrerRole', 'UInt32'],
      ['cashAdd', 'UInt32'],
      ['crossdata', ['Array', CrossInfoData]],
      ['reincarnationData', 'Octets'],
      ['realmData', 'Octets']
    ]
  }
}

export default new GRoleInfo()
