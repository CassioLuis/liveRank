
class GRoleInventory {
  /**
  * Estrutura de Objeto
  * GRoleInventory {@link http://pwdev.ru/index.php/GRoleInventory | GRoleInventory }
  */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['gameId', 'UInt32'],
      ['pos', 'UInt32'],
      ['count', 'UInt32'],
      ['maxCount', 'UInt32'],
      ['hex', 'Octets'],
      ['proctype', 'UInt32'],
      ['expire', 'UInt32'],
      ['guid1', 'UInt32'],
      ['guid2', 'UInt32'],
      ['mask', 'UInt32']
    ]
  }
}

export default new GRoleInventory()
