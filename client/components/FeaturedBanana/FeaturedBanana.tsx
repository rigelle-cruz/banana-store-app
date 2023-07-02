/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAllProductsApi } from '../../apis/shop'
import { ShopProduct } from '../../../models/shop'

function FeaturedBanana() {
  const { isLoading, data } = useQuery('getProducts', async () => {
    return await getAllProductsApi()
  })

  //Check if data is undefined.
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!data) {
    return <p>Error loading data!</p>
  }

  const products: ShopProduct[] = data
  const productIdsToShow = [2, 3]
  const filteredProducts = products.filter((product) =>
    productIdsToShow.includes(product.id)
  )

  return (
    <>
      {!isLoading && data && (
        <>
          <div className="home-featured">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Best sellers</h2>
                  <div className="products row">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="products__product col-12 col-sm-6"
                      >
                        <div className="products__product-img">
                          <Link
                            to={`/shop/${product.id}`}
                            className="products__product-overlay"
                            onClick = {() => window.scrollTo(0,0)}
                          >
                            <button className="products__product-btn">
                              Shop
                            </button>
                            <img src={product.imgSrc} alt={product.name}  />
                          </Link>
                        </div>
                        <p className="products__product-name" onClick = {() => window.scrollTo(0,0)}>
                          <Link to={`/shop/${product.id}`}>{product.name}
                          </Link>
                        </p>
                        <p className="products__product-price">
                          ${product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default FeaturedBanana
