import logo from '../../images/logo.png'
import '../style/Navbar.css'
function Navbar(){
    return(
        <nav className="navbar bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">
            <img id="logo" src={logo} className="d-inline-block align-text-center"/>
            <span style={{color: "white", paddingLeft: "1rem", fontSize: "1.8rem"}}>ToMovier</span>
          </p>
          <div>
            <label>Bentornato yolly98</label>
            <img id="logo" src={logo} className="d-inline-block align-text-center"/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;