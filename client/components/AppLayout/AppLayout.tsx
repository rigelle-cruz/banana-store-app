import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
      This is a Navbar!
      <Outlet />
    </div>
  )
}

export default AppLayout
