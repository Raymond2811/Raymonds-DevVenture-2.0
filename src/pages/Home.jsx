import {useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home(){

  const [text] = useTypewriter({
    words: ['Frontend Development', 'Backend Development', 'Web Designing'],
    loop:{},
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  
  return(
    <section className="homeContainer">
      <h2>Hello, I am <br/> Raymond Bautista</h2>
      <p> I am into {' '}
        <span style={{fontWeight:'bold', color:'red'}}>
          {text}
        </span>
        <span style={{color: 'red'}}>
          <Cursor cursorStyle='|'/>
        </span>
      </p>
      <button> About Me </button>
      
      <div className="socials">
        <ul className="socialIcons">
          <li>
            <a
            href="https://github.com/Raymond2811"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} fontSize="35px"/>
            </a>
          </li>
          <li>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} fontSize="35px" />
            </a>
          </li>
          <li>
            <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} fontSize="35px" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}