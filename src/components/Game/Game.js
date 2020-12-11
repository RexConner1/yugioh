import React, { Component } from 'react';

import './Game.css';
import Board from '../Board/Board';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            currentPlayer = 0,
            gamePhase = ""  //Draw, Standby, Main1, Battle, Main2, End
        }
    }

    render() {
        return (
          <div>
              <Board />
              <Board />
          </div>
        );
    }
}

export default Game;
