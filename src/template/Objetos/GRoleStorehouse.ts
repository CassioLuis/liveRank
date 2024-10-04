import GRoleInventory from './GRoleInventory'

class GRoleStorehouse {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRoleStorehouse | GRoleStorehouse}
  */
  constructor () {
    return [
      ['capacity', 'UInt32'],
      ['money', 'UInt32'],
      ['items', ['Array', GRoleInventory]],
      ['capacityMaterials', 'UByte'],
      ['capacityDress', 'UByte'],
      ['materials', ['Array', GRoleInventory]],
      ['dress', ['Array', GRoleInventory]],
      ['capacityAvatar', 'UByte'],
      ['avatar', ['Array', GRoleInventory]],
      ['reserved', 'UInt16']
    ]
  }
}

export default new GRoleStorehouse()
