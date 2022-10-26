import React, {Component} from 'react';
import './App.css'

import Navbar from './components/js/Navbar';
import Card from './components/js/Card';
import Login from './components/js/Login';
import Filter from './components/js/Filter';
import ItemMenu from './components/js/ItemMenu';

import favorite from './images/favorite.png'
import notfavorite from './images/notfavorite.png'
import film from './images/film.png'
import series from './images/series.png'
import watched from './images/watched.png'
import watching from './images/watching.png'
import towatch from './images/towatch.png'
import add from './images/add.png'

import noPlat from './images/noPlat.png'
import netflix from './images/netflix.png'
import amazon from './images/amazon.png'

let coraline = 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg';

let PLATFORMS = {
  "netflix": netflix,
  "amazon": amazon
};

function getPlatform(platform){

    if (platform in PLATFORMS){
      return PLATFORMS[platform];
    }
    else 
      return noPlat
}

class App extends Component{

  state = {
    user: "",
    password: "",
    cards: [
      {id:0, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:1, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:2, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:3, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:4, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:5, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:6, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:7, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:8, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:9, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:10, name: "Coraline", genre: "cartoon", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      
    ]
  }

  getItems(user, password){
    let json_msg = {"user": user, "passw": password, "type": "get-items"};
    let url = "http://localhost:80/backend/getItems.php";
    let msg = "body=" + JSON.stringify(json_msg);
    fetch(url, {
        method : "POST",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body : msg
    }).then(
        response => response.json()
    ).then(
        html => {
            if (html.status == "SUCCESS") {
                let items = html.msg;
                let cards = [];
                for(let i = 0; i < items.length; i++){
                  let name = items[i].name;
                  let image = items[i].urlImage;
                  let isFavorited = (items[i].favorite == "true")?favorite:notfavorite;
                  let isFilm = (items[i].isFilm == "true")?film:series;
                  let isWatched;
                  switch (items[i].watched){
                    case "watched": isWatched = watched; break;
                    case "watching": isWatched = watching; break;
                    case "towatch" : isWatched = towatch; break
                  } 
                  let platform = getPlatform(items[i].platform);
                  let rate;
                  if(items[i].rating == "non visto")
                    rate = "non visto";
                  else
                    rate = items[i].rating + "/10";
                  let genre = items[i].genre;
                  cards.push(
                    {
                      id: i, 
                      name: name, 
                      genre: genre,
                      image: image, 
                      isFavorited: isFavorited, 
                      isFilm: isFilm, 
                      isWatched: isWatched, 
                      platform: platform,
                      rate: rate
                    }
                  );
                }
                this.setState({cards});
            } else {
              alert(html.msg);
            }
        }
    );

  }

  handleLogin = (user, password) =>{
    //console.log("login (" + user + ", " + password + ")");
    let json_msg = {"user": user, "passw": password, "type": "login"};
    let url = "http://localhost:80/backend/login.php";
    let msg = "body=" + JSON.stringify(json_msg);
    fetch(url, {
        method : "POST",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body : msg
    }).then(
        response => response.json()
    ).then(
        html => {
            if (html.status == "SUCCESS") {
                let password =  html.passw;
                this.setState({user, password});
                this.getItems(user, password);
            } else {
              alert(html.msg);
            }
        }
    );

  }

  handleSignup = (user, password) =>{
    //console.log("login (" + user + ", " + password + ")");
    let json_msg = {"user": user, "passw": password, "type": "signup"};
    let url = "http://localhost:80/backend/login.php";
    let msg = "body=" + JSON.stringify(json_msg);
    fetch(url, {
      method : "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body : msg
    }).then(
      response => response.json()
    ).then(
        html => {
            if (html.status == "SUCCESS") {
              alert("signup success");
            }
            else {
              alert(html.msg);
            }      
        }
    );
  }

  handleExit = () =>{
    console.log("exit button pressed");
    this.setState({user: "", password: ""});
    //TODO: clean the session
  }

  handlefilter(){
    console.log("filter button pressed");
    let filter = document.getElementById('filter-section');
    if(filter.style.display == 'none')
      filter.style.display = 'flex'
    else
      filter.style.display = 'none';
  }

  handleSearch = inputText => {
    console.log("search text pressed [" + inputText + "]")
  }

  handleOpenCard = cardName => {
    console.log("open button pressed [" + cardName + "]");
    document.getElementById('item-section').style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('blocker').style.display = 'block';
  }

  handleAddCard(){
    console.log("add card pressed");
    document.getElementById('item-section').style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('blocker').style.display = 'block';
  }

  handleDeleteCard = cardName => {
    console.log("delete button pressed [" + cardName + "]");
  }

  render(){
    let page;
    if(this.state.user == ""){
      page = <Login onLogin = {this.handleLogin} onSignup = {this.handleSignup} />
      document.getElementsByTagName('body')[0].style.backgroundColor = "#2a5a76";
    }
    else{
      document.getElementsByTagName('body')[0].style.backgroundColor = "white";
      page = <>
                <div id="blocker" style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: '0.4', position: 'fixed', top: '0', zIndex: '3', display: "none"}}></div>
                <Navbar 
                  user = {this.state.user}
                  onExit = {this.handleExit}
                  onSearch = {this.handleSearch}
                  onFilter = {this.handlefilter}
                />
                <Filter />
                <img id="add-item" src={add} onClick={() => this.handleAddCard()} style={{position: "fixed", right: '1rem', width: '4rem', top: '15rem', cursor: 'pointer', zIndex: '2'}}/>
                <ItemMenu />
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
    }
    return (
      <div id="main-page">
        {page}
      </div>
    );
  }
}

export default App;

