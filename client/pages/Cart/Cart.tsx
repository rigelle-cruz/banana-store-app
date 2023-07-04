/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from 'react-query'
import {
  clearCartApi,
  getCartByIdApi,
  removeCartItemApi,
  updateCartItemQuantityByProductIdApi,
} from '../../apis/cart'
import {
  CartItem,
  RemovedItem,
  UpdatedCartItemQuantity,
} from '../../../models/cart'
import CartSummaryDetails from '../../components/CartSummaryDetails/CartSummaryDetails'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Cart() {
  const { user } = useAuth0()
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  const userId =
    user === undefined ? 'a0' : user.sub === undefined ? 'a0' : user.sub

  const { data, refetch } = useQuery(['getCart'], async () => {
    return await getCartByIdApi(userId)
  })

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
    if (updatedCartItemQuantity.quantity > 0) {
      await updateCartItemQuantityByProductIdApi(updatedCartItemQuantity)
      refetch()
    }
  }

  async function handleRemove(removedItem: RemovedItem) {
    console.log('You clicked on the remove button!')
    removeCartItemApi(removedItem)
    refetch()
  }

  async function handleRemoveAll() {
    await clearCartApi(userId)
    refetch()
  }

  const products: CartItem[] = data

  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button
                className="cart__continue-btn"
                onClick={() => goTo('/shop')}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="cart__items">
                {products &&
                  products.map((item) => (
                    <div key={item.name} className="cart__item">
                      <div className="cart__img-container">
                        <img src={item.imgSrc} alt="" />
                      </div>
                      <div className="cart__item-name">
                        <h2>{item.name}</h2>
                        <p>{item.weight * item.quantity}g</p>
                      </div>
                      <div className="cart__item-price">
                        <p>$ {item.price * item.quantity}</p>
                      </div>
                      <div className="cart__item-qty">
                        <div className="cart__item-qty-selector">
                          <button
                            className="cart__item-qty-btn"
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
                            className="cart__item-qty-btn"
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
                        <div className="cart__item-trash">
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
                    </div>
                  ))}
              </div>
              <button
                className="cart__clear-btn"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRemoveAll()}
              >
                clear cart
              </button>
            </div>
            <div className="col-12 col-md-4">
              <CartSummaryDetails
                products={products}
                userId={userId}
                refetch={refetch}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
