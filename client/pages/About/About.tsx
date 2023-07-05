/* eslint-disable react/no-unescaped-entities */
import AboutBanner from '../../components/Banners/AboutBanner'
import FounderStory from '../../components/FounderStory/FounderStory'

function About() {
  return (
    <>
      <AboutBanner />

      <div className="about-stories">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Founder Stories</h2>
              <FounderStory />
            </div>
          </div>
        </div>
      </div>

      <div className="about-origin">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-vertical-center col-flex-end">
              <div className="col-constrain">
                <h2>Company Origin</h2>
                <p className="subtitle">We're all a bit bananas!</p>
                <p>
                  In a peculiar twist of fate, a man from Egypt known for his
                  penchant for donning a vibrant red jacket and stylish Sony
                  headphones became the unlikely muse behind the birth of a
                  remarkable banana company.
                </p>
                <p>
                  Drawing inspiration from this eccentric character, five
                  individuals from Dev Academy, driven by their deep-seated love
                  for bananas, joined forces. Their shared passion and expertise
                  in development propelled them to establish a company that
                  would revolutionize the banana industry while fostering an
                  atmosphere of hilarity and camaraderie.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="col-full-bleed">
                <img
                  src="images/company-origin.jpg"
                  style={{
                    filter: 'brightness(85%)',
                  }}
                  alt="company"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
