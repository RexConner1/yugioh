import React, { Component } from 'react';

import './Player.css';
import Board from '../Board/Board';
// import Hand from '../Hand/Hand';

class Player extends Component {
    constructor() {
        super();
        this.state = {
            deck: [],
            lifePoints: 8000,
        }
    }

    componentDidMount = () => {
        this.getDeck()
    }

    getDeck = async() => {
        
    }

    render() {
        return (
          <div>
              <Board draw={this.props.draw} />
              {/* <Hand /> */}
          </div>
        );
    }
}

export default Player;
