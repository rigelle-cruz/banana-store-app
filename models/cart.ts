export interface CartItem {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  imgSrc: string
  weight: number
}

export interface UpdatedCartItemQuantity {
  userId: string
  productId: number
  quantity: number
}

export interface RemovedItem {
  userId: string
  productId: number
}
