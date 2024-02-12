import React, { Component } from 'react';

import './Graveyard.css';
import Card from '../Card/Card'

class Graveyard extends Component {
    constructor() {
        super();
        this.state = {
            image: "/graveyard.png"
        }
    }

    render() {
        return (
          <div>
              <Card image={this.state.image} />
          </div>
        );
    }
}

export default Graveyard;
