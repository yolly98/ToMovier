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

class Card extends Component{

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

    render(){
        return(
            <div id="item-section">
                <div style={{backgroundColor: '#6b8ea2', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', borderRadius: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <label className="item-label">Aggiorna elemento</label>
                        <img src={cross} style={{width: '1.5rem', cursor: 'pointer'}} onClick={()=>this.onCancel()}/>
                    </div>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                        <img src={coraline} style={{height: '15rem', marginRight: '2rem'}}/>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label">Titolo</label>
                                <input className='item-text' type="text" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label">Genere</label>
                                <input className='item-text' type="text" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem'}}>
                                <label className="item-label">Voto</label>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                    <img src={emptystar} style={{width: '1.5rem'}}/>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label">Preferito</label>
                                <img src={notfavorite} style={{width: '1.5rem'}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label">Visto</label>
                                <img src={watched} style={{width: '1.5rem'}}/>
                                <img src={watching} style={{width: '1.5rem'}}/>
                                <img src={towatch} style={{width: '1.5rem'}}/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1.5rem'}}>
                                <label className="item-label">Tipo</label>
                                <img src={series} style={{width: '1.5rem'}}/>
                                <img src={film} style={{width: '1.5rem'}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem'}}>
                        <label className="item-label">URL image</label>
                        <input className='item-text' type="text"/>
                        <label className="item-label">Piattaforma</label>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#bdcbdd', borderRadius: '0.5rem', padding: '0.5rem'}}>
                            <img src={netflix} style={{width: '1.5rem'}}/>
                            <img src={netflix} style={{width: '1.5rem'}}/>
                            <img src={netflix} style={{width: '1.5rem'}}/>
                            <img src={netflix} style={{width: '1.5rem'}}/>
                            <img src={netflix} style={{width: '1.5rem'}}/>
                            <img src={netflix} style={{width: '1.5rem'}}/>
                        </div>
                    </div>
                    <button style={{borderRadius: '0.5rem'}} onClick={()=>this.onSave()}>SALVA</button>
                </div>
            </div>
        );
    }
}

export default Card;