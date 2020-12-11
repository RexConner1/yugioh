import React, { Component } from 'react';

import './MagicTrapZone.css';
import Card from '../Card/Card'

class MagicTrapZone extends Component {
    constructor() {
        super();
        this.state = {
          zoneImage: "/magicTrapCardZone.png"
        }
    }

    render() {
        return (
          <div>
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
          </div>
        );
    }
}

export default MagicTrapZone;
