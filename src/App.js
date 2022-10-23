import React, {Component} from 'react';
import './App.css'

import Navbar from './components/js/Navbar';
import Card from './components/js/Card';

import favorited from './images/favorited.png'
import film from './images/film.png'
import netflix from './images/netflix.png'
import watched from './images/watched.png'

let coraline = 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg';


class App extends Component{

  state = {
    user: "Bentornato yolly98",
    cards: [
      {id:0, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:1, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:2, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:3, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:4, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:5, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:6, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:7, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:8, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:9, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:10, name: "Coraline", image: coraline, isFavorited: favorited, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      
    ]
  }

  handleExit(){
    console.log("exit button pressed");
  }

  handlefilter(){
    console.log("filter button pressed");
  }

  handleSearch = inputText => {
    console.log("search text pressed [" + inputText + "]")
  }

  handleOpenCard = cardName => {
    console.log("open button pressed [" + cardName + "]");
  }

  handleDeleteCard = cardName => {
    console.log("delete button pressed [" + cardName + "]");
  }

  render(){
    return (
      <>
        <Navbar 
          user = {this.state.user}
          onExit = {this.handleExit}
          onSearch = {this.handleSearch}
          onFilter = {this.handlefilter}
        />
        <div className='container'>
          <div className='row'>
            {
              this.state.cards.map(card => (
                <Card
                  key = {card.id}
                  onOpenCard = {this.handleOpenCard}
                  onDeleteCard = {this.handleDeleteCard}
                  card = {card}
                />
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;

