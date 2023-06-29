/* eslint-disable react/no-unescaped-entities */
import Banner from '../../components/Banner/Banner'
import FounderStory from '../../components/FounderStory/FounderStory'

function About() {
  return (
    <>
      <Banner />
      <div>
        <div>
          <h1>Company Origin</h1>
          <h2>We're all a bit bananas!</h2>
          <p>
            In a peculiar twist of fate, a man from Egypt known for his penchant
            for donning a vibrant red jacket and stylish Sony headphones became
            the unlikely muse behind the birth of a remarkable banana company.
          </p>
          <p>
            Drawing inspiration from this eccentric character, five individuals
            from Dev Academy, driven by their deep-seated love for bananas,
            joined forces. Their shared passion and expertise in development
            propelled them to establish a company that would revolutionize the
            banana industry while fostering an atmosphere of hilarity and
            camaraderie.
          </p>
        </div>
        <div>
          <img src="company-image.jpg" alt="company" />
        </div>
      </div>

      <div>
        <h2>Founder Stories</h2>
        <FounderStory />
      </div>
    </>
  )
}

export default About
