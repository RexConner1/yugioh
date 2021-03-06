import React, { Component } from 'react';

import './MonsterZone.css';
import Card from '../Card/Card'

class MonsterZone extends Component {
    constructor() {
        super();
        this.defaultImage = "/monsterCardZone.png"
        this.state = {
          image: this.defaultImage
        }
    }

    render() {
        const monstersOnField = this.props.onField.map((card, i) => (
          <div className="monsterCard" key={i} onClick={(e) => {
            this.props.summonTo(e)
          }}>
            <Card image={this.state.image} />
          </div>
        ))

        return (
          <div className="monsterCards">
            {monstersOnField}
          </div>
        );
    }
}

export default MonsterZone;
