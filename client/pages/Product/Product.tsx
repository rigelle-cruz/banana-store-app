import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductByIdApi } from '../../apis/shop'
import { IndividualProduct } from '../../../models/product'
import { ChangeEvent } from 'react'
import FeaturedBanana from '../../components/FeaturedBanana/FeaturedBanana'
import { UpdatedCartItemQuantity } from '../../../models/cart'
import { addToCartByIdApi } from '../../apis/cart'

function Product() {
  const params = useParams()
  const id = Number(params.id)
  const [selectedQuantity, setSelectedQuantity] = useState<string>('1')
  const [buttonText, setButtonText] = useState('Add to Cart')

  // Hardcoded user id
  const userId = 1

  const { isLoading, data } = useQuery(['getProduct', id], async () => {
    if (id === undefined) {
      return <div>Error with parameter!</div>
    }
    return await getProductByIdApi(id)
  })

  if (data === undefined) {
    return <div>Error getting product!</div>
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedQuantity(event.target.value)
  }

  async function handleClick(newItem: UpdatedCartItemQuantity) {
    await addToCartByIdApi(newItem)
    setSelectedQuantity('1')
    setButtonText('Added to Cart')
    setTimeout(() => {
      setButtonText('Add to Cart')
    }, 2000)
  }

  const product: any = data


  return (
    <>
      <div>
        <div>
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p>{product.weight}g</p>
          <p>${product.price}</p>
          <select value={selectedQuantity} onChange={handleSelectChange}>
            <option>1</option>
            {[1, 2, 3, 4, 5].map((number) => (
              <option key={number} value={number.toString()}>
                {number}
              </option>
            ))}
          </select>
          <p>{product.description}</p>
          <button
            onClick={() =>
              handleClick({
                userId: userId,
                productId: product.id,
                quantity: Number(selectedQuantity),
              })
            }
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div>
        <h2>FAQ</h2>
        <p>
          <span>Random fact, </span>
          {product.randomFact}
        </p>
        <p>
          <span>Origin, </span>
          {product.origin}
        </p>
        <p>
          <span>Calories, </span>
          {product.calorieCount}
        </p>
        <p>
          <span>Taste, </span>
          {product.tasteProfile}
        </p>
      </div>

      <div>
        <FeaturedBanana />
      </div>
    </>
  )
}

export default Product
