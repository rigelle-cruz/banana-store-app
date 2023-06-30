import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import FeaturedBanana from '../../components/FeaturedBanana/FeaturedBanana'

function Home() {
  return (
    <>
      <FeaturedBanana />
      <p>On Home page</p>
    </>
  )
}

export default Home
