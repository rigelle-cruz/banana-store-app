import { useState } from 'react'
import { CartItem } from '../../../models/cart'
import { useNavigate } from 'react-router-dom'
import { clearCartApi } from '../../apis/cart'

interface Props {
  products: CartItem[]
  userId: number
  refetch: () => void
}

function calculateTotalCost(cart: CartItem[], shippingPrice: number): number {
  let totalCost = 0

  if (cart && cart.length > 0) {
    for (const item of cart) {
      const itemCost = item.price * item.quantity
      totalCost += itemCost
    }
  }

  // Add the selected shipping price to the total cost
  totalCost += shippingPrice

  return totalCost
}

function CartSummaryDetails({ products, userId, refetch }: Props) {
  const navigate = useNavigate()
  function goTo(link: string) {
    clearCartApi(userId)
    refetch()
    navigate(link)
  }

  const [orderNotes, setOrderNotes] = useState('')
  const [showOrderNotes, setShowOrderNotes] = useState(false)
  const [showShippingDetails, setShowShippingDetails] = useState(false)
  const [selectedShippingPrice, setSelectedShippingPrice] = useState(0)

  const handleOrderNotesClick = () => {
    setShowOrderNotes((prevState) => !prevState)
  }

  const handleOrderNotesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrderNotes(event.target.value)
  }

  const handleShippingDetailsClick = () => {
    setShowShippingDetails((prevState) => !prevState)
  }

  const handleShippingOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedShippingPrice(Number(event.target.value))
  }

  const totalCost = calculateTotalCost(products, selectedShippingPrice)

  return (
    <div className="cart__sidebar">
      <div className="cart__sidebar-total-container">
        <span className="cart__sidebar-total">Total: </span>
        <span className="cart__sidebar-cost">${totalCost}</span>
      </div>

      <div>
        <button onClick={handleOrderNotesClick} className="cart__sidebar-btn">
          {showOrderNotes ? 'Hide order notes -' : 'Add order notes +'}
        </button>

        {showOrderNotes && (
          <input
            className="cart__sidebar-order-input"
            type="text"
            value={orderNotes}
            onChange={handleOrderNotesChange}
            placeholder="Enter order notes"
          />
        )}
      </div>
      <div>
        <button
          onClick={handleShippingDetailsClick}
          className="cart__sidebar-btn"
        >
          {showShippingDetails
            ? 'Hide shipping details'
            : 'View shipping details'}
        </button>

        {showShippingDetails && (
          <div className="cart__shipping-details">
            <p className="cart__shipping-title">Shipping Details:</p>
            <ul className="cart__shipping-list">
              <li>
                <input
                  type="radio"
                  id="standardShipping"
                  name="shippingOption"
                  value={10}
                  checked={selectedShippingPrice === 10}
                  onChange={handleShippingOptionChange}
                />
                <label htmlFor="standardShipping">Standard Shipping: $10</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="expressShipping"
                  name="shippingOption"
                  value={20}
                  checked={selectedShippingPrice === 20}
                  onChange={handleShippingOptionChange}
                />
                <label htmlFor="expressShipping">Express Shipping: $20</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="overnightShipping"
                  name="shippingOption"
                  value={30}
                  checked={selectedShippingPrice === 30}
                  onChange={handleShippingOptionChange}
                />
                <label htmlFor="overnightShipping">
                  Overnight Shipping: $30
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        className="cart__checkout-btn"
        onClick={() => goTo('/thankyoupage')}
      >
        CHECKOUT
      </button>
    </div>
  )
}

export default CartSummaryDetails
