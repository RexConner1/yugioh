import React, { Component } from 'react';

import './Game.css';

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
              <h1>Game</h1>
          </div>
        );
    }
}

export default Game;
