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
  img_src: string
}


function Shop () {
  const { isLoading, data } = useQuery('getSongs', async () => {
    return await getAllProductsApi()
  })

  const products : Products = data

console.log(data)
  return (
    <>
      <h1>Shop.</h1>
      {
        data?.map()
      }
      
    </>
  )
}

export default Shop