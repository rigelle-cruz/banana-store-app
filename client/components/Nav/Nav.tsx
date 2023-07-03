import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'

function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/`,
      },
    })
  }

  function handleLogout() {
    logout()
  }

  function goTo(link: string) {
    navigate(link)
  }

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <header className="header">
      <nav className="header__nav">
        {width < breakpoint && (
          <div className="mobile__nav-menu" onClick={toggleMenu}>
            {open ? (
              <IoClose className="mobile__icon" style={{ fontSize: '30px' }} />
            ) : (
              <GiHamburgerMenu
                className="mobile__icon"
                style={{ fontSize: '30px' }}
              />
            )}
          </div>
        )}
        {width < breakpoint && open && (
          <ul className="mobile__nav-list">
            <li>
              {user ? <p>Signed in as: {user?.nickname}</p> : <p>Guest</p>}
            </li>

            <li>
              <button onClick={() => goTo('/')}>home</button>
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

            <IfNotAuthenticated>
              <li>
                <button onClick={handleLogin}>log in</button>
              </li>
            </IfNotAuthenticated>
            <IfAuthenticated>
              <li>
                <button onClick={handleLogout}>log out</button>
              </li>
            </IfAuthenticated>
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
        )}
        {width > breakpoint && (
          <>
            <ul>
              <li>
                <img src="/images/user-icon.svg" alt="icon" />
                {user ? <p>Signed in as: {user?.nickname}</p> : <p>Guest</p>}
              </li>
            </ul>
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
              <IfNotAuthenticated>
                <li>
                  <button onClick={handleLogin}>log in</button>
                </li>
              </IfNotAuthenticated>
              <IfAuthenticated>
                <li>
                  <button onClick={handleLogout}>log out</button>
                </li>
              </IfAuthenticated>
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
          </>
        )}
      </nav>
    </header>
  )
}

export default Nav
