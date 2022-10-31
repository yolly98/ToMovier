import React, {Component} from 'react';
import '../style/Card.css'

import cross from '../../images/delete.png'
import star from '../../images/fullstar.png'

class Card extends Component{

    render(){
        return(
            <div className="card-col">
                <div className="card-container">
                    <div className="card-header" style={{padding: '0.3rem', border: '0'}}>
                        <img className="img-iswatched" src={this.props.card.isWatched} alt="..."/>
                        <img className="img-delete" src={cross} alt="..." onClick={() => this.props.onDeleteCard(this.props.card)}/>
                    </div>
                    <div className="card-identifier" style={{padding: '0.3rem', border: '0'}}>
                        <img className="image-card" src={this.props.card.image} alt="..." />
                        <div className="card-title-container">
                            <label className="card-title">{this.props.card.name}</label>
                        </div>
                    </div>
                    <div className="card-body" style={{padding: '0.3rem', border: '0'}}>
                        <img className="img-isfilm" src={this.props.card.isFilm} alt="..."/>
                        <div className="card-rate-container">
                            <label className='card-rate'>{this.props.card.rating}</label>
                            <img className="img-star" src={star} alt="..."/>
                        </div>
                    </div>
                    <div className="card-footer" style={{padding: '0.3rem', border: '0'}}>
                        <img className="img-isfavorited" src={this.props.card.isFavorite} alt="..."/>
                        <button className="button-open" onClick={() => this.props.onOpenCard(this.props.card)}>APRI</button>
                        <img className="img-platform" src={this.props.card.platform} alt="..."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;