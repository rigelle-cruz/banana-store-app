import { useNavigate } from 'react-router-dom'

function AboutBanner() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div className="about-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-6">
            <div className="col-full-bleed">
              <img
                className="about-banner__img"
                src="images/about-hero.jpg"
                alt="team"
              />
              <div className="about-banner__mobile d-md-none">
                <h1>Meet Our Team.</h1>
                <p className="subtitle about-banner__subtitle">
                  Bananas are awesome and so is our team!
                </p>
                <button onClick={() => goTo('/shop')}>view full range</button>
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-vertical-center d-none d-md-flex">
            <div className="col-constrain">
              <h1>Meet Our Team.</h1>
              <p className="subtitle about-banner__subtitle">
                Bananas are awesome and so is our team!
              </p>
              <button onClick={() => goTo('/shop')}>view full range</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBanner
