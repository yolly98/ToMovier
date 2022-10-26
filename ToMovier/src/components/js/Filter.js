import React, {Component} from 'react';
import '../style/Filter.css'

import watched from '../../images/watched.png'
import watching from '../../images/watching.png'
import towatch from '../../images/towatch.png'
import fullstar from '../../images/fullstar.png'
import emptystar from '../../images/emptystar.png'
import favorite from '../../images/favorite.png'
import notfavorite from '../../images/notfavorite.png'
import film from '../../images/film.png'
import series from '../../images/series.png'
import netflix from '../../images/netflix.png'


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
    platforms: [
        {id: 0, name: "plat-netflix0", image: netflix, state: false},
        {id: 1, name: "plat-netflix1", image: netflix, state: false},
        {id: 2, name: "plat-netflix2", image: netflix, state: false},
        {id: 3, name: "plat-netflix3", image: netflix, state: false},
        {id: 4, name: "plat-netflix4", image: netflix, state: false},
        {id: 5, name: "plat-netflix5", image: netflix, state: false},
        {id: 6, name: "plat-netflix6", image: netflix, state: false},
        {id: 7, name: "plat-netflix7", image: netflix, state: false},
        {id: 8, name: "plat-netflix8", image: netflix, state: false}
    ]
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

  onApplyFilters(){
    document.getElementById('filter-section').style.display = 'none';
  }
  
  onRemoveFilters(){
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
  }


  render(){
    return(
        <div id="filter-section" style={{display: 'none'}}>
            <label>ORDINA PER</label>
            <div style={{display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Nome A-Z</label>
                    <input className="filter-radio" type="radio" name="ordering" value="nameAZ"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Nome Z-A</label>
                    <input className="filter-radio" type="radio" name="ordering" value="nameZA"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Voto 10-0</label>
                    <input className="filter-radio" type="radio" name="ordering" value="voto100"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label className="filter-label">Voto 0-10</label>
                    <input className="filter-radio" type="radio" name="ordering" value="voto010"/>
                </div>
            </div>
            <label>GENERE</label>
            <input className="filter-text" type="text"/>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{marginTop: '2rem'}}>
                    <label className="filter-label">Preferito:</label>
                    <img id="filter-favorite" onClick={() => this.onFavoriteClick("filter-favorite")} style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={notfavorite}/>
                    <img id="filter-notfavorite" onClick={() => this.onFavoriteClick("filter-notfavorite")} style={{width: '1.7rem', margin: '0 2rem 0 0'}} src={favorite}/>
                </div>
                <div style={{marginTop: '2rem'}}>
                    <label className="filter-label">Visto:</label>
                    <img id="filter-watched"  onClick={() => this.onWatchClick("filter-watched")} style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={watched}/>
                    <img id="filter-watching" onClick={() => this.onWatchClick("filter-watching")} style={{width: '1.7rem', margin: '0'}} src={watching}/>
                    <img id="filter-towatch"  onClick={() => this.onWatchClick("filter-towatch")} style={{width: '1.7rem', margin: '0 2rem 0 0.5rem'}} src={towatch}/>
                </div>
                <div style={{marginTop: '2rem'}}>
                    <label className="filter-label">Serie/Film:</label>
                    <img id="filter-series" onClick={() => this.onFilmClick("filter-series")} style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={series}/>
                    <img id="filter-film"   onClick={() => this.onFilmClick("filter-film")} style={{width: '1.7rem', margin: '0 2rem 0 0'}} src={film}/>
                </div>
            </div>
            <label style={{marginTop: '2rem'}}>Platforms:</label>
            <div style={{overflow: "auto"}}>
                {
                    this.state.platforms.map(plat => (
                        <img 
                            key = {plat.id}
                            id = {plat.name}
                            className="filter-platform" 
                            style={{width: '1.5rem', margin: '0 0.5rem'}} 
                            src={plat.image}
                            onClick = {()=> this.onPlatform(plat)}
                        />

                    ))
                }
            </div>
            <div style={{marginTop: '2rem', marginBottom: '2rem', width: '30%', display: 'flex', justifyContent: 'space-between'}}>
                <button className="filter-button" onClick={() => this.onApplyFilters()}>FILTRA</button>
                <button className="filter-button" onClick={() => this.onRemoveFilters()}>ANNULLA FILTRI</button>
            </div>
            
        </div>
    );
  }
}

export default Filter;