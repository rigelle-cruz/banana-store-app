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
    res.json(products)
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

//CART POST ROUTE - ADD TO CART BY ID
server.post('/api/v1/cart', async (req, res) => {
  try {
    const newItem = req.body

    await cart.addToCartById(newItem)

    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

//CART PATCH ROUTE - UPDATE CART BY ID
server.patch('/api/v1/cart', async (req, res) => {
  try {
    const updateItem = req.body

    await cart.updateCartItemQuantityByProductId(updateItem)

    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

//CART DELETE ROUTE - CLEAR CART
server.delete('/api/v1/cart/all', async (req, res) => {
  try {
    const input = req.body.userId

    await cart.clearCart(input)

    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

//CART DELETE ROUTE - CLEAR ITEM
server.delete('/api/v1/cart/single', async (req, res) => {
  try {
    const deleteItem = req.body as cart.deleteItem

    await cart.removeCartItemByProductId(deleteItem)

    res.sendStatus(200)
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
