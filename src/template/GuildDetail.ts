import GFactionDetail from './Objetos/GFactionDetail'

/**
 * Estrutura de requisição e resposta para a Gamedbd.
 * Tipo: `CallID`
 * Serviço: `gamedbd`
 * OPCode: `0x1200`
 * OPCode RE: `0x1200`
 * Pacote de Requisição {@link http://pwdev.ru/index.php/GetFactionDetailArg | GetFactionDetailArg }
 * Pacote de Resposta: {@link http://pwdev.ru/index.php/GetFactionDetailRes | GetFactionDetailRes }
 * @returns {@link http://pwdev.ru/index.php/GFactionDetail | Gfactiondetail }
 */
const GuildDetail = {
  protocol: {
    wait: true,
    port: 29400,
    request: 0x1200,
    response: '9200'
  },
  misc: [['retcode', 'UInt32']],
  data: GFactionDetail
}

export default GuildDetail
