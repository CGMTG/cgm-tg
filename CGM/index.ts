import { Telegraf } from 'telegraf'

// methods
import { group, start } from './methods'

const token = process.env.BOT_TOKEN

class CGM {
  bot: Telegraf

  constructor() {
    const bot = new Telegraf(token as string)
    this.bot = bot
  }

  init() {
    // methods
    this.bot.use(start)
    this.bot.use(group)

    this.bot.launch()
  }
}

export default new CGM()
