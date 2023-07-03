/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from 'react-router-dom'

function ThankYouPage() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }
  return (
    <>
      <div className="thankYou-Header">
        <div>
          <h1>
            Thank You For
            <br />
            Your Purchase!
          </h1>
          <p className='thanks-para'>We're totally bananas for you!</p>
          <button onClick={() => goTo('/')}>home</button>
        </div>
      </div>
    </>
  )
}

export default ThankYouPage
