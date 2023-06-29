import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getCartApi } from '../../apis/cart'


function Cart () {
  const { isLoading, data } = useQuery('getSongs', async () => {
    return await getCartApi(1)
  })

console.log(data)

  return (
    <>
      <p>On Cart page</p>
    </>
  )
}

export default Cart