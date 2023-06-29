import { withAuthenticationRequired } from '@auth0/auth0-react'

interface Props {
  component: React.ComponentType<unknown>
}

// This is a very handy wrapper component that will redirect the user to the login page
// if they are not logged in
export const ProtectedComponent = ({ component }: Props) => {

  // --- IF WE WANT TO PROTECT OUR PAGES, USE THE CODE BELOW ---//

  // const Component = withAuthenticationRequired(component, {
  //   onRedirecting: () => (
  //     <div>
  //       <h1>Redirecting you to the login page...</h1>
  //     </div>
  //   ),
  // })

  // --- IF WE WANT TO PROTECT OUR PAGES, REMOVE THE LINE BELOW ---//
  const Component = component

  return <Component />
}
export default ProtectedComponent