import { IconButton } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';
import './Footer.css'


export default function Footer() {
  return (
    <div className="footerContainer " >
      <ul className="socialIcons">
        <li>
          <IconButton
            href="https://github.com/Raymond2811"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButtonHover"
          >
            <GitHub style={{fontSize:'50px', color: 'purple',}} />
          </IconButton>
        </li>
        <li>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButtonHover"
          >
            <Twitter style={{fontSize:'50px',color: 'purple'}} />
          </IconButton>
        </li>
        <li>
          <IconButton
            href="https://www.linkedin.com/in/raymond-bautista-aa20452b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButtonHover"
          >
            <LinkedIn style={{fontSize:'50px',color: 'purple'}}/>
          </IconButton>
        </li>
      </ul>
      <div className="footerBottom">
        <p>Copyright &copy;2024; Designed by RAYMOND</p>
      </div>
    </div>
  );
}