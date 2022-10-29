import React, {Component} from 'react';
import '../style/Filter.css'

import watched from '../../images/watched.png'
import watching from '../../images/watching.png'
import towatch from '../../images/towatch.png'
import favorite from '../../images/favorite.png'
import notfavorite from '../../images/notfavorite.png'
import film from '../../images/film.png'
import series from '../../images/series.png'


import '../style/Navbar.css'

class Filter extends Component{

  state = {
    favorite: false,
    notfavorite: false,
    watched: false,
    watching: false,
    towatch: false,
    series: false,
    film: false,
    platforms: [...this.props.platforms],
    genres: [...this.props.genres]
  }

  onFavoriteClick(id){
    let state = "";
    if(id == "filter-favorite")
        state = this.state.favorite;
    else
        state = this.state.notfavorite;
    if(!state)
        document.getElementById(id).style.opacity = 1;
    else
        document.getElementById(id).style.opacity = 0.5;

    state = !state;

    if(id == "filter-favorite")
       this.setState({favorite: state});
    else
        this.setState({notfavorite: state});

    //console.log({"favorite": this.state.favorite, "notfavorite": this.state.notfavorite} );
  }

  onWatchClick(id){
    let state = "";
    if(id == "filter-watched")
        state = this.state.watched;
    else if(id == "filter-watching")
        state = this.state.watching;
    else
        state = this.state.towatch;

    if(!state)
        document.getElementById(id).style.opacity = 1;
    else
        document.getElementById(id).style.opacity = 0.5;

    state = !state;

    if(id == "filter-watched")
        this.setState({watched: state});
    else if(id == "filter-watching")
         this.setState({watching: state});
    else
        this.setState({towatch: state});
  }

  onFilmClick(id){
    let state = "";
    if(id == "filter-series")
        state = this.state.series;
    else
        state = this.state.film;

    if(!state)
        document.getElementById(id).style.opacity = 1;
    else
    document.getElementById(id).style.opacity = 0.5;

    state = !state;

    if(id == "filter-series")
        this.setState({series: state});
    else
         this.setState({film: state});
  }

  onPlatform(plat){

    const platforms = [...this.state.platforms];
    const id = platforms.indexOf(plat);     
    platforms[id] = {...plat};  
    let state = plat.state;
    if(!state)
        document.getElementById(plat.name).style.opacity = 1;
    else
        document.getElementById(plat.name).style.opacity = 0.5;

    state = !state;       
    platforms[id].state = state;               
    this.setState({platforms});             
  }

  onRemoveFilters() {
    let radio = document.getElementsByName('ordering');
    for(let i = 0; i < radio.length; i++)
        radio[i].checked = false;
        
    this.setState({favorite: false, notfavorite: false, watched: false, watching: false, towatch: false, series: false, film: false});
    document.getElementById('filter-favorite').style.opacity = 0.5;
    document.getElementById('filter-notfavorite').style.opacity = 0.5;
    document.getElementById('filter-watched').style.opacity = 0.5;
    document.getElementById('filter-watching').style.opacity = 0.5;
    document.getElementById('filter-towatch').style.opacity = 0.5;
    document.getElementById('filter-series').style.opacity = 0.5;
    document.getElementById('filter-film').style.opacity = 0.5;
    const platforms = [...this.state.platforms];
    for(let i = 0; i < platforms.length; i++){
        platforms[i].state = false;
        document.getElementById(platforms[i].name).style.opacity = 0.5;
    }
    this.setState(platforms);
    document.getElementById('filter-section').style.display = 'none';

    let cards = document.getElementsByClassName("card-col");
    for(let i = 0; i < cards.length; i++)
      cards[i].style.display = "flex";
  }

  onGenreClick(index){

    let genres = document.getElementsByClassName("filter-genre");
    let genres_state = [...this.state.genres];
    if(genres[index].style.opacity == 1){
        genres[index].style.opacity = 0.5;
        genres_state[index].state = false;
    }
    else{
        genres[index].style.opacity = 1;
        genres_state[index].state = true;
    }
    this.setState({genres: genres_state});
  }

  render(){
    return(
        <div id="filter-section" style={{display: 'none'}}>
            <label className="filter-title">ORDINA PER</label>
            <div id="filter-container1">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label" >Nome A-Z</label>
                    <input className="filter-radio" type="radio" name="ordering" value="nameAZ"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Nome Z-A</label>
                    <input className="filter-radio" type="radio" name="ordering" value="nameZA"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Voto 10-0</label>
                    <input className="filter-radio" type="radio" name="ordering" value="rate100"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Voto 0-10</label>
                    <input className="filter-radio" type="radio" name="ordering" value="rate010"/>
                </div>
            </div>
            <label className="filter-label">Generi:</label>
            <div id="filter-container2">
                {
                    this.state.genres.map(genre => (
                        <label 
                            key = {genre.id}
                            className="filter-genre"
                            value = {genre.name}
                            onClick = {() => this.onGenreClick(genre.id)}
                        >
                        {genre.name}
                        </label>
                    ))
                }
            </div>
            <div id="filter-container3">
                <div>
                    <label className="filter-label">Preferito:</label>
                    <img id="filter-notfavorite" onClick={() => this.onFavoriteClick("filter-notfavorite")} style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={notfavorite}/>
                    <img id="filter-favorite" onClick={() => this.onFavoriteClick("filter-favorite")} style={{width: '1.7rem', margin: '0 2rem 0 0'}} src={favorite}/>
                </div>
                <div>
                    <label className="filter-label">Visto:</label>
                    <img id="filter-watched"  onClick={() => this.onWatchClick("filter-watched")} style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={watched}/>
                    <img id="filter-watching" onClick={() => this.onWatchClick("filter-watching")} style={{width: '1.7rem', margin: '0'}} src={watching}/>
                    <img id="filter-towatch"  onClick={() => this.onWatchClick("filter-towatch")} style={{width: '1.7rem', margin: '0 2rem 0 0.5rem'}} src={towatch}/>
                </div>
                <div>
                    <label className="filter-label">Serie/Film:</label>
                    <img id="filter-series" onClick={() => this.onFilmClick("filter-series")} style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={series}/>
                    <img id="filter-film"   onClick={() => this.onFilmClick("filter-film")} style={{width: '1.7rem', margin: '0 2rem 0 0'}} src={film}/>
                </div>
            </div>
            <label className="filter-label">Piattaforme:</label>
            <div id="filter-container4">
                {
                    this.state.platforms.map(plat => (
                        <img 
                            key = {plat.id}
                            id = {plat.name}
                            className="filter-platform" 
                            src={plat.image}
                            onClick = {()=> this.onPlatform(plat)}
                        />

                    ))
                }
            </div>
            <div id="filter-container5">
                <button className="filter-button" onClick={() => this.props.onApplyFilters(this.state)}>FILTRA</button>
                <button className="filter-button" onClick={() => this.onRemoveFilters()}>ANNULLA FILTRI</button>
            </div>
            
        </div>
    );
  }
}

export default Filter;