import React, {Component} from 'react';
import '../style/Login.css'

import logo from '../../images/logo.png'

import '../style/Navbar.css'

class Login extends Component{

  render(){
    return(
        <div id="login-page">
            <img id="login-logo" src={logo} alt="..."/>
            <label id="login-title">ToMovier</label>
            <label>Nome Utente</label>
            <input id="input-user" type="text" style={{marginBottom: '1rem'}}/>
            <label>Password</label>
            <input id="input-password" type="text" style={{marginBottom: '1rem'}}/>
            <button  style={{borderRadius: '0.5rem', fontSize: '1.5rem', marginTop: '0.5rem'}} onClick={() => this.props.onLogin(document.getElementById('input-user').value, document.getElementById('input-password').value)}>LOGIN</button>
            <button  style={{borderRadius: '0.5rem',  marginTop: '0.5rem'}} onClick={() => this.props.onSignup(document.getElementById('input-user').value, document.getElementById('input-password').value)}>REGISTRATI</button>
        </div>
    );
  }
}

export default Login;