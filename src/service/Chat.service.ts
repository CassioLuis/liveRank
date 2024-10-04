/* eslint-disable no-unused-vars */

import Write from '../parser/Write'

enum ChatChannels {
  Geral,
  Global,
  Grupo,
  Guild,
  Danos = 5,
  Combate,
  Comercio,
  SystemRed = 9,
  Outros,
  Horn,
  Corneta, // Traduzido Cruzao no google tradutor
  Desconhecido1,
  Desconhecido2,
  Interserver
}

class Chat {
  /**
  * Envia uma mensagem em qualquer chat do jogo
  * Tipo: `Protocol`
  * Serviço: `gdeliveryd`
  * OPCode: `0x78` {@link http://pwdev.ru/index.php/ChatBroadCast | ChatBroadCast }
  * @param message Mesagem a ser enviada
  * @param channel Canal que aparece-ra a mensagem
  * @param roleid ID do emissor da mensagem
  */
  static async BroadCast (message: string, channel: any, roleid = 0): Promise<void> {
    const write = new Write(29300)
    write.UByte(channel)
    write.UByte(10)
    write.UInt32(roleid)
    write.String(message)
    write.Octets('')
    write.OPCode(0x78)
    await write.Send(false)
  }

  static PrivateChat (message: string, channel: string, roleid = 0): Promise<void> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const write = new Write(29300)
        write.UByte(ChatChannels[channel])
        write.UByte(0)
        write.Octets('MY_TESTE2')
        write.UInt32(1072)
        write.Octets('MY_TESTE2')
        write.UInt32(roleid)
        write.String(message)
        write.Octets('')
        write.UInt32(105)
        write.OPCode(0x60)
        await write.Send(false)
        resolve()
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }

  static async GetFriends (reloid: any): Promise<any> {
    const write = new Write(29300)
    write.UInt32(reloid)
    write.OPCode(0xC9)
    const data = await write.Response(false)
    console.log(data)    
  }
}

export default Chat
