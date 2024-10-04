import Write from '../parser/Write'
import RoleData from '../template/RoleData'
import UserRoles from '../template/UserRoles'
import CashTotalRole from '../template/CashTotalRole'
// import GameMaster from '../Gdeliveryd/GameMaster.service'
// import { RoleUser } from '../../models/user'

class User {
    /**
   * Busca todos os personagens na conta
   */
  // static AllRolesAccout (userid: number): Promise<RoleUser[]> {
  //   return new Promise(async (resolve, reject): Promise<void> => {
  //     try {
  //       const write = new Write(UserRoles)
  //       write.UInt32(-1)
  //       write.UInt32(userid)
  //       write.OPCode(0xD49)
  //       const { data } = await write.Response()
  //       for (const role of data.roles) {
  //         const data = await GameMaster.ListOnlineUsers(1024)
  //         const { base, status } = await this.RoleData(role.roleid)
  //         role.cls = base.cls
  //         role.level = status.level
  //         role.level2 = status.level2
  //         role.online = data.some((x: any) => role.roleid === x.roleid)
  //       }
  //       resolve(data.roles)
  //     } catch (err) {
  //       console.error(err)
  //       reject(err)
  //     }
  //   })
  // }

  /**
   * Busca todas as informações da do personagem
   * @remarks
   * Até entao nao tem como trazer informações em tempo real do personagem,
   * essas informações sao do ultimo logout do personagem.
   * Tipo: `CallID`
   * Serviço: `gamedbd`
   * OPCode: `0x1F43` {@link http://pwdev.ru/index.php/GetRoleDataArg | GetRoleDataArg }
   * @param roleid ID do personagem.
   * @returns Retorna todas as informações do personagem
   */
  static RoleData (roleid: number): Promise<any> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const write = new Write(RoleData)
        write.UInt32(-1)
        write.UInt32(roleid)
        write.OPCode(0x1F43)
        const data = await write.Response()
        resolve(data)
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }

  /**
   * Por algum motivo nao existe link de documentação desse opcode
   * @param role todas as informações do personagem
   */
  static Saverole (role: any): Promise<void> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const template = JSON.parse(JSON.stringify(RoleData))
        template.protocol.wait = false
        template.protocol.request = 0x1f42
        template.protocol.response = '9f42'
        const write = new Write(template)
        write.UInt32(-1)
        write.UInt32(role.base.id)
        write.UByte(1)
        write.PackAll(role)
        resolve()
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }

  /**
   * Busca a quantia de cash em uma conta
   * Tipo: `CallID`
   * Serviço: `gamedbd`
   * OPCode: `0xBF2` {@link http://pwdev.ru/index.php/GetCashTotalArg | GetCashTotalArg}
   * @param userid ID Mysql do usuario.
   * @returns Retorna a quantia de cash na conta pontos da coroa e level vip
   */
  static CashRole (userid: number): Promise<any> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const write = new Write(CashTotalRole)
        write.UInt32(-1)
        write.UInt32(userid)
        write.OPCode(0xBF2)
        const { data } = await write.Response()
        resolve(data)
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }

  /**
   * Remove a senha do banco de um determinado personagem
   * @remarks
   * Alterações em personagems devem ser feitas quando o personagem nao estiver online.
   * Tipo: `CallID`
   * Serviço: `gamedbd`
   * OPCode: `0xD4A` {@link http://pwdev.ru/index.php/ClearStorehousePasswdArg | ClearStorehousePasswdArg}
   * @param roleid ID do personagem.
   * @param name Nickname do personagem
   */
  static ClearBankPasswd (roleid: number, name: string): Promise<void> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const write = new Write(29400)
        write.UInt32(-1)
        write.UInt32(roleid)
        write.String(name)
        write.Octets('')
        write.OPCode(0xD4A)
        await write.Send(false)
        resolve()
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }

  /**
   * Altera o norme do personagem
   * @remarks
   * Alterações em personagems devem ser feitas quando o personagem nao estiver online.
   * Tipo: `CallID`
   * Serviço: `gamedbd`
   * OPCode: `0xD4C` {@link http://pwdev.ru/index.php/RenameRoleArg | RenameRoleArg}
   * @param roleid ID do personagem.
   * @param name Nickname do personagem
   * @param newname Novo Nickname a ser inserido
   */
  static RenameRole (roleid: number, name: string, newname: string): Promise<void> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const write = new Write(29400)
        write.UInt32(-1)
        write.UInt32(roleid)
        write.String(name)
        write.String(newname)
        write.OPCode(0xD4C)
        await write.Send(false)
        resolve()
      } catch (err) {
        console.error(err)
        reject(err)
      }
    })
  }
}

export default User
