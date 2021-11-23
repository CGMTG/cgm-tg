import { Router } from 'express'
import { prisma } from '../../providers/prisma'

const authRouter = Router()

authRouter.post('/login', async (req, res) => {
  const body = req.body
  const { token } = body

  const user = await prisma.user.findFirst({ where: { token } })

  if (user) res.json({ ok: true, user })
  else {
    res.json({ ok: false })
  }
})

export default authRouter
