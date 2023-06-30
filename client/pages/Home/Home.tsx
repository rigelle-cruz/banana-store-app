/* eslint-disable react/no-unescaped-entities */
import FeaturedBanana from '../../components/FeaturedBanana/FeaturedBanana'
import HomeBanner from '../../components/Banners/HomeBanner'

function Home() {
  return (
    <>
      <HomeBanner />
      <div>
        <h1>Banana Benefits</h1>
        <h2>Energizing Snack</h2>
        <p>
          Loaded with carbohydrates and natural sugars, bananas provide a quick
          and sustained energy boost. They also contain potassium, which helps
          maintain muscle function and electrolyte balance.
        </p>
        <h2>Mood Enhancement</h2>
        <p>
          Bananas contain tryptophan, a precursor to serotonin, the "happy
          hormone." Increasing serotonin levels, bananas may help improve mood
          and combat feelings of depression and stress.
        </p>
        <img src="images/yellow-banana.png" alt="banana"></img>
      </div>

      <FeaturedBanana />
    </>
  )
}

export default Home
