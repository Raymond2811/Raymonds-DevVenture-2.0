import { IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import './Footer.css'


export default function Footer() {
  return (
    <footer className="footerContainer ">
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
            href="https://www.linkedin.com/in/raymond-bautista-aa20452b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButtonHover"
          >
            <LinkedIn style={{fontSize:'50px',color: 'purple'}}/>
          </IconButton>
        </li>
        <li>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButtonHover"
          >
            <XIcon style={{fontSize:'50px',color: 'purple'}} />
          </IconButton>
        </li>
      </ul>
      <div className="footerBottom">
        <p>Copyright &copy;2024; Designed by {' '}
          <span style={{fontFamily:'Vujahday Script'}}>RAYMOND</span>
        </p>
      </div>
    </footer>
  );
}