import React, {Component} from 'react';
import '../style/ItemMenu.css'

import cross from '../../images/delete.png'
import watched from '../../images/watched.png'
import watching from '../../images/watching.png'
import towatch from '../../images/towatch.png'
import fullstar from '../../images/fullstar.png'
import emptystar from '../../images/emptystar.png'
import favorite from '../../images/favorite.png'
import notfavorite from '../../images/notfavorite.png'
import film from '../../images/film.png'
import series from '../../images/series.png'
import emptyFilm from '../../images/emptyFilm.jpg'

class ItemMenu extends Component{

    state = {
        card: this.props.card,
        title: "",
        genre: "",
        rating: 0,
        fovorite: false,
        watch: "towatch",
        type: "series",
        url: "none",
        platforms: [...this.props.platforms],
        genres: [...this.props.genres]
    }

    componentDidMount(){

        let platforms = this.state.platforms;
        let item = this.state.card;
        if(!item.hasOwnProperty("name"))
            return;
        let title_ = item.name;
        let genre_ = item.genre;
        let rate_ = Number(item.rating.replace("/10",""));
        let favorite_;
        let watch_;
        let type_;
        let url_ = item.image;

        document.getElementById("item-title").value = title_;
        document.getElementById("item-genre").value = genre_;
        for(let i = 0; i < 10; i++){
            if(i + 1 <= rate_)
                document.getElementsByClassName('item-star')[i].src = fullstar;
            else
                document.getElementsByClassName('item-star')[i].src = emptystar; 
        }
        document.getElementById('item-favorite').src = item.isFavorite;
        document.getElementById("item-image").src = url_;
        document.getElementById("item-url").value = url_;

        if (item.isFavorite == favorite)
            favorite_ = true;
        else
            favorite_ = false;
        if(item.isWatched == watched){
            watch_ = "watched";
            document.getElementById('item-watched').style.opacity = 1;
            document.getElementById('item-watching').style.opacity = 0.5;
            document.getElementById('item-towatch').style.opacity = 0.5;
        }
        else if(item.isWatched == watching){
            watch_ = "watching";
            document.getElementById('item-watched').style.opacity = 0.5;
            document.getElementById('item-watching').style.opacity = 1;
            document.getElementById('item-towatch').style.opacity = 0.5;
        }
        else{
            watch_ = "towatch";
            document.getElementById('item-watched').style.opacity = 0.5;
            document.getElementById('item-watching').style.opacity = 0.5;
            document.getElementById('item-towatch').style.opacity = 1;
        }

        if(item.isFilm == film){
            type_ = "film";
            document.getElementById('item-series').style.opacity = 0.5;
            document.getElementById('item-film').style.opacity = 1;
        }
        else{
            type_ = "series";
            document.getElementById('item-series').style.opacity = 1;
            document.getElementById('item-film').style.opacity = 0.5;
        }

        for(let i = 0; i < platforms.length; i++){
            if(platforms[i].image == item.platform){
                platforms[i].state = true;
                document.getElementById("item-plat-" + platforms[i].name).style.opacity = 1;
            }
            else{
                platforms[i].state = false;
                document.getElementById("item-plat-" + platforms[i].name).style.opacity = 0.5;
            }
        }

        this.setState({ 
            title: title_, 
            genre: genre_, 
            rating: rate_, 
            favorite: favorite_,
            watch: watch_, 
            type: type_, 
            url: url_, 
            platforms
        });

    }
    
    onStar(key){
        let rating = key + 1;
        this.setState({rating});
        for(let i = 0; i < 10; i++){
            if(i <= key)
                document.getElementsByClassName('item-star')[i].src = fullstar;
            else
                document.getElementsByClassName('item-star')[i].src = emptystar;
        }
    }

    onFavorite(){
        let state = this.state.favorite;
        if(!state)
            document.getElementById('item-favorite').src = favorite;
        else
            document.getElementById('item-favorite').src = notfavorite;

        state = !state;
        this.setState({favorite: state});
    }

    onWatch(key){
        this.setState({watch: key});
        if(key == "watched"){
            document.getElementById('item-watched').style.opacity = 1;
            document.getElementById('item-watching').style.opacity = 0.5;
            document.getElementById('item-towatch').style.opacity = 0.5;
        }
        else if(key == "watching"){
            document.getElementById('item-watched').style.opacity = 0.5;
            document.getElementById('item-watching').style.opacity = 1;
            document.getElementById('item-towatch').style.opacity = 0.5;
        }
        else{
            document.getElementById('item-watched').style.opacity = 0.5;
            document.getElementById('item-watching').style.opacity = 0.5;
            document.getElementById('item-towatch').style.opacity = 1;
        }
    }

    onType(key){
        this.setState({type: key});
        if(key == "series"){
            document.getElementById('item-series').style.opacity = 1;
            document.getElementById('item-film').style.opacity = 0.5;
        }
        else{
            document.getElementById('item-series').style.opacity = 0.5;
            document.getElementById('item-film').style.opacity = 1;
        }
    }

    onPlatform(plat){
        //console.log(plat);
        const platforms = [...this.state.platforms];
        const id = platforms.indexOf(plat);     
        platforms[id] = {...plat};  
        let state = plat.state;
        if(!state)
            document.getElementById("item-plat-" + plat.name).style.opacity = 1;
        else
            document.getElementById("item-plat-" + plat.name).style.opacity = 0.5;
    
        state = !state;       
        platforms[id].state = state;       
        if(state)
            for(let i = 0; i < platforms.length; i++)
                if( (platforms[i].name != plat.name) && platforms[i].state){
                    platforms[i].state = false;
                    document.getElementById("item-plat-" + platforms[i].name).style.opacity = 0.5;
                }        
        this.setState({platforms});     
        //console.log(platforms);      
    }
    

    render(){
        return(
            <div id="item-section">
                <div id="item-container1">
                    <div id="item-container2">
                        <label className="item-label" style={{fontWeight: 'bold'}}>Salva elemento</label>
                        <img src={cross} style={{width: '1.5rem', cursor: 'pointer'}} onClick={()=>this.props.onCancel()}/>
                    </div>
                    <div id="item-container3">
                        <img id="item-image" src={emptyFilm}/>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label" style={{marginRight: '1rem'}}>Titolo</label>
                                <input id="item-title" className='item-text' type="text" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label" style={{marginRight: '0.4rem'}}>Genere</label>
                                <select id="item-genre" className='item-text'>
                                    {
                                        this.state.genres.map(genre => (
                                            <option 
                                                key = {genre.id}
                                                value = {genre.name} 
                                            >
                                            {genre.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div id="item-rating-container">
                                <label className="item-label">Voto</label>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(0)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(1)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(2)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(3)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(4)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(5)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(6)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(7)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(8)}/>
                                    <img className="item-star" src={emptystar} style={{width: '1.5rem'}} onClick={() => this.onStar(9)}/>
                                </div>
                            </div>
                            <div id="item-favorite-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label"  style={{marginRight: '0.5rem'}}>Preferito</label>
                                <img id="item-favorite" onClick={() => this.onFavorite()} src={notfavorite} style={{width: '1.5rem'}}/>
                            </div>
                            <div id="item-watched-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label"  style={{marginRight: '0.5rem'}}>Visto</label>
                                <img id="item-watched"  onClick={() => this.onWatch('watched')} src={watched} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                                <img id="item-watching" onClick={() => this.onWatch('watching')} src={watching} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                                <img id="item-towatch"  onClick={() => this.onWatch('towatch')} src={towatch} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                            </div>
                            <div id="item-isfilm-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label" style={{marginRight: '0.5rem'}}>Tipo</label>
                                <img id="item-series" onClick={() => this.onType('series')} src={series} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                                <img id="item-film"   onClick={() => this.onType('film')} src={film} style={{width: '1.7rem', marginRight: '0.5rem'}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem'}}>
                        <label className="item-label">URL image</label>
                        <input id="item-url" className='item-text' type="text" style={{marginBottom: '1.5rem'}}/>
                        <label className="item-label">Piattaforma</label>
                        <div id="item-platforms-container">
                            {
                                this.state.platforms.map(plat => (
                                    <img 
                                        key = {plat.id}
                                        id = {"item-plat-" + plat.name}
                                        className="item-platform" 
                                        style={{height: '2.8rem', margin: '0 0.5rem', opacity: '0.5', cursor: 'pointer'}} 
                                        src={plat.image}
                                        onClick = {()=> this.onPlatform(plat)}
                                    />

                                ))
                            }
                        </div>
                    </div>
                    <button style={{borderRadius: '0.5rem'}} onClick={()=>this.props.onSave(this.state)}>SALVA</button>
                </div>
            </div>
        );
    }
}

export default ItemMenu;