import React from 'react';
import '../css/projects.css';

const tileData = [
  [
    {
      img: "assets/gamerssaver.jpg",
      title: 'GamersSave',
      description: 'GamersSave is a website for documenting video games. Add a game to your collection through the browse API or create your own. Within each game you can add any save data information you need to keep track of your progress throughout the game. This site uses ASP.Net MVC for its functionality.',
      url: 'https://gamerssave.azurewebsites.net'
    },
    {
      img: "assets/fitnesstogether.png",
      title: 'Fitness Together',
      description: "Social website for users to search for and create events for exercise and exercise-like/outdoor activities. User's events and events they chose to attended are organized on their profile page and attended events are added to their profile's personal calendar.",
      url: 'https://fitness-together-client.herokuapp.com/',
    }
  ],
  [
    {
      img: "assets/medicalconnect.jpg",
      title: 'Medical Connect',
      description: "Social website for users to anonymously share medical articles and innovations, as well as comment and discuss within posts with their username attached. Without a user's name attached to a post, fear of being singled out based on post content or subject can be avoided, while adding their name to comments allows accountablity to comment contents and allow users to recognize each other in other post discussions.",
      url: 'https://medicalconnectclient.herokuapp.com/',
    },
    {
      img: "assets/marsrover.jpg",
      title: 'Mars Rover Images',
      description: "Using NASA's API, this website is used to display images taken by Mars Rovers depending on selected rover and Mars sol date of selected rover. One day on Mars is called a Sol, which is 40 minutes longer than a normal day on Earth.",
      url: 'https://mantlomarsphotos.firebaseapp.com/',
    }
  ],
  [
    {
      img: "assets/API.png",
      title: 'Amiibo API',
      description: 'Using the non-offical Nintendo Amiibo API, this website manipulates returned data to display Nintendo Amiibo information depending on which game the Amiibo character belongs to. This site also features a randomize sidebar that selects and displays a random Amiibo',
      url: 'https://amiibodirectoryapi.firebaseapp.com/',
    },
    {
      img: "assets/theitemcenter.png",
      title: 'The Item Center',
      description: 'Simple static HTML and CSS webpage displaying a fake store front with an odd sense of humor. ',
      url: 'https://rmantlo.github.io/TheItemCenter/',
    }
  ]
];


class Projects extends React.Component {

  projectCards = () => {
    var cards = [];
    for (let i of tileData) {
      cards.push(
        <div className="deck" key={i[0].title}>
          <div className="cardLeft">
            <img src={i[0].img} alt='' />
            <div>
              <h2>{i[0].title}</h2>
              <a id='url' href={i[0].url} target='_block'>{i[0].url}</a>
              <p>{i[0].description}</p>
            </div>
          </div>
          <div className="cardRight">
            <div>
              <h2>{i[1].title}</h2>
              <a id='url' href={i[1].url} target='_block' >{i[1].url}</a>
              <p>{i[1].description}</p>
            </div>
            <img src={i[1].img} alt='' />
          </div>
        </div>
      );
    }
    return cards;
  }


  render() {
    return (
      <div className='projects'>
        <h5 className='projectTitle'>All Project repositories are avaliable on my github.</h5>
        {this.projectCards()}
      </div>
    );
  }

}


export default Projects;