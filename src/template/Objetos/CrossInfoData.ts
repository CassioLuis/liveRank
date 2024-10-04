class CrossInfoData {
  /**
  * Estrutura de Classe
  * {@link http://pwdev.ru/index.php/CrossInfoData | CrossInfoData}
  */
  constructor () {
    return [
      ['remote_roleid', 'UInt32'],
      ['data_timestamp', 'UInt32'],
      ['cross_timestamp', 'UInt32'],
      ['src_zoneid', 'UInt32'],
      ['reservados1', 'UInt32'],
      ['reservados2', 'UInt32']
    ]
  }
}
export default new CrossInfoData()
