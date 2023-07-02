/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from 'react-query'
import {
  clearCartApi,
  getCartByIdApi,
  updateCartItemQuantityByProductIdApi,
} from '../../apis/cart'
import {
  CartItem,
  RemovedItem,
  UpdatedCartItemQuantity,
} from '../../../models/cart'
import CartSummaryDetails from '../../components/CartSummaryDetails/CartSummaryDetails'

function Cart() {
  const { isLoading, data, refetch } = useQuery(['getCart'], async () => {
    return getCartByIdApi(1)
  })

  //Hardcoded user id. This will change if we implement Auth0.
  const userId = 1

  //FUNCTIONS TO HANDLE QUANTITY CHANGES
  async function handleIncrease(
    updatedCartItemQuantity: UpdatedCartItemQuantity
  ) {
    await updateCartItemQuantityByProductIdApi(updatedCartItemQuantity)
    refetch()
  }

  async function handleDecrease(
    updatedCartItemQuantity: UpdatedCartItemQuantity
  ) {
    await updateCartItemQuantityByProductIdApi(updatedCartItemQuantity)
    refetch()
  }

  async function handleRemove(removedItem: RemovedItem) {
    console.log('You clicked on the remove button!')
    //ADD API THAT REMOVES THE ITEM.
    refetch()
  }

  async function handleRemoveAll() {
    await clearCartApi(userId)
    refetch()
  }

  const products: CartItem[] = data

  return (
    <>
    <div>
      {products &&
        products.map((item) => (
          <div key={item.name}>
            <div>
              <img src={item.imgSrc} style={{ maxWidth: '200px' }} alt="" />
            </div>
            <div>
              <h2>{item.name}</h2>
              <p>{item.weight * item.quantity}g</p>
            </div>
            <div>
              <p>$ {item.price * item.quantity}</p>
            </div>
            <div>
              <div>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    handleDecrease({
                      userId: userId,
                      productId: item.productId,
                      quantity: item.quantity - 1,
                    })
                  }
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    handleIncrease({
                      userId: userId,
                      productId: item.productId,
                      quantity: item.quantity + 1,
                    })
                  }
                >
                  +
                </button>
              </div>
              <div>
                <img
                  style={{
                    cursor: 'pointer',
                  }}
                  src="/images/trash-can.svg"
                  alt=""
                  onClick={() =>
                    handleRemove({
                      productId: item.productId,
                      userId: userId,
                    })
                  }
                />
              </div>
            </div>
            {item.name}
          </div>
        ))}
      <button style={{ cursor: 'pointer' }} onClick={() => handleRemoveAll()}>clear cart</button>
      </div>
      <div>
      <CartSummaryDetails products={products}/>
      
      </div>
    </>
  )
}

export default Cart
