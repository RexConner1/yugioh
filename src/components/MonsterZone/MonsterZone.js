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
            <div className="monsterCard">
              <Card image={this.state.zoneImage} />
            </div>
            <div className="monsterCard">
              <Card image={this.state.zoneImage} />
            </div>
            <div className="monsterCard">
              <Card image={this.state.zoneImage} />
            </div>
            <div className="monsterCard">
              <Card image={this.state.zoneImage} />
            </div>
            <div className="monsterCard">
              <Card image={this.state.zoneImage} />
            </div>
          </div>
        );
    }
}

export default MonsterZone;
