/**
 * Estrutura de requisição e resposta para a Gdeliveryd.
 * Tipo: `Protocol`
 * Serviço: `gdeliveryd`
 * OPCode: `0x162`
 * OPCode RE: `0x163`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GMKickoutRole | GMKickoutRole }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GMKickoutRole_Re | GMKickoutRole Re }
 */
const KickoutRole = {
  protocol: {
    port: 29100,
    request: 0x168,
    wait: false,
    response: '8169'
  },
  query: [
    ['gmroleid', 'UInt32'],
    ['localsid', 'UInt32'],
    ['kickuserid', 'UInt32'],
    ['forbidTime', 'UInt32'],
    ['reason', 'String']
  ]
}

export default KickoutRole
