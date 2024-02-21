import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Project({item}) {
  return(
    <div className="projectContainer">
      {/* <img src={item.image} alt={item.title} />
      <a href={item.link} target="_blank">
        <h3>{item.title}</h3>
      </a>
      <a href={item.repo} target="_blank" rel="noopener noreferrer" className="githubIcon">
          <FontAwesomeIcon icon={faGithub} size="3x"/>
      </a> */}

      <Card>
      <CardMedia
        component="img"
        alt={item.title}
        height="140"
        image={item.image}  
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aliquid.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{item.link}</Button>
        <Button size="small">{item.repo}</Button>
      </CardActions>
    </Card>
    </div>
  )
}