/**
 * Estrutura de requisição e resposta para a Gamed.
 * Tipo: `CallID`
 * Serviço: `gamedbd`
 * OPCode: ` 0xD49`
 * OPCode RE: ` 0xD49`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GetUserRolesArg | GetUserRolesArg }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GetUserRolesRes | GetUserRolesRes }
 * @Returns Retorna os personagens da conta
 */
const UserRoles = {
  protocol: {
    wait: true,
    port: 29400,
    request: 0xD49,
    response: '8d49'
  },
  misc: [['retcode', 'UInt32']],
  data: [
    ['roles', ['Array', [
      ['count', 'CUInt'],
      ['roleid', 'UInt32'],
      ['nickname', 'String']
    ]]]
  ]
}

export default UserRoles
