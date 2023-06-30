import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductByIdApi } from '../../apis/shop'
import { IndividualProduct } from '../../../models/product'



function Product () {
  
  const params = useParams()
  const id = Number(params.id)
  const { isLoading, data } = useQuery('getSongs', async () => {
    if (id === undefined) {
      return (
        <div>Error with parameter!</div>
      )
    }
    return await getProductByIdApi(id)
  })

  if (data === undefined) {
    return (
      <div>Error getting product!</div>
    )
  }

  const product : IndividualProduct = data

console.log(data)

  return (
    <>

      <p>On Product page</p>
      <div>
        <div><img src={data.imgSrc} alt="" /></div>
        <div></div>
      </div>
    </>
  )
}

export default Product