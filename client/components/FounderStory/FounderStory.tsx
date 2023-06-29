import { founderStories } from './founderStories'

function FounderStory() {
  return (
    <div>
      {founderStories.map((founder, index) => (
        <div key={index}>
          <h5>{founder.name}</h5>
          <p>{founder.description}</p>
          <p>Favorite Banana: {founder.favouriteBanana}</p>
        </div>
      ))}
    </div>
  )
}

export default FounderStory
