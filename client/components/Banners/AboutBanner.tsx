import { useNavigate } from 'react-router-dom'

function AboutBanner() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div>
      <img src="team-photo.jpg" alt="team"></img>
      <div>
        <h1>Meet Our Team.</h1>
        <p>Bananas are awesome and so is our team!</p>
        <button onClick={() => goTo('/shop')}>view full range</button>
      </div>
    </div>
  )
}

export default AboutBanner
