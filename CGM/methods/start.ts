import { Composer } from 'telegraf'
import shortid from 'shortid'

import { prisma } from '../../providers/prisma'

const start = new Composer()

start.command('start', async (ctx) => {
  let user = await prisma.user.findUnique({ where: { id: ctx.from?.id } })

  if (user === null) {
    user = await prisma.user.create({
      data: {
        id: ctx.from?.id as number,
        name: ctx.from?.first_name as string,
        token: shortid.generate(),
      },
    })
  }

  ctx.reply('Your token is: ' + user.token)
})

export { start }
