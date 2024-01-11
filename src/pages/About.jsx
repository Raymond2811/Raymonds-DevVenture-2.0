import avatar from '../assets/images/Avatar.png';

export default function About(){
  return (
    <section className="aboutContainer">
      <h1>About Me</h1>
      <img src={avatar} alt={avatar}/>
      <p>
        Hi, I'm Raymond Bautista, a 21-year-old Peruvian-American on a coding adventure.
        Before all this, I worked as an assembler at Cutera while juggling classes for electrical engineering at Skyline Community College.
        Then, one day, I stumbled upon a free two-week front-end course. 
        After those 2 weeks I wanted to learn more and improve.
        A friend of mine recommended this bootcamp, and  it's been a roller coaster ride.
        Now, in my free time, I'll watch shows/movies, play video games and hangout with friends. 
        Some of my favorite shows are Snowfall, Better Call Saul, and One Piece. 
        Then of my favorite games at the moment is Rainbow 6 Siege.

      </p>
    </section>
  );
}