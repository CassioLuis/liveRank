/**
 * Estrutura de requisição e resposta para a Gdeliveryd.
 * Tipo: `Protocol`
 * Serviço: `gdeliveryd`
 * OPCode: `0x162`
 * OPCode RE: `0x163`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GMKickoutUser | GMKickoutUser }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GMKickoutUser_Re | GMKickoutUser Re }
 */
const KickoutUser = {
  protocol: {
    port: 29100,
    request: 0x162,
    wait: false,
    response: '8163'
  },
  query: [
    ['gmroleid', 'UInt32'],
    ['localsid', 'UInt32'],
    ['kickuserid', 'UInt32'],
    ['forbidTime', 'UInt32'],
    ['reason', 'String']
  ]
}

export default KickoutUser
