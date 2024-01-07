import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footerContainer position-absolute top-100 start-50 translate-middle" >
      <div className="socialIcons">
        <a
          href="https://github.com/Raymond2811"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy;2024; Designed by Raymond B.</p>
      </div>
    </div>
  );
}