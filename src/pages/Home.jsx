import {useTypewriter, Cursor } from 'react-simple-typewriter';
import { Button, Typography } from '@mui/material';
import avatar1 from '../assets/images/Avatar1.png'
import { Link } from 'react-router-dom';

export default function Home(){

  const [text] = useTypewriter({
    words: 
      [
      'Frontend Development', 
      'Backend Development', 
      'Web Design',
      ],
    loop:{},
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  
  return(
    <section className="homeContainer">
      <div className="col">
        <Typography variant="h2" className='text'>
          Hello, I am <br /> Raymond Bautista
        </Typography>
        <p 
          className='typewriter'
        > 
          I am into {' '}
          <span 
            style={{fontWeight:'bold', color:'purple'}}
          >
            {text}
          </span>
          <span 
            style={{color: 'purple'}} 
          >
            <Cursor cursorStyle='|'/>
          </span>
        </p>
        <Button 
          variant="contained" 
          className='aboutMeBtn'
        >
          <Link
            to="/about"
            style={{color:'white'}}
          >
            About Me
          </Link>
        </Button>
      </div>

      <div className="imageColumn">
        <img src={avatar1} alt='avatar'/>
      </div>
    </section>
  )
}