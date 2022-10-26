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
import netflix from '../../images/netflix.png'

let coraline = 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg'

class ItemMenu extends Component{

    state = {
        title: "",
        genre: "",
        rate: 0,
        fovorite: false,
        watch: "towatch",
        type: "series",
        url: "none",
        platforms: [
            {id: 0, name: "item-plat-netflix0", image: netflix, state: false},
            {id: 1, name: "item-plat-netflix1", image: netflix, state: false},
            {id: 2, name: "item-plat-netflix2", image: netflix, state: false},
            {id: 3, name: "item-plat-netflix3", image: netflix, state: false},
            {id: 4, name: "item-plat-netflix4", image: netflix, state: false},
            {id: 5, name: "item-plat-netflix5", image: netflix, state: false},
            {id: 6, name: "item-plat-netflix6", image: netflix, state: false},
            {id: 7, name: "item-plat-netflix7", image: netflix, state: false},
            {id: 8, name: "item-plat-netflix8", image: netflix, state: false}
        ]
    }

    onCancel(){
        document.getElementById('item-section').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('blocker').style.display = 'none';
    }

    onSave(){
        document.getElementById('item-section').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('blocker').style.display = 'none';
    }
    
    onStar(key){
        let rate = key + 1;
        this.setState({rate});
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
        console.log("select plat")
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
        if(state)
            for(let i = 0; i < platforms.length; i++)
                if(platforms[i].name != plat.name && platforms[i].state){
                    platforms[i].state = false;
                    document.getElementById(platforms[i].name).style.opacity = 0.5;
                }        
        this.setState({platforms});     
        
                
    }
    

    render(){
        return(
            <div id="item-section">
                <div style={{backgroundColor: '#6b8ea2', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', borderRadius: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <label className="item-label" style={{fontWeight: 'bold'}}>Aggiorna elemento</label>
                        <img src={cross} style={{width: '1.5rem', cursor: 'pointer'}} onClick={()=>this.onCancel()}/>
                    </div>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '1.5rem'}}>
                        <img src={coraline} style={{height: '15rem', marginRight: '2rem', borderRadius: '0.5rem'}}/>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label" style={{marginRight: '1rem'}}>Titolo</label>
                                <input id="item-title" className='item-text' type="text" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label" style={{marginRight: '0.4rem'}}>Genere</label>
                                <input id="item-genre" className='item-text' type="text" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
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
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label"  style={{marginRight: '0.5rem'}}>Preferito</label>
                                <img id="item-favorite" onClick={() => this.onFavorite()} src={notfavorite} style={{width: '1.5rem'}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label"  style={{marginRight: '0.5rem'}}>Visto</label>
                                <img id="item-watched"  onClick={() => this.onWatch('watched')} src={watched} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                                <img id="item-watching" onClick={() => this.onWatch('watching')} src={watching} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                                <img id="item-towatch"  onClick={() => this.onWatch('towatch')} src={towatch} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label" style={{marginRight: '0.5rem'}}>Tipo</label>
                                <img id="item-series" onClick={() => this.onType('series')} src={series} style={{width: '1.5rem', marginRight: '0.5rem'}}/>
                                <img id="item-film"   onClick={() => this.onType('film')} src={film} style={{width: '1.7rem', marginRight: '0.5rem'}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem'}}>
                        <label className="item-label">URL image</label>
                        <input className='item-text' type="text" style={{marginBottom: '1.5rem'}}/>
                        <label className="item-label">Piattaforma</label>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#bdcbdd', borderRadius: '0.5rem', padding: '0.5rem', width: '90%', overflow: 'auto'}}>
                            {
                                this.state.platforms.map(plat => (
                                    <img 
                                        key = {plat.id}
                                        id = {plat.name}
                                        className="item-platform" 
                                        style={{width: '1.5rem', margin: '0 0.5rem', opacity: '0.5', cursor: 'pointer'}} 
                                        src={plat.image}
                                        onClick = {()=> this.onPlatform(plat)}
                                    />

                                ))
                            }
                        </div>
                    </div>
                    <button style={{borderRadius: '0.5rem'}} onClick={()=>this.onSave()}>SALVA</button>
                </div>
            </div>
        );
    }
}

export default ItemMenu;