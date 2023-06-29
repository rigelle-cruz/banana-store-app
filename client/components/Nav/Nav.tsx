import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/home`,
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
    <nav>
      <ul>
        <li>
          <button onClick={() => goTo('/home')}>home</button>
        </li>
        <li>
          <button onClick={() => goTo('/about')}>about</button>
        </li>
        <li>
          <button onClick={() => goTo('/contact')}>contact</button>
        </li>
        <li>
          <button onClick={() => goTo('/shop')}>shop</button>
        </li>
        <li>
          <button onClick={() => goTo('/cart')}>CART ICON</button>
        </li>

        {!isAuthenticated && (
          <li>
            <button onClick={handleLogin}>LOGIN ICON</button>
          </li>
        )}

        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>LOGOUT ICON</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
