import Project from "../components/Project";
import ReelMeal from "../assets/images/Reel&Meal.png";
// import EzBank from "../assets/images/EzBank.png";
// import JATE from "../assets/images/JATE.png";
// import portfolioV1 from "../assets/images/Portfolio.png";
// import SkyInsight from "../assets/images/SkyInsight.png";
// import soon from "../assets/images/coming-soon.jpeg";


export default function Portfolio(){
  const projects = [
    {
      id: 1,
      title: "Real & Meal",
      link:'https://gsandman8.github.io/ReelAndMeal/',
      repo: 'https://github.com/Gsandman8/ReelAndMeal',
      image: ReelMeal,
    },
    {
      id: 2,
      title: "EzBank",
      link:'https://ezbank-6a5a197718d2.herokuapp.com/homepage',
      repo: 'https://github.com/Raymond2811/EzBank',
      // image: EzBank,
    },
    {
      id: 3,
      title: "Coming Soon!",
      
      // image: soon,

    },
    {
      id: 4,
      title: "SkyInsight",
      link:'https://raymond2811.github.io/SkyInsight/',
      repo: 'https://github.com/Raymond2811/SkyInsight',
      // image: SkyInsight,
    },
    {
      id: 5,
      title: "JATE",
      link:'https://editepic.onrender.com/',
      repo: 'https://github.com/Raymond2811/EditEpic',
      // image: JATE,
    },
    {
      id: 6,
      title: "Raymond's DevVenture",
      link:'https://raymond2811.github.io/Raymonds-DevVenture/',
      repo: 'https://github.com/Raymond2811/Raymonds-DevVenture',
      // image: portfolioV1,
    }
  ]
  return (
    <div className="portfolioContainer">
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((item, index) => (
          <div key={item.id} className="col-md-6 projectItem">
            <Project item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}