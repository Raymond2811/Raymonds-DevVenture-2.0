import resume from '../assets/images/Resume.pdf'

export default function Resume(){
  return (
    <div>
      <h1>Resume</h1>
      
      <p>Download my <a href={resume} target='_blank'>resume</a></p>

      <h2> Front-end Proficiencies </h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2> Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}