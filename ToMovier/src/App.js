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
import emptyFilm from './images/emptyFilm.jpg'

import noPlat from './images/noPlat.png'
import netflix from './images/netflix.png'
import amazon from './images/amazon.png'

class App extends Component{

  state = {
    itemMenu: -1,
    user: "",
    password: "",
    cards: [
      {id:0, name: "EmptyFilm", genre: "cartoon", image: emptyFilm, isFavorite: favorite, isFilm: film, isWatched: watched, platform: netflix, rating: '9/10'},
      {id:1, name: "EmptyFilm", genre: "cartoon", image: emptyFilm, isFavorite: favorite, isFilm: film, isWatched: watched, platform: netflix, rating: '9/10'},
      {id:2, name: "EmptyFilm", genre: "cartoon", image: emptyFilm, isFavorite: favorite, isFilm: film, isWatched: watched, platform: netflix, rating: '9/10'},
      {id:3, name: "EmptyFilm", genre: "cartoon", image: emptyFilm, isFavorite: favorite, isFilm: film, isWatched: watched, platform: netflix, rating: '9/10'}      
    ],
    platforms: [
      {id: 0, name: "Netflix", image: netflix , state: false},
      {id: 1, name: "Amazon", image: amazon, state: false},
      {id: 2, name: "Unknown", image: noPlat, state: false}
    ],
    genres: [
      {id: 0, state: false, name: "Action"},
      {id: 1, state: false, name: "Thriller"},
      {id: 2, state: false, name: "Anime"},
      {id: 3, state: false, name: "Animation"},
      {id: 4, state: false, name: "Horror"},
      {id: 5, state: false, name: "Other"}
    ]
  }

  getPlatform(platformName){

    let platforms = this.state.platforms;
    for(let i = 0; i < platforms.length; i++){
      if(platforms[i].name == platformName)
        return platforms[i].image;
      if(i == platforms.length - 1)
        return noPlat;
    }
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
                  let id = items[i].id;
                  let name = items[i].name;
                  let image = items[i].urlImage;
                  let isFavorite = (items[i].favorite == "true")?favorite:notfavorite;
                  let isFilm = (items[i].isFilm == "true")?film:series;
                  let isWatched;
                  switch (items[i].watched){
                    case "watched": isWatched = watched; break;
                    case "watching": isWatched = watching; break;
                    case "towatch" : isWatched = towatch; break
                  } 
                  let platform = this.getPlatform(items[i].platform);
                  let rating;
                  if(items[i].rating == "non visto")
                    rating = "non visto";
                  else
                    rating = items[i].rating + "/10";
                  let genre = items[i].genre;
                  cards.push(
                    {
                      id: id, 
                      name: name, 
                      genre: genre,
                      image: image, 
                      isFavorite: isFavorite, 
                      isFilm: isFilm, 
                      isWatched: isWatched, 
                      platform: platform,
                      rating: rating
                    }
                  );
                }
                this.setState({cards});
                console.log(cards);
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
    let cards = [];
    this.setState({user: "", password: "", cards});
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

  handleOpenCard = card => {
    console.log("open button pressed [" + card.name + "]");
    this.setState({itemMenu: this.state.cards.indexOf(card)});
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('blocker').style.display = 'block';

  }

  handleAddCard(){
    console.log("add card pressed");
    this.setState({itemMenu: -2});
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    document.getElementById('blocker').style.display = 'block';
  }

