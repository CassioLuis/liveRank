import GTerritoryInfo from './Objetos/GTerritoryInfo'

/**
 * Estrutura de requisição e resposta para a Gamed
 * Tipo: `CallID`
 * Serviço: `gamdbd`
 * OPCode: `0x35F` {@link http://pwdev.ru/index.php/DBBattleLoadArg | DBBattleLoadArg }
 * OPCode RE: `0x35f` {@link http://pwdev.ru/index.php/DBBattleLoadRes | DBBattleLoadRes }
 * @Returns Retorna a lista de territorios e suas informações
 */
const TerritoryDetail = {
  protocol: {
    wait: true,
    port: 29400,
    request: 0x35f,
    response: '835f'
  },
  misc: [['retcode', 'UInt16']],
  data: ['Array', GTerritoryInfo]
}

export default TerritoryDetail
