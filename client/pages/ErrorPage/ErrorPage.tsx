import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'


function ErrorPage () {

  return (
    <>
      <p>On the Error Page</p>
    </>
  )
}

export default ErrorPage