import React, {Component} from 'react';
import '../style/Filter.css'

import watched from '../../images/watched.png'
import watching from '../../images/watching.png'
import towatch from '../../images/towatch.png'
import fullstar from '../../images/fullstar.png'
import emptystar from '../../images/emptystar.png'
import favorited from '../../images/favorited.png'
import notfavorited from '../../images/notfavorited.png'
import film from '../../images/film.png'
import series from '../../images/series.png'
import netflix from '../../images/netflix.png'


import '../style/Navbar.css'

class Login extends Component{

  login(){
    
    ;
  }
  render(){
    return(
        <div id="filter-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                    <img style={{width: '1.5rem', margin: '0 2rem 0 0.5rem'}} src={notfavorited}/>
                </div>
                <div style={{marginTop: '2rem'}}>
                    <label className="filter-label">Visto:</label>
                    <img style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={watched}/>
                    <img style={{width: '1.5rem', margin: '0'}} src={watching}/>
                    <img style={{width: '1.5rem', margin: '0 2rem 0 0.5rem'}} src={towatch}/>
                </div>
                <div style={{marginTop: '2rem'}}>
                    <label className="filter-label">Serie/Film:</label>
                    <img style={{width: '1.5rem', margin: '0 0.5rem 0 0.5rem'}} src={series}/>
                    <img style={{width: '1.5rem', margin: '0 2rem 0 0'}} src={film}/>
                </div>
            </div>
            <label style={{marginTop: '2rem'}}>Platforms:</label>
            <div>
                <img style={{width: '1.5rem', margin: '0 0.5rem'}} src={netflix}/>
                <img style={{width: '1.5rem', margin: '0 0.5rem'}} src={netflix}/>
                <img style={{width: '1.5rem', margin: '0 0.5rem'}} src={netflix}/>
                <img style={{width: '1.5rem', margin: '0 0.5rem'}} src={netflix}/>
                <img style={{width: '1.5rem', margin: '0 0.5rem'}} src={netflix}/>
            </div>
            <div style={{marginTop: '2rem', marginBottom: '2rem', width: '30%', display: 'flex', justifyContent: 'space-between'}}>
                <button className="filter-button">FILTRA</button>
                <button className="filter-button">ANNULLA FILTRI</button>
            </div>
            
        </div>
    );
  }
}

export default Login;