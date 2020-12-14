import React, { Component } from 'react';

import './Hand.css';
import Card from '../Card/Card'

class Hand extends Component {
    constructor() {
        super();
        this.state = {
            image: "https://storage.googleapis.com/ygoprodeck.com/pics/11714098.jpg"
        }
    }

    render() {
        const hand = this.props.hand.map(card => (
            <div className="card"  key={card.id} onClick={(e) => this.props.summon(e)} >
                <Card image={this.state.image} />
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
