import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Project({item}) {
  return(
    <div>
      <a href={item.link} target="_blank">
        <h2>{item.title}</h2>
      </a>
      <a
          href={item.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>
    </div>
  )
}