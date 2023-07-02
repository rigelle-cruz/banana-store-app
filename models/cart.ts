export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  imgSrc: string
  weight: number
}

export interface UpdatedCartItemQuantity {
  userId: number
  productId: number
  quantity: number
}
