import GRoleInfo from './Objetos/GRoleInfo'

/**
 * Estrutura de requisição e resposta para a Gdeliveryd.
 * Tipo: `CallID`
 * Serviço: `gamedbd`
 * OPCode: `0xBEB`
 * OPCode RE: `0xBEB`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GMListOnlineUser | GetRoleInfoArg }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GetRoleInfoRes | GetRoleInfoRes }
 * @Returns {@link http://pwdev.ru/index.php/GRoleInfo | GRoleInfo }
 */
const RoleData = {
  protocol: {
    port: 29400,
    request: 0xBEB,
    wait: true,
    response: '8BEB'
  },
  misc: [['retcode', 'UInt32']],
  data: [['roleInfo', ['Array', GRoleInfo]]]
}

export default RoleData
