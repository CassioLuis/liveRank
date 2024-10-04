import GRoleBase from './GRoleBase'
import GRoleStatus from './GRoleStatus'
import GRolePocket from './GRolePocket'
import GRoleEquipment from './GRoleEquipment'
import GRoleStorehouse from './GRoleStorehouse'
import GRoleTask from './GRoleTask'

class GRoleData {
  /**
   * Estrutura de Objeto
   * {@link http://pwdev.ru/index.php/GRoleData | GRoleData }
   */
  constructor () {
    return {
      base: GRoleBase,
      status: GRoleStatus,
      inventory: GRolePocket,
      equipment: GRoleEquipment,
      storehouse: GRoleStorehouse,
      quests: GRoleTask
    }
  }
}

export default new GRoleData()
