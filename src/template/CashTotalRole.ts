/**
 * Estrutura de requisição e resposta para a Gamedbd.
 * Tipo: `CallID`
 * Serviço: `gamedbd`
 * OPCode: `0xBF2` {@link http://pwdev.ru/index.php/GetCashTotalArg | GetCashTotalArg }
 * OPCode RE: `0xBF2` {@link http://pwdev.ru/index.php/GetCashTotalRes | GetCashTotalRes }
 * @Returns Retorna a quantia de cash na conta
 */
const CashTotalRole = {
  protocol: {
    wait: true,
    port: 29400,
    request: 0xBF2,
    response: '8bf2'
  },
  misc: [['retcode', 'UInt32']],
  data: [
    ['cashTotal', 'UInt32'],
    ['cashVipScore', 'UInt32'],
    ['cashVipLevel', 'UInt32']
  ]
}

export default CashTotalRole
