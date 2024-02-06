import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project({item}) {
  return(
    <div className="container text-center projectContainer">
      <img src={item.image} alt={item.title} />
      <a href={item.link} target="_blank">
        <h3>{item.title}</h3>
      </a>
      <a href={item.repo} target="_blank" rel="noopener noreferrer" className="githubIcon">
          <FontAwesomeIcon icon={faGithub} size="3x"/>
      </a>
    </div>
  )
}