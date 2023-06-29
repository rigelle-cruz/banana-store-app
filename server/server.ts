import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import * as shop from './db/shop'
import * as product from './db/product'

const server = express()

//SHOP GET ROUTE
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

//PRODUCT GET ROUTE
server.get('/api/v1/shop/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const targetProduct = await product.getProductById(id)
    res.json(targetProduct)
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
