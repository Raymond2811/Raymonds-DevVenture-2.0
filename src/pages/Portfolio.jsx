import Project from "../components/Project";
import ReelMeal from "../assets/images/Reel&Meal.png";
import EzBank from "../assets/images/EzBank.png";
import JATE from "../assets/images/JATE.png";
import portfolioV1 from "../assets/images/Portfolio.png";
import SkyInsight from "../assets/images/SkyInsight.png";
import BlazeDisplayz from  '../assets/images/BlazeDisplayz.png';


export default function Portfolio(){
  const projects = [
    {
      title: "Real & Meal",
      link:'https://gsandman8.github.io/ReelAndMeal/',
      repo: 'https://github.com/Gsandman8/ReelAndMeal',
      image: ReelMeal,
      desc: 'Website that helps you find great restaurants by city and discover top-rated movies by genre.',
    },
    {
      title: "EzBank",
      link:'https://ezbank-6a5a197718d2.herokuapp.com/homepage',
      repo: 'https://github.com/Raymond2811/EzBank',
      image: EzBank,
      desc: 'A user-friendly application that provides seamless and secure banking services.',
    },
    {
      title: "BlazeDisplayz",
      link:'https://the-blazed-render-displayz.onrender.com',
      repo:'https://github.com/Gsandman8/BlazeDisplayz',
      image: BlazeDisplayz,
      desc: 'This app showcases our full-stack development skills through a MERN stack E-commerce website.',
    },
    {
      title: "SkyInsight",
      link:'https://raymond2811.github.io/SkyInsight/',
      repo: 'https://github.com/Raymond2811/SkyInsight',
      image: SkyInsight,
      desc: "Offers real-time weather updates for your selected city, developed to improve API data retrieval skills.",
    },
    {
      title: "JATE",
      link:'https://editepic.onrender.com/',
      repo: 'https://github.com/Raymond2811/EditEpic',
      image: JATE,
      desc: 'This app, explores Progressive Web Applications (PWAs) and offers basic text editing.',
    },
    {
      title: "Raymond's DevVenture",
      link:'https://raymond2811.github.io/Raymonds-DevVenture/',
      repo: 'https://github.com/Raymond2811/Raymonds-DevVenture',
      image: portfolioV1,
      desc: 'Simple portfolio app made using html and css at the start of my developer journey.',
    }
  ]
  return (
    <section className="portfolioContainer">
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((item, index) => (
          <div key={index} className="col">
            <Project item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}