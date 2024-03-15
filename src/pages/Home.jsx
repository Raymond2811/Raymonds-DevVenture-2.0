import {useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button, IconButton, Typography } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';
import avatar1 from '../assets/images/Avatar1.png'

export default function Home(){

  const [text] = useTypewriter({
    words: ['Frontend Development', 'Backend Development', 'Web Design'],
    loop:{},
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  
  return(
    <section className="homeContainer">
      <div className="column1">
        <Typography variant="h3">
          Hello, I am <br /> Raymond Bautista
        </Typography>
        <p style={{fontSize:'25px'}}> I am into {' '}
          <span style={{fontWeight:'bold', color:'purple'}}>
            {text}
          </span>
          <span style={{color: 'purple'}}>
            <Cursor cursorStyle='|'/>
          </span>
        </p>
        <Button variant="contained" style={{backgroundColor: 'purple', color:'white'}}>
          About Me
        </Button>
        
        <div className="socials">
          <ul className="socialIcons">
            <li>
              <IconButton
                href="https://github.com/Raymond2811"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub style={{fontSize:'50px', color: 'purple',}} />
              </IconButton>
            </li>
            <li>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter style={{fontSize:'50px',color: 'purple'}} />
              </IconButton>
            </li>
            <li>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn style={{fontSize:'50px',color: 'purple'}}/>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>

      <div className="column2">
        <img src={avatar1} alt='avatar'/>
      </div>
    </section>
  )
}