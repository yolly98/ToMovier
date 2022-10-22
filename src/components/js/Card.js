import React, {Component} from 'react';

class Card extends Component{
    render(){
        return(
            <div className="col">
                <div className="card" style={{width: '20rem', textAlign: 'center'}}>
                    <img src={this.props.card.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.name}</h5>
                        <button className="btn btn-outline-danger" onClick={() => this.props.openCard(this.props.card.name)}>OPEN</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;