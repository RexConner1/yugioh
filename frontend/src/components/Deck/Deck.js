import React, { Component } from 'react';

import './Deck.css';
import Card from '../Card/Card'

class Deck extends Component {
    constructor() {
        super();
        this.state = {
            image: '/deck.png'
        }
    }

    render() {
        return (
          <div onClick={(e) => this.props.draw(e)}>
              <Card image={this.state.image} />
          </div>
        );
    }
}

export default Deck;
