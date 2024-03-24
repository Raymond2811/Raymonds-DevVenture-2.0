import { 
  Card, 
  CardActions, 
  CardMedia, 
  CardContent, 
  Typography, 
  IconButton
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import './Project.css';

export default function Project({item}) {
  return(
    <div className="projectContainer">
      <Card className='projectCard'>
        <CardMedia
          component="img"
          alt={item.title}
          image={item.image}  
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton href={item.link} target="_blank" className='iconButton'>
            <WebIcon fontSize="large"/>
          </IconButton>
          <IconButton href={item.repo} target="_blank" className='iconButton'>
            <GitHubIcon fontSize="large"/>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}