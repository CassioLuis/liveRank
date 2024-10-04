
class GRoleForbid {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/GRoleForbid | GRoleForbid}
  */
  constructor () {
    return [
      ['length', 'CUInt'],
      ['type', 'UByte'],
      ['time', 'UInt32'],
      ['created', 'UInt32'],
      ['reason', 'String']
    ]
  }
}

export default new GRoleForbid()
