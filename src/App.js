import React, {Component} from 'react';

import Navbar from './components/js/Navbar';
import Card from './components/js/Card';

let coraline = 'http://1.bp.blogspot.com/-r4taLNcpLCc/TmyjQw8ZTfI/AAAAAAAAA04/DYQe0dEgfKg/s1600/coraline.jpg';

class App extends Component{

  state = {
    cards: [
      {id:0, name: "Coraline", image: coraline}
    ]
  }

  handleOpenCard = cardName => {
    console.log("open button pressed [" + "] " + cardName);
  }

  render(){
    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='row'>
            {
              this.state.cards.map(card => (
                <Card
                  key = {card.id}
                  onOpenCard = {this.handleOpenCard}
                  card = {card}
                />
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;

