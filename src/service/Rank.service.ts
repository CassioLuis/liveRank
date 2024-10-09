import Chat from './Chat.service'
import UserService from './User.service'

/* Lista de Canais

 0 - Geral
 1 - Global
 2 - Grupo
 3 - Clã
 4 - ?
 5 - Aviso
 6 - Aviso laranja
 7 - Comércio
 8 - ?
 9 - broadcast
 10 - Aviso azul
 11 - Rosa
 12 - Mensageiro
 13 - Branco
 14 - Aviso branco dnv
 15 - InterServidor
 
 0 - Geral,
 1 - Global,
 2 - Grupo,
 3 - Guild,
  Danos = 5,
  Combate,
 7 - Comercio,
 9 - SystemRed,
 10 - Outros,
 12 - Horn,
  Corneta, // Traduzido Cruzao no google tradutor
  Desconhecido1,
  Desconhecido2,
 15 - Interserver
*/
/*
  race: 4,
  cls: 6,
*/
import Mysql from '../infra/mysql'
import insertOnRank from '../infra/insert_on_rank'
import { PoolConnection } from 'mysql2/promise'
import ranking from '../infra/get_ranking'

export default class Rank {

  private static instance: Rank
  mysql: Mysql = Mysql.getInstance()

  private constructor () {
  }

  async execute (gsLog: string) {
    if (!gsLog) throw new Error('gslog Not Found!')
    const attackerID = this.parseLog(gsLog, 'attacker')
    const attackedID = this.parseLog(gsLog, 'attacked')
    const attackerRole = await this.getAttackerRole(attackerID)
    const attackedRole = await this.getAttackedRole(attackedID)
    const roleData = this.roleDataDTO (attackerRole, attackedRole)
    await this.insertOnRank(roleData)
    const attackerRank = await this.getRanking(attackerID)
    this.sendChatMsg(attackerRank, attackedRole, 7)
  }

  roleDataDTO (attackerRole: any, attackedRole: any) {
    return {
      kname: attackerRole.base.name,
      kid: attackerRole.base.id,
      krace: attackerRole.base.race,
      kcls: attackerRole.base.cls,
      dname: attackedRole.base.name,
      did: attackedRole.base.id,
      drace: attackedRole.base.race,
      dcls: attackedRole.base.cls
    }
  }

  async getRanking (roleId: number) {
    const connection: PoolConnection = await this.mysql.connect()
    try {
      const [[rank]]: any = await connection.query(ranking, [roleId])
      return rank
    } catch (error) {
      console.log(error)
    } finally {
      connection.release()
    }
  }
  
  async insertOnRank (roleData: any) {
    
    const {
      kname, kid, krace, kcls, dname, did, drace, dcls
    } = roleData
  
    const connection: PoolConnection = await this.mysql.connect()

    try {
      await connection.query(insertOnRank, [kname, kid, krace, kcls, dname, did, drace, dcls])
    } catch (e) {
      console.log(e)      
    } finally {
      connection.release()
    }
  }

  async getAttackerRole (attacker: any) {
    return UserService.RoleData(Number(attacker))
  }

  async getAttackedRole (attacked: any) {
    return UserService.RoleData(Number(attacked))
  }

  parseLog (log: string, logRole: string) {
    const logType = {
      attacker: (data: string) => data.split(':')[8].split('=')[1],
      attacked: (data: string) => data.split(':')[6].split('=')[1],
    }
    return logType[logRole](log) || console.log('Erro parselog')       
  }

  async sendChatMsg (attackerRank: any, attacked: any, chat: any) {
    const { n_kills, n_death, rank_pos, name, kid } = attackerRank
    const attackedName = attacked.base.name
    const msg = `TOP ${rank_pos} eliminou ${attackedName}. ${name} está ${n_kills} / ${n_death}.`
    await Chat.BroadCast(msg, chat, kid)
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Rank()
    }
    return this.instance
  }
}
