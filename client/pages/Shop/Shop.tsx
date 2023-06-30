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
      {!isLoading && data && (
        <>
          <h1>shop.</h1>
          {products.map((product) => (
            <div key={product.name}>
              <Link to={`/shop/${product.id}`}>
                <img
                  src={product.imgSrc}
                  style={{ maxWidth: '400px' }}
                  alt=""
                />
                <p style={{ color: 'white' }}>{product.name}</p>
              </Link>
              <p style={{ color: 'white' }}>${product.price}</p>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default Shop
