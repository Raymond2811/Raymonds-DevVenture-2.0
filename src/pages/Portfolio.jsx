import Project from "../components/Project";
import ReelMeal from "../assets/images/Reel&Meal.png";
import EzBank from "../assets/images/EzBank.png";
import JATE from "../assets/images/JATE.png";
import portfolioV1 from "../assets/images/Portfolio.png";
import SkyInsight from "../assets/images/SkyInsight.png";
import soon from "../assets/images/coming-soon.jpeg";


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
      desc: 'A user-friendly application that provides seamless and secure banking services',
    },
    {
      title: "BlazeDisplayz",
      link:'https://the-blazed-render-displayz.onrender.com',
      repo:'https://github.com/Gsandman8/BlazeDisplayz',
      image: soon,
      desc: 'This application was created as a showcase of our full stack development skills by creating a MERN stack E-Commerce website with stripe checkout capabilities.',
    },
    {
      title: "SkyInsight",
      link:'https://raymond2811.github.io/SkyInsight/',
      repo: 'https://github.com/Raymond2811/SkyInsight',
      image: SkyInsight,
      desc: "This app provides real-time weather updates for the city you've selected. Developed this project to enhance my skills in retrieving data from APIs.",
    },
    {
      title: "JATE",
      link:'https://editepic.onrender.com/',
      repo: 'https://github.com/Raymond2811/EditEpic',
      image: JATE,
      desc: 'I built this app to further my understanding of Progressive Web Applications (PWAs). The application serves as a simple text editor',
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