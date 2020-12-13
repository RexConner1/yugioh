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
        return (
          <div className="hand">
              <div className="card">
                <Card image={this.state.zoneImage} />
              </div>
              <div className="card">
                <Card image={this.state.zoneImage} />
              </div>
              <div className="card">
                <Card image={this.state.zoneImage} />
              </div>
              <div className="card">
                <Card image={this.state.zoneImage} />
              </div>
              <div className="card">
                <Card image={this.state.zoneImage} />
              </div>
          </div>
        );
    }
}

export default Hand;
