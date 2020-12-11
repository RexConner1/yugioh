import React, { Component } from 'react';

import './MonsterZone.css';
import Card from '../Card/Card'

class MonsterZone extends Component {
    constructor() {
        super();
        this.state = {
          zoneImage: "/monsterCardZone.png"
        }
    }

    render() {
        return (
          <div className="monsterCards">
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
            <Card image={this.state.zoneImage} />
          </div>
        );
    }
}

export default MonsterZone;
