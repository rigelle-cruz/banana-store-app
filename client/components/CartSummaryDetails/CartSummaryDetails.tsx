import { useState } from 'react'
import { CartItem } from '../../../models/cart'

interface Props {
  products: CartItem[]
}

function calculateTotalCost(cart: CartItem[], shippingPrice: number): number {
  let totalCost = 0;

  if (cart && cart.length > 0) {
    for (const item of cart) {
      const itemCost = item.price * item.quantity;
      totalCost += itemCost;
    }
  }

  // Add the selected shipping price to the total cost
  totalCost += shippingPrice;

  return totalCost;
}

function CartSummaryDetails({ products }: Props) {
 
  const [orderNotes, setOrderNotes] = useState('');
  const [showOrderNotes, setShowOrderNotes] = useState(false);
  const [showShippingDetails, setShowShippingDetails] = useState(false);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState(0);

  const handleOrderNotesClick = () => {
    setShowOrderNotes(prevState => !prevState);
  };

  const handleOrderNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderNotes(event.target.value);
  };

  const handleShippingDetailsClick = () => {
    setShowShippingDetails(prevState => !prevState);
  };

  const handleShippingOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedShippingPrice(Number(event.target.value));
  };

  const totalCost = calculateTotalCost(products, selectedShippingPrice)

  return (
    <div>
      <div>
        <h2>Total: <span>{totalCost}</span></h2>
      </div>

      <div>
        <button onClick={handleOrderNotesClick}>
          {showOrderNotes ? 'Hide order notes -' : 'Add order notes +'}
        </button>

        {showOrderNotes && (
          <input
            type="text"
            value={orderNotes}
            onChange={handleOrderNotesChange}
            placeholder="Enter order notes"
          />
        )}
      </div>
      <div>
        <button onClick={handleShippingDetailsClick}>
          {showShippingDetails ? 'Hide shipping details' : 'View shipping details'}
        </button>

        {showShippingDetails && (
          <div>
            <p>Shipping Details:</p>
            <ul>
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
                <label htmlFor="overnightShipping">Overnight Shipping: $30</label>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      <button>CHECKOUT</button>
    </div>
  )
}

export default CartSummaryDetails
