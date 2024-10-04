/**
 * Estrutura de requisição e resposta para a Gdeliveryd.
 * Tipo: `Protocol`
 * Serviço: `gdeliveryd`
 * OPCode: `0x164`
 * OPCode RE: `0x165`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GMShutup | GMShutup }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GMShutup_Re | GMKickoutUser Re }
 */
const ShutupUser = {
  protocol: {
    port: 29100,
    request: 0x164,
    wait: false,
    response: '8165'
  },
  query: [
    ['gmroleid', 'UInt32'],
    ['localsid', 'UInt32'],
    ['userid', 'UInt32'],
    ['forbidTime', 'UInt32'],
    ['reason', 'String']
  ]
}

export default ShutupUser
