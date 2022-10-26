import React, {Component} from 'react';
import './App.css'

import Navbar from './components/js/Navbar';
import Card from './components/js/Card';
import Login from './components/js/Login';
import Filter from './components/js/Filter';
import ItemMenu from './components/js/ItemMenu';

import favorite from './images/favorite.png'
import film from './images/film.png'
import netflix from './images/netflix.png'
import watched from './images/watched.png'
import add from './images/add.png'

let coraline = 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg';


class App extends Component{

  state = {
    user: "",
    cards: [
      {id:0, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:1, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:2, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:3, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:4, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:5, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:6, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:7, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:8, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:9, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      {id:10, name: "Coraline", image: coraline, isFavorited: favorite, isFilm: film, isWatched: watched, platform: netflix, rate: '9/10'},
      
    ]
  }

  handleLogin = (user, password) =>{
    console.log("login (" + user + ", " + password + ")");

    let ajax = new XMLHttpRequest();
    let result;
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            result=this.responseText;
            
            if(result==0){   
                this.setState({user});
                downloadDati();
            }
            else
                alert(result);
        }
    };
    ajax.open("POST", "./php/login.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("tipo="+"login"+"&user="+user+"&passw="+password);
  }

  handleSignup = (user, password) =>{
    console.log("login (" + user + ", " + password + ")");
    
    let ajax = new XMLHttpRequest();
    let result;
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            result=this.responseText;
           
            if(result==0){
                alert("sugnup success");
                this.setState({user});
            }
            else
                alert(result);
        }
    };
    ajax.open("POST", "./php/login.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("tipo="+"signup"+"&user="+user+"&passw="+password);
  }

  handleExit = () =>{
    console.log("exit button pressed");
    this.setState({user: ""});
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

