import React, {Component} from 'react';
import '../style/Alert.css'

import cross from '../../images/delete.png'

class Alert extends Component{

    state = {
        title: this.props.alert.title,
        text: this.props.alert.text,
        image: this.props.alert.image
    }

    render(){
        return(
            <div id="alert-container" style={{position: 'fixed', zIndex: '4'}}>
                <div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <label id="alert-title">{this.state.title}</label>
                        <img id="alert-cross" onClick={() => this.props.closeAlert()} src={cross}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem'}}>
                        <img id="alert-image" src={this.state.image}/>
                        <p id="alert-text">{this.state.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;