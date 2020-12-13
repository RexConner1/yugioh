import React, { Component } from 'react';

import './Game.css';
import Player from '../Player/Player'

class Game extends Component {
    constructor() {
        super();
        this.phases = ["draw", "standby", "main1", "battle", "main2", "end"]
        this.state = {
            currentPlayer: 0,
            gamePhase: 0  //Draw, Standby, Main1, Battle, Main2, End
        }
    }

    executeDraw = (e) => {
        if(this.getPhase() === this.phases[0]) {
            console.log('Draw')
            this.nextPhase()
        }
    }

    executeStandby = (e) => {
        console.log('Standby')
    }
    
    executeMain1 = (e) => {
        console.log('Main1')
    }

    executeBattle = (e) => {
        console.log('Battle')
    }

    executeMain2 = (e) => {
        console.log('Main2')
    }

    executeEnd = (e) => {
        console.log('End')
    }

    getPhase = () => {
        return this.phases[this.state.gamePhase]
    }

    nextPhase = () => {
        this.setState({
            gamePhase: this.state.gamePhase + 1 < this.phases.length ? this.state.gamePhase + 1 : 0
        })
    }

    render() {
        return (
          <div>
              <Player draw={this.executeDraw} />
              <Player draw={this.executeDraw} />
              <button>End Phase</button>
          </div>
        );
    }
}

export default Game;
