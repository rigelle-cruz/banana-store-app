import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getAllProductsApi } from '../../apis/shop'
import { ShopProduct } from '../../../models/shop'

function Shop() {
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

  return (
    <>
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="shop__h1-container">
                <h1>&nbsp;&nbsp;Shop.&nbsp;&nbsp;</h1>
              </div>
              <div className="products row">
                {!isLoading && data && (
                  <>
                    {products.map((product) => (
                      <div
                        key={product.name}
                        className="products__product col-12 col-sm-6"
                      >
                        <div className="products__product-img">
                          <Link
                            to={`/shop/${product.id}`}
                            className="products__product-overlay"
                          >
                            <button className="products__product-btn">
                              Shop
                            </button>
                            <img src={product.imgSrc} alt={product.name} />
                          </Link>
                        </div>
                        <p className="products__product-name">
                          <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </p>
                        <p className="products__product-price">
                          ${product.price}
                        </p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
