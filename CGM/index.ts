import { Bot } from 'grammy'

// methods
import { start } from './methods'

const token = process.env.BOT_TOKEN

class CGM {
  bot: Bot

  constructor() {
    const bot = new Bot(token as string)
    this.bot = bot
  }

  init() {
    this.bot.use(start)

    this.bot.start()
  }
}

export default new CGM()
