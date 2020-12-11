import React, { Component } from 'react';

import './Player.css';
import Board from '../Board/Board';

class Player extends Component {
    constructor() {
        super();
        this.state = {
            lifePoints: 8000
        }
    }

    render() {
        return (
          <div>
              <Board draw={this.props.draw} />
          </div>
        );
    }
}

export default Player;
