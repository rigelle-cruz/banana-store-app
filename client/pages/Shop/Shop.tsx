import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getAllProductsApi } from '../../apis/shop'

interface Products {
  id: number
  name: string
  price: number
  imgSrc: string
}


function Shop () {
  const { isLoading, data } = useQuery('getSongs', async () => {
    return await getAllProductsApi()
  })

  //Check if data is undefined.
  if (data === undefined) {
    return (
      <p>Error getting data!</p>
    )
  }

const products : Products[] = data

  return (
    <>
      <h1>Shop.</h1>
      {
       products.map(product => (
        <div key = {product.name}>
          <img src={product.imgSrc} style={{maxWidth : '400px'}} alt="" />
          <p style={{color : 'white'}}>{product.name}</p>
          <p style={{color : 'white'}}>${product.price}</p>
          </div>
       )
       )
      }
      
    </>
  )
}

export default Shop