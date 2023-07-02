/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from 'react-router-dom'

function ThankYouPage() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }
  return (
    <>
      <div>
        <h1>Thank You For Your Purchase!</h1>
        <p>We're totally bananas for you!</p>
        <button onClick={() => goTo('/')}>home</button>
      </div>
    </>
  )
}

export default ThankYouPage
