import 'dotenv/config'
import next from 'next'
import http from 'http'
import SocketIO from 'socket.io'
import Express, { Request, Response } from 'express'
import CGM from '../CGM'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

const main = async () => {
  try {
    await app.prepare()
    const express = Express()
    const server = http.createServer(express)
    const io = new SocketIO.Server(server)

    io.on('connection', (socket) => {
      console.log(socket.id, 'joined')
    })

    express.all('*', (req: Request, res: Response) => {
      return handle(req, res)
    })

    CGM.init()

    server.listen(port, (err?: any) => {
      if (err) throw err
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()
