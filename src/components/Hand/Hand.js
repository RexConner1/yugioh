import React, { Component } from 'react';

import './Hand.css';
import Card from '../Card/Card'

class Hand extends Component {
    constructor() {
        super();
        this.state = {
            zoneImage: "https://storage.googleapis.com/ygoprodeck.com/pics/11714098.jpg"
        }
    }

    render() {
        const hand = this.props.hand.map(card => (
            <div className="card"  key={card.id}>
                <Card image={this.state.zoneImage} />
            </div>
        ))

        return (
          <div className="hand">
              {hand}
          </div>
        );
    }
}

export default Hand;
