import { founderStories } from './founderStories'

function FounderStory() {
  return (
    <div>
      {founderStories.map((founder, index) => (
        <div key={index}>
          <img src={founder.image} alt={founder.name} />
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
