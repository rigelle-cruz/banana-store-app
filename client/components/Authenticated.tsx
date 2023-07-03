import { useAuth0 } from '@auth0/auth0-react'

const useIsAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

interface Props {
  children: React.ReactNode
}
export function IfAuthenticated(props: Props) {
  const { user } = useAuth0()

  const { children } = props
  return useIsAuthenticated() ? (
    <>
      {console.log('Logged in user: ', user?.sub)}
      {children}
    </>
  ) : null
}

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? (
    <>
      {console.log('Not logged in:, you are a guest!')}
      {children}
    </>
  ) : null
}
