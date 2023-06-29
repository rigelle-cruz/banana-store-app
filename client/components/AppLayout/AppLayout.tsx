import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function AppLayout() {
  return (
    <div>
      This is a Navbar!
      <Nav />
      <Outlet />
    </div>
  )
}

export default AppLayout