  handleDeleteCard = card => {
    console.log("delete button pressed [" + card.name + "]");
    //html request
    let json_msg = {};
    json_msg.user = this.state.user;
    json_msg.passw = this.state.password;
    json_msg.id = card.id;
    //console.log(json_msg);
    let url = "http://localhost:80/backend/removeItem.php";
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
              let cards = [...this.state.cards];
              cards.splice(cards.indexOf(card),1);
              this.setState({cards});
            } else {
              alert(html.msg);
            }
        }
    );
  }

  handleItemCancel = () => {
    this.setState({itemMenu: -1});
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
    document.getElementById('blocker').style.display = 'none';
  }

  handleItemSave = state =>{

    let card = state.card;
    let item_db = {};
    let isNewItem = false;

    if(!card.hasOwnProperty("id")){
      isNewItem = true;
      card.id = -3; //TODO: setted it with the id obtained from mysql
    }
    item_db.id = card.id;
    
    card.name = document.getElementById("item-title").value;
    item_db.name = document.getElementById("item-title").value;
    if(card.name == ""){
      alert("Il titolo non può essere vuoto");
      return;
    }
    
    card.genre = document.getElementById("item-genre").value;
    if(card.genre == "")
      card.genre = "Other";
    item_db.genre = card.genre;

    card.image = document.getElementById("item-url").value;
    if(card.image == "")
      card.image = emptyFilm;
    item_db.urlImage = card.image;
    
    card.rating = String(state.rating) + "/10";
    item_db.rating = String(state.rating);
    
    switch(state.favorite){
      case true: card.isFavorite = favorite; item_db.favorite = "true"; break;
      case false: card.isFavorite = notfavorite; item_db.favorite = "false"; break;
      default: card.isFavorite = notfavorite; item_db.favorite = "false"; 
    }

    switch(state.watch){
      case "watched": card.isWatched = watched; item_db.watched = "watched"; break;
      case "watching": card.isWatched = watching; item_db.watched = "watching"; break;
      case "towatch": card.isWatched = towatch; item_db.watched = "towatch"; break;
      default: card.isWatched = towatch; item_db.watched = "towatch"; break;
    }

    switch(state.type){
      case "series": card.isFilm = series; item_db.isFilm = "false"; break;
      case "film": card.isFilm = film; item_db.isFilm = "true"; break;
      default: card.isFilm = film; item_db.isFilm = "true"; break;
    }

    for(let i = 0; i < state.platforms.length; i++){
      if(state.platforms[i].state){
        card.platform = state.platforms[i].image;
        item_db.platform = state.platforms[i].name;
        break;
      }
      if(i == state.platforms.length - 1){
        card.platform = noPlat;
        item_db.platform = "Unknow";
      }
    }
 
    let cards = [...this.state.cards];
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id == card.id){
        cards[i] = card;
        break;
      }
      if(i == cards.length - 1)
        cards.push(card);
    }
      
    //console.log(card);
    //this.setState({itemMenu: -1, cards});
    //document.getElementsByTagName('body')[0].style.overflow = 'auto';
    //document.getElementById('blocker').style.display = 'none';

    //html request
    let json_msg = item_db;
    json_msg.user = this.state.user;
    json_msg.passw = this.state.password;
    if(isNewItem)
      json_msg.type = "new";
    else
      json_msg.type = "update";
    //console.log(json_msg);
    let url = "http://localhost:80/backend/newUpdateItem.php";
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
              if(isNewItem)
                cards[cards.length-1].id = Number(html.id);
              //console.log(cards);
              this.setState({itemMenu: -1, cards});
              document.getElementsByTagName('body')[0].style.overflow = 'auto';
              document.getElementById('blocker').style.display = 'none'; 
            } else {
              alert(html.msg);
            }
        }
    );
  }

  handleApplyFilters = state => {

    let cards = [...this.state.cards];

    //apply sorting

    let radio = document.getElementsByName("ordering");
    let ordering;
    for(let i = 0; i < radio.length; i++){
      if(radio[i].checked){
        ordering = radio[i].value;
        break;
      }

    }
    console.log(ordering);
    cards.sort(
      function(a,b){ 

        if(ordering == "nameAZ"){
          if(a.name > b.name)
            return 1;
          else
            return -1;
        }
        else if(ordering == "nameZA"){
          if(a.name < b.name)
            return 1;
          else
            return -1;
        }
        else if(ordering == "rate100"){
          let num_a = Number(a.rating.replace("/10", ""));
          let num_b = Number(b.rating.replace("/10", ""));
          if(num_a < num_b)
            return 1;
          else
            return -1;  
        }
        else{
          let num_a = Number(a.rating.replace("/10", ""));
          let num_b = Number(b.rating.replace("/10", ""));
          if(num_a > num_b)
            return 1;
          else
            return -1;  
        }
      }
    );

    let filterState = state;
    this.setState(
      {cards},
      function(state = filterState) {
        //apply filters
        for(let i = 0; i < cards.length; i++){
          let card = cards[i];
          //favorite filters
          if(!(
            (!state.favorite  && !state.notfavorite) ||
            (
              (state.favorite && (card.isFavorite == favorite)) ||
              (state.notfavorite && (card.isFavorite == notfavorite))
            )
          )){
            document.getElementsByClassName("card-col")[i].style.display = "none";
            continue;
          }
          // wacthing filters
          if(!(
            (
              !state.watched && !state.watching && !state.towatch
            ) ||
            (
              (state.watched && (card.isWatched == watched)) ||
              (state.watching && (card.isWatched == watching)) ||
              (state.towatch && (card.isWatched == towatch))
            )
          )){
            document.getElementsByClassName("card-col")[i].style.display = "none";
            continue;
          }
          //isfilm filters
          if(!(
            (!state.series  && !state.film) ||
            (
              (state.series && (card.isFilm == series)) ||
              (state.film && (card.isFilm == film))
            )
          )){
            document.getElementsByClassName("card-col")[i].style.display = "none";
            continue;
          }
          //Platforms filter
          let platforms = state.platforms;
          let accepted = false;
          let counter = 0;
          for(let j = 0; j < platforms.length; j++){
            if(platforms[j].state)
              counter++;
            if(platforms[j].state && platforms[j].image == card.platform){
              accepted = true;
              break;
            }
          }
          if(!accepted && counter > 0){
            document.getElementsByClassName("card-col")[i].style.display = "none";
            continue;
          }
          //genre filter
          let genres = state.genres;
          accepted = false;
          counter = 0;
          for(let j = 0; j < genres.length; j++){
            if(genres[j].state)
              counter++;
            if(genres[j].state && genres[j].name == card.genre){
              accepted = true;
              break;
            }
          }
          if(!accepted && counter > 0){
            document.getElementsByClassName("card-col")[i].style.display = "none";
            continue;
          }

          document.getElementsByClassName("card-col")[i].style.display = "flex";

        }
        document.getElementById('filter-section').style.display = 'none';
      
      }
    );

  }

  render(){
    let page;
    let itemMenu;
    if(this.state.user == ""){
      page = <Login onLogin = {this.handleLogin} onSignup = {this.handleSignup} />
      document.getElementsByTagName('body')[0].style.backgroundColor = "#2a5a76";
    }
    else{
      document.getElementsByTagName('body')[0].style.backgroundColor = "white";
      if(this.state.itemMenu >= 0){
          itemMenu = <ItemMenu 
                      onCancel = {this.handleItemCancel} 
                      onSave = {this.handleItemSave} 
                      card = {this.state.cards[this.state.itemMenu]} 
                      platforms = {this.state.platforms} 
                      genres = {this.state.genres}
                    />
      }else if(this.state.itemMenu == -2){
        itemMenu = <ItemMenu
                      onCancel = {this.handleItemCancel} 
                      onSave = {this.handleItemSave} 
                      card = {{}} 
                      platforms = {this.state.platforms} 
                      genres = {this.state.genres}
                    />
      }
      else
        itemMenu = <></>
      page = <>
                <div id="blocker" style={{width: '100%', height: '100%', backgroundColor: 'black', opacity: '0.4', position: 'fixed', top: '0', zIndex: '3', display: "none"}}></div>
                <Navbar 
                  user = {this.state.user}
                  onExit = {this.handleExit}
                  onSearch = {this.handleSearch}
                  onFilter = {this.handlefilter}
                />
                <Filter 
                  platforms = {this.state.platforms} 
                  genres = {this.state.genres}
                  onApplyFilters = {this.handleApplyFilters}
                />
                <img id="add-item" src={add} onClick={() => this.handleAddCard()} style={{position: "fixed", right: '1rem', width: '4rem', top: '15rem', cursor: 'pointer', zIndex: '2'}}/>
                {itemMenu}
                <div className='cards-container'>
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

