import GRoleInventory from './GRoleInventory'

class GRoleTask {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRoleData | GRoleData}
  */
  constructor () {
    return [
      ['data', 'Octets'],
      ['complete', 'Octets'],
      ['finishTime', 'Octets'],
      ['inventory', ['Array', GRoleInventory]]
    ]
  }
}

export default new GRoleTask()
