import resumePDF from '../assets/images/Resume.pdf';
import resumePg1 from '../assets/images/ResumeImage.png';
import resumePg2 from '../assets/images/ResumeImage2.png';
import { Carousel } from 'react-bootstrap';

export default function Resume(){
  return (
    <section className='resumeContainer'>
      <h2>Resume</h2>
      <div className='row'>
        <div className='col'>
          <p>Download my {' '}
            <a 
            href={resumePDF} 
            target='_blank'
            className='resumeLink'
            rel="noopener noreferrer"
            >
              resume
            </a>
          </p>

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
        <div className='imageColumn'>
          <div className='carouselContainer'>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={resumePg1}
                  alt="resume page 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={resumePg2}
                  alt="resume page 2"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}