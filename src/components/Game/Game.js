import React, { Component } from 'react';

import './Game.css';
import Player from '../Player/Player'

class Game extends Component {
    constructor() {
        super();
        this.phaseObjects = {
            phases: ["draw", "standby", "main1", "battle", "main2", "end"],
            getPhase: this.getPhase,
            goToNextPhase: this.goToNextPhase,
        }
        this.state = {
            currentPlayer: 0,
            gamePhase: 0  //Draw, Standby, Main1, Battle, Main2, End
        }
    }

    // executeDraw = (e) => {
    //     if(this.getPhase() === this.phases[0]) {
    //         console.log('Draw')
    //         this.nextPhase()
    //     }
    // }

    // executeStandby = (e) => {
    //     console.log('Standby')
    // }
    
    // executeMain1 = (e) => {
    //     console.log('Main1')
    // }

    // executeBattle = (e) => {
    //     console.log('Battle')
    // }

    // executeMain2 = (e) => {
    //     console.log('Main2')
    // }

    // executeEnd = (e) => {
    //     console.log('End')
    // }

    getPlayer = () => {
        return this.state.currentPlayer
    }

    getPhase = () => {
        return this.phaseObjects.phases[this.state.gamePhase]
    }

    goToNextPhase = async() => {
        await this.setState({
            gamePhase: this.state.gamePhase + 1 < this.phaseObjects.phases.length ? this.state.gamePhase + 1 : 0
        })

        if (!this.state.gamePhase) {
            this.changePlayer()
        }
    }

    changePlayer = () => {
        this.setState({
            currentPlayer: this.state.currentPlayer ? 0 : 1
        })
    }

    render() {
        return (
          <div>
              <div className="player2">
                <Player player={1} phase={this.phaseObjects} getPlayer={this.getPlayer} />
              </div>
              <div className="player1">
                <Player player={0} phase={this.phaseObjects} getPlayer={this.getPlayer} />
              </div>
              <button>End Phase</button>
          </div>
        );
    }
}

export default Game;
