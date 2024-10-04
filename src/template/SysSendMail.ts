/**
 * Estrutura de requisição e resposta para a Gdeliveryd.
 * Tipo: `Protocol`
 * Serviço: `gdeliveryd`
 * OPCode: `0x1076` {@link http://pwdev.ru/index.php/SysSendMail | Sysendendmail }
 * OPCode RE: `0x1077` {@link http://pwdev.ru/index.php/SysSendMail_Re | SysSendMail Re }
 * @Returns Retorno não é necessario
 */
const SysSendMail = {
  protocol: {
    port: 29100,
    request: 0x1076,
    wait: false,
    response: '8077'
  },
  query: [
    ['tid', 'UInt32'],
    ['sysid', 'UInt32'],
    ['sys_type', 'UByte'],
    ['receiver', 'UInt32'],
    ['title', 'String'],
    ['message', 'String'],
    ['id', 'UInt32'],
    ['pos', 'UInt32'],
    ['count', 'UInt32'],
    ['max_count', 'UInt32'],
    ['data', 'Octets'],
    ['proctype', 'UInt32'],
    ['expire', 'UInt32'],
    ['guid1', 'UInt32'],
    ['guid2', 'UInt32'],
    ['mask', 'UInt32'],
    ['money', 'UInt32']
  ]
}

export default SysSendMail
