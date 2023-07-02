import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductByIdApi } from '../../apis/shop'
import { IndividualProduct } from '../../../models/product'
import { ChangeEvent, useEffect, useState } from 'react'
import FeaturedBanana from '../../components/FeaturedBanana/FeaturedBanana'

function Product() {
  const params = useParams()
  const id = Number(params.id)
  const [selectedValue, setSelectedValue] = useState<string>('')

  const { isLoading, data } = useQuery(['getProduct', id], async () => {
    if (id === undefined) {
      return <div>Error with parameter!</div>
    }
    window.scrollTo(0, 0)
    return await getProductByIdApi(id)
  })

  if (data === undefined) {
    return <div>Error getting product!</div>
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value)
  }

  function handleClick() {
    //implement logic to add to cart.
  }

  const product: any = data

  return (
    <>
      <div className="shop-single">
        <div className="shop-single-product">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <img src={product.imgSrc} alt="" />
              </div>
              <div className="col-12 col-sm-6">
                <div>
                  <h1>{product.name}</h1>
                  <p className="shop-single-product__weight">
                    {product.weight}g
                  </p>
                  <p className="shop-single-product__price">${product.price}</p>
                  <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    className="shop-single-product__select"
                  >
                    <option>1</option>
                    {[1, 2, 3, 4, 5].map((number) => (
                      <option key={number} value={number.toString()}>
                        {number}
                      </option>
                    ))}
                  </select>
                  <p className="shop-single-product__description">
                    {product.description}
                  </p>
                  <button onClick={() => handleClick}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shop-faq__container">
                <h2>FAQ</h2>
                <p>
                  <strong>Random fact, </strong>
                  {product.randomFact}
                </p>
                <p>
                  <strong>Origin, </strong>
                  {product.origin}
                </p>
                <p>
                  <strong>Calories, </strong>
                  {product.calorieCount}
                </p>
                <p>
                  <strong>Taste, </strong>
                  {product.tasteProfile}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <FeaturedBanana />
      </div>
    </>
  )
}

export default Product
