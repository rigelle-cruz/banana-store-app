/* eslint-disable react/no-unescaped-entities */
import FeaturedBanana from '../../components/FeaturedBanana/FeaturedBanana'
import HomeBanner from '../../components/Banners/HomeBanner'

function Home() {
  return (
    <>
      <HomeBanner />
      <div className="home-benefits">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-6 col-vertical-center col-flex-end">
              <div className="col-constrain">
                <h2>Banana Benefits</h2>
                <p className="subtitle">Energizing Snack</p>
                <p>
                  Loaded with carbohydrates and natural sugars, bananas provide
                  a quick and sustained energy boost. They also contain
                  potassium, which helps maintain muscle function and
                  electrolyte balance.
                </p>
                <p className="subtitle">Mood Enhancement</p>
                <p>
                  Bananas contain tryptophan, a precursor to serotonin, the
                  "happy hormone." Increasing serotonin levels, bananas may help
                  improve mood and combat feelings of depression and stress.
                </p>
              </div>
            </div>
            <div className="col col-md-6">
              <div className="col-full-bleed">
                <img src="images/yellow-banana.png" alt="banana"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturedBanana />
    </>
  )
}

export default Home
