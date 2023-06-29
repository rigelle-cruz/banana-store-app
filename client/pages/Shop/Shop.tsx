import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getAllProductsApi } from '../../apis/shop'



function Shop () {
  const { isLoading, data } = useQuery('getSongs', async () => {
    return await getAllProductsApi()
  })

console.log(data)
  return (
    <>
    
      <p>On Shop page</p>
    </>
  )
}

export default Shop