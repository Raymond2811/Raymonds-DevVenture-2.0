import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footerContainer " >
      <div className="socialIcons">
        <a
          href="https://github.com/Raymond2811"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>
        <a
          href="https://stackoverflow.com/users/22317454/raymond-bautista"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="3x" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy;2024; Designed by RAYMOND</p>
      </div>
    </div>
  );
}