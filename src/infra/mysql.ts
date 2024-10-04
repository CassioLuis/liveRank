import mysql, { Pool, PoolConnection } from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

export default class Mysql {
  
  connection = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 20
  }
  static instance: Mysql
  pool: Pool = mysql.createPool(this.connection)

  private constructor () {
  }

  static createPool () {
  }

  async connect () {
    return this.pool.getConnection()
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new Mysql()
    }
    return this.instance
  }
}
