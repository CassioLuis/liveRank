import Rank from './service/Rank.service'
import { Tail } from 'tail'

const rankInstance = Rank.getInstance()

const logFile = '/home/logs/world2.formatlog'

const tail = new Tail(logFile)

tail.on('line', (line: string): void => processLine(line))
tail.on('error', (error: any) => console.error('Erro ao ler o arquivo de log:', error))

function processLine(line: string): void {
  if (/type=258:attacker|type=2:attacker/.test(line)) {
    rankInstance.execute(line)
  }
}
