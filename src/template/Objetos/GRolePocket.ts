import GRoleInventory from './GRoleInventory'

class GRolePocket {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRolePocket | GRolePocket}
  */
  constructor () {
    return [
      ['capacity', 'UInt32'],
      ['timeStamp', 'UInt32'],
      ['money', 'UInt32'],
      ['items', ['Array', GRoleInventory]],
      ['reserved1', 'UInt32'],
      ['reserved2', 'UInt32']
    ]
  }
}

export default new GRolePocket()
