import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import * as shop from './db/shop'

const server = express()

server.get('/api/v1/shop', async (req, res) => {
  try {
    const products = await shop.getAllProducts()
    res.json({ products })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

export default server
