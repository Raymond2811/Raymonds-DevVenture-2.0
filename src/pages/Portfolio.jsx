import Project from "../components/Project"

export default function Portfolio(){
  const projects = [
    {
      title: "Real & Meal",
      link:'https://gsandman8.github.io/ReelAndMeal/',
      repo: 'https://github.com/Gsandman8/ReelAndMeal',
    },
    {
      title: "EzBank",
      link:'https://ezbank-6a5a197718d2.herokuapp.com/homepage',
      repo: 'https://github.com/Raymond2811/EzBank',
    },
    {
      title: "Coming Soon!",
      

    },
    {
      title: "SkyInsight",
      link:'https://raymond2811.github.io/SkyInsight/',
      repo: 'https://github.com/Raymond2811/SkyInsight',
    },
    {
      title: "JATE",
      link:'https://editepic.onrender.com/',
      repo: 'https://github.com/Raymond2811/EditEpic',
    },
    {
      title: "Raymond's DevVenture",
      link:'https://raymond2811.github.io/Raymonds-DevVenture/',
      repo: 'https://github.com/Raymond2811/Raymonds-DevVenture',
    }
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map(item=> (
        <Project item={item}/>
      ))}
    </div>
  );
}