import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductByIdApi } from '../../apis/shop'



function Product () {
  const { isLoading, data } = useQuery('getSongs', async () => {
    return await getProductByIdApi(2)
  })

console.log(data)

  return (
    <>
      <p>On Product page</p>
    </>
  )
}

export default Product