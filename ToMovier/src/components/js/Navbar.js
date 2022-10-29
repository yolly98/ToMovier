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
        <div id="nav-container1">
          
          <div id="nav-container2">
            <img id="nav-logo" src={logo}/>
            <label id="nav-name">ToMovier</label>
          </div>

          <div id="nav-container3">
            <div id="nav-container4">
              <label style={{color: "white"}}>Bentornato {this.props.user}</label>
              <img id="img-exit" src={exit}  onClick={() => this.props.onExit()}/>
            </div>
            <div id="nav-container5">
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