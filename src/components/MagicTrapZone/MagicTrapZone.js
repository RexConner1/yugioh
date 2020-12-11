import React, { Component } from 'react';

import './MagicTrapZone.css';

class MagicTrapZone extends Component {
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

export default MagicTrapZone;
