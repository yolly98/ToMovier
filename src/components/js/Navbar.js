import React, {Component} from 'react';

import logo from '../../images/logo.png'
import search from '../../images/search.png'
import filter from '../../images/filter.png'
import exit from '../../images/exit.png'

import '../style/Navbar.css'
class Navbar extends Component{
  render(){
    return(
      <nav id="nav">
        <div id="container1">
          
          <div>
            <img id="img-logo" src={logo}/>
            <label id="name">ToMovier</label>
          </div>

          <div id="container2">
            <div style={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center'}}>
              <label style={{color: "white"}}>Bentornato {this.props.user}</label>
              <img id="img-exit" src={exit}  onClick={() => this.props.onExit()}/>
            </div>
            <div style={{marginBottom: '0.5rem', display: 'flex', flexWrap: 'nowrap', alignItems: 'center'}}>
              <input id="input-search" type='text' />
              <img id="img-search" src={search}  onClick={() => this.props.onSearch(document.getElementById('input-search').value)}/>
              <img id="img-filter" src={filter}  onClick={() => this.props.onFilter()}/>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

export default Navbar;