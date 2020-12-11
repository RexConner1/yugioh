import React, { Component } from 'react';

import './MonsterZone.css';

class MonsterZone extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        );
    }
}

export default MonsterZone;
