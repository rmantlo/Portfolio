import React from 'react';
import '../css/projects.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

const tileData = [
  {
    img: "assets/fitnesstogether.png",
    title: 'Fitness Together',
    description: 'Social website for excise and activity event meet ups',
    url: 'https://fitness-together-client.herokuapp.com/',
    cols: 2,
  },
  {
    img: "assets/marsrover.jpg",
    title: 'Mars Rover Images',
    description: 'website to display images taken by rovers on mars depending on sol date',
    url: 'https://mantlomarsphotos.firebaseapp.com/',
    cols: 1,
  },
  {
    img: "assets/API.png",
    title: 'Amiibo API',
    description: 'Website manipulating api to display nintendo amiibo information',
    url: 'https://amiibodirectoryapi.firebaseapp.com/',
    cols: 1,
  },
  {
    img: "assets/medicalconnect.jpg",
    title: 'Medical Connect',
    description: 'Social website for sharing and discussing medical articles and innovations',
    url: 'https://medicalconnectclient.herokuapp.com/',
    cols: 2,
  },
  {
    img: "assets/theitemcenter.png",
    title: 'Medical Connect',
    description: 'Social website for sharing and discussing medical articles and innovations',
    url: 'https://rmantlo.github.io/TheItemCenter/',
    cols: 2,
  },
  {
    img: "assets/CSSSkeleton.png",
    title: 'CSS/HTML Skeleton',
    description: 'Fun first project creating a skeleton using only CSS and HTML',
    url: 'https://codepen.io/rmantlo/pen/ZNPGXW',
    cols: 1,
  },
];

function Projects() {
  let classes = useStyles();


  return (
    <div className='projects'>
      <div>

      </div>
      <div className='projectGrid'>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title} subtitle={<span>{tile.description}</span>} actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} target='_blank' href={tile.url}>
                  Link
            </IconButton>
              } />
            </GridListTile>
          ))}
        </GridList>
      </div>
      {/* <div class="cProjects">
        <div>
          <img />

        </div>
      </div> */}
    </div>
  );

}


export default Projects;