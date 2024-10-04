import GMPlayerInfo from './Objetos/GMPlayerInfo'

/**
 * Estrutura de requisição e resposta para a Gdeliveryd.
 * Tipo: `Protocol`
 * Serviço: `gdeliveryd`
 * OPCode: `0x160`
 * OPCode RE: `0x161`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GMListOnlineUser | GMListOnlineUser }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GMListOnlineUser_Re | GMListOnlineUser Re }
 * @Returns {@link http://pwdev.ru/index.php/GMPlayerInfo | GMPlayerInfo}
 */
const ListUsersOnline = {
  protocol: {
    port: 29100,
    request: 0x160,
    wait: true,
    response: '8161'
  },
  data: [
    ['gmroleid', 'UInt32'],
    ['localsid', 'UInt32'],
    ['handler', 'UInt32'],
    ['users', ['Array', GMPlayerInfo]]
  ]
}

export default ListUsersOnline
