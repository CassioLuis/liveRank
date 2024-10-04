import GRoleData from './Objetos/GRoleData'

/**
 * Estrutura de requisição e resposta para a Gamedbd.
 * Tipo: `CallID`
 * Serviço: `gamedbd`
 * OPCode: `0x1F43`
 * OPCode RE: `0x1F43`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GetRoleDataArg | GetRoleDataArg }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GetRoleDataRes | GetRoleDataRes }
 * @Returns {@link http://pwdev.ru/index.php/GRoleData | GRoleData}
 */
const Role = {
  protocol: {
    wait: true,
    port: 29400,
    request: 0x1F43,
    response: '9f43'
  },
  misc: [['retcode', 'UInt32']],
  ...GRoleData
}

export default Role
