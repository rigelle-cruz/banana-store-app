import { founderStories } from './founderStories'

function FounderStory() {
  return (
    <div className="row">
      {founderStories.map((founder, index) => (
        <div className="about-stories__container col-12 col-sm-6" key={index}>
          <img
            className="about-stories__img"
            style={{ filter: 'grayscale(100%)' }}
            src={founder.image}
            alt={founder.name}
          />
          <h5>{founder.name}</h5>
          <h6>{founder.title}</h6>
          <p>{founder.description}</p>
          <p>Favorite Banana: {founder.favouriteBanana}</p>
        </div>
      ))}
    </div>
  )
}

export default FounderStory
