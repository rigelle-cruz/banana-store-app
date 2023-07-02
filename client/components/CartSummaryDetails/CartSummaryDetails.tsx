import { useState } from 'react';
import { CartItem } from '../../../models/cart';

interface Props {
  products: CartItem[];
}

function calculateTotalCost(cart: CartItem[]): number {
  let totalCost = 0;

  if (cart && cart.length > 0) {
    for (const item of cart) {
      const itemCost = item.price * item.quantity;
      totalCost += itemCost;
    }
  }

  return totalCost;
}

function CartSummaryDetails({ products }: Props) {
  const totalCost = calculateTotalCost(products);

  return (
    <div>
      <div>
        <h2>Total: </h2>
        <p>{totalCost}</p>
      </div>

      <div></div>
      <button>CHECKOUT</button>
    </div>
  );
}

export default CartSummaryDetails;