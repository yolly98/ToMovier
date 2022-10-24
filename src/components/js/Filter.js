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
                    <label>Nome A-Z</label>
                    <input type="radio" name="ordering" value="nameAZ"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label>Nome Z-A</label>
                    <input type="radio" name="ordering" value="nameZA"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label>Voto 10-0</label>
                    <input type="radio" name="ordering" value="voto100"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label>Voto 0-10</label>
                    <input type="radio" name="ordering" value="voto010"/>
                </div>
            </div>
            <label>GENERE</label>
            <input type="text"/>
            <div>
                <div>
                    <label>Preferito:</label>
                    <img src={notfavorited}/>
                </div>
                <div>
                    <label>Preferito:</label>
                    <img src={watched}/>
                    <img src={watching}/>
                    <img src={towatch}/>
                </div>
                <div>
                    <label>Preferito:</label>
                    <img src={series}/>
                    <img src={film}/>
                </div>
            </div>
            <div>
                <button>FILTRA</button>
                <button>ANNULLA FILTRI</button>
            </div>
            <label>Platforms:</label>
            <div>
                <img src={netflix}/>
                <img src={netflix}/>
                <img src={netflix}/>
                <img src={netflix}/>
                <img src={netflix}/>
            </div>
            
        </div>
    );
  }
}

export default Login;