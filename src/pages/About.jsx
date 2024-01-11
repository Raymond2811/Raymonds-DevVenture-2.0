import avatar from '../assets/images/Avatar.png';

export default function About(){
  return (
    <section className="aboutContainer">
      <h1>About Me</h1>
      <img src={avatar} alt={avatar}/>
      <p>
        Hi, I'm Raymond Bautista, 21 years old, and I have lived in San Bruno, CA all my life. 
        My family is Peruvian, making me a first-generation Peruvian American. 
        When I was around 14 or 15, I started working at a bakery to help my mom. 
        Part of me wished I hadn't taken the job because it was tiresome and extremely cold, 
        working in the freezer making sandwiches alongside my grandpa, starting at 7 am. 
        Despite the challenges, I'm glad I could help my mom and meet some cool people.
      </p>
      <p>
        As soon as I turned 16, I began searching for a job and landed one at JCPenney. 
        I enjoyed working there because most of the workers were around my age, and we got along well, 
        making the time pass quickly. 
        After a year, I decided to seek a new job for higher pay and ended up at Best Buy. 
      </p>
      <p>
        Noticing that Best Buy couldn't offer more hours, 
        I continued working at JCPenney until I finished paying for my Invisalign. 
        Eventually, COVID hit, and I quit JCPenney; by the end of the year, the Best Buy store closed down. 
        Instead of looking for another job, I decided to focus on my classes as they became more challenging 
        at Skyline Community College, where I initially pursued electrical engineering.
      </p>
      <p>
        A year later, I realized electrical engineering wasn't for me. 
        One day, at my uncle's house, I overheard a job opportunity, decided to take it without hesitation, 
        and landed a job as an assembler at Cutera. 
        Despite having no experience in assembling, my boss assured me they would teach me everything I needed to know. 
        The job was relatively simple, involving assembling hand pieces for a bigger machine.
      </p>
      <p> 
        I eventually quit when the fall semester started. 
        During fall, I discovered a free two-week front-end course, tried it, liked it, 
        and decided to take coding classes at my school. 
        Though I didn't enjoy the classes offered, I still wanted to learn.
      </p>
      <p>
        A friend recommended a bootcamp, and although I initially didn't plan to apply, 
        I clicked on the survey to see if it was right for me. 
        I ended up scheduling an interview with the school, thinking it was a questionnaire. 
        I passed the interview and got in. 
        So far, I find the lectures interesting, and it's cool to learn how apps are built. 
        In my free time, I watch shows/movies, play video games, and hang out with friends. 
        Some of my favorite shows include Snowfall, Better Call Saul, and One Piece. 
        Currently, my favorite game is Rainbow 6 Siege.
      </p>
    </section>
  );
}