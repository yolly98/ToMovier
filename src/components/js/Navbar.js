import logo from '../../images/logo.png'
import search from '../../images/search.png'
import filter from '../../images/filter.png'
import exit from '../../images/exit.png'

import '../style/Navbar.css'
function Navbar(){
    return(
      <nav id="nav">
        <div id="container1">
          
          <div>
            <img id="img-logo" src={logo}/>
            <label id="name">ToMovier</label>
          </div>

          <div id="container2">
            <div style={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center'}}>
              <label style={{color: "white"}}>Bentornato yolly98</label>
             <img id="img-exit" src={exit} />
            </div>
            <div style={{marginBottom: '0.5rem', display: 'flex', flexWrap: 'nowrap', alignItems: 'center'}}>
              <input id="input-search" />
              <img id="img-search" src={search} />
              <img id="img-filter" src={filter} />
            </div>
          </div>

        </div>
      </nav>
    );
}

export default Navbar;