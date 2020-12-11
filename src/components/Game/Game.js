import React, { Component } from 'react';

import './Game.css';
import Board from '../Board/Board';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: 0,
            gamePhase: ""  //Draw, Standby, Main1, Battle, Main2, End
        }
    }

    executeDraw(e) {
        console.log('Draw')
    }

    executeStandby(e) {
        console.log('Standby')
    }
    
    executeMain1(e) {
        console.log('Main1')
    }

    executeBattle(e) {
        console.log('Battle')
    }

    executeMain2(e) {
        console.log('Main2')
    }

    executeEnd(e) {
        console.log('End')
    }

    render() {
        return (
          <div>
              <Board draw={this.executeDraw} />
              <Board />
          </div>
        );
    }
}

export default Game;
