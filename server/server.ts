import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import * as shop from './db/shop'
import * as product from './db/product'
import * as cart from './db/cart'
import * as home from './db/home'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

//SHOP GET ROUTE - ALL PRODUCTS
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

//PRODUCT GET ROUTE - PRODUCT BY ID
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

//CART GET ROUTE - CART BY USER ID
server.get('/api/v1/cart/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const targetCart = await cart.getCartById(id)

    res.json(targetCart)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

//HOME GET ROUTE - FEATURED BY ID
server.post('/api/v1/home', async (req, res) => {
  try {
    const featuredArr = req.body
    const targetProducts = await home.getFeaturedById(featuredArr)

    res.json(targetProducts)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default server
