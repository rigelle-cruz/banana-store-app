import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

function Nav() {
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
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__border-right border-white">
            <button className="color-white" onClick={() => goTo('/')}>
              home
            </button>
          </li>
          <li>
            <button className="color-white" onClick={() => goTo('/about')}>
              about
            </button>
          </li>
          <li className="header__border-right">
            <button onClick={() => goTo('/contact')}>contact</button>
          </li>
          <li>
            <button onClick={() => goTo('/shop')}>shop</button>
          </li>
        </ul>
        <ul className="header__user-login-list">
          {!isAuthenticated && (
            <li>
              <button onClick={handleLogin}>log in</button>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>log out</button>
            </li>
          )}
          <li>
            <button onClick={() => goTo('/cart')}>
              <img
                className="header__cart-icon"
                src="/images/icon-cart.svg"
                alt=""
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
