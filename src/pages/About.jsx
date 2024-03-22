import avatar2 from '../assets/images/Avatar2.png';
import berkeley from '../assets/images/Berkeley.jpeg';

export default function About(){
  return (
    <section className="aboutContainer">
      <h2>About Me</h2>
      <div className="row">
        <div className="imageColumn">
          <img src={avatar2} alt="avatar" />
        </div>
        <div className="col">
          <p>
            Hello! I'm Raymond Bautista, a recent graduate and aspiring full-stack developer. 
            I'm excited to bring my fresh perspective and knowledge to real-world projects.
          </p>
          <p>
            Proficient in a range of front-end technologies such as React, JQuery, and more, 
            I also possess back-end proficiencies, including APIs, Node.js, MongoDB, and other 
            technologies. My academic projects have equipped me with a solid foundation for 
            crafting responsive and user-friendly web applications.
          </p>
          <p>
            I thrive on tackling challenges and turning them into opportunities for growth. 
            My ability to solve problems and pay close attention to details allows me to 
            contribute effectively in team-based development settings.
          </p>
          <p>
            In my spare time, I enjoy watching shows and movies, playing video games, and 
            spending time with friends. Some of my favorites include Snowfall, Better Call Saul, 
            and One Piece. Currently, Rainbow 6 Siege is my go-to game.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>
            I graduated from UC Berkeley Extension, where I honed my 
            technical skills and developed a passion for applying technology to real-world 
            challenges.
          </p>
          <p>
            As a recent graduate, I'm enthusiastic about continuous learning. 
            I am committed to staying updated on the latest industry trends and technologies, 
            ensuring that my skills are always aligned with the dynamic demands of the field.
          </p>
          <p>
            Throughout my academic journey, I actively participated in group projects, 
            fostering strong communication and collaboration skills. I'm ready to 
            bring this collaborative spirit to a professional setting.
          </p>
          <p>
            I'm on the lookout for opportunities to apply and expand my skills. 
            If you're seeking a dedicated and quick-learning full-stack developer to 
            contribute to your team, let's connect.
          </p>
        </div>
        <div className="imageColumn">
          <img src={berkeley} alt="UC Berkeley Extension" />
        </div>
      </div>
    </section>
  );
}