/* eslint-disable react/no-unescaped-entities */
import FounderStory from '../../components/FounderStory/FounderStory'

function About() {
  return (
    <>
    <Banner />
      <div>
        <div>
          <h3>Company Origin</h3>
          <h4>We're all a bit bananas!</h4>
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
        <h3>Founder Stories</h3>
        <FounderStory />
      </div>
    </>
  )
}

export default About
