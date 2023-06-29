import { useAuth0 } from '@auth0/auth0-react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  function goTo(link: string) {
    navigate(link)
  }

  return (
    <footer>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>

        {!isAuthenticated && (
          <li>
            <button onClick={handleLogin}>login</button>
          </li>
        )}

        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        )}
      </ul>
    </footer>
  )
}

export default Footer
