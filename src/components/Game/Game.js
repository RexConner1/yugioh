import React, { Component } from 'react';

import './Game.css';
import Player from '../Player/Player'

class Game extends Component {
    constructor() {
        super();
        this.numberOfMonsterSlots = 5;
        this.phaseObjects = {
            // phases: ["draw", "standby", "main1", "battle", "main2", "end"],
            phases: ["draw", "main1", "battle", "end"],
            getPhase: this.getPhase,
            goToNextPhase: this.goToNextPhase,
        }
        this.state = {
            currentPlayer: 0,
            gamePhase: 0,  //Draw, Standby, Main1, Battle, Main2, End
            monstersOnField: [new Array(this.numberOfMonsterSlots).fill(null), new Array(this.numberOfMonsterSlots).fill(null)],
            lifePoints: [8000, 8000],
            winner: "",
        }
    }

    getPlayer = () => {
        return this.state.currentPlayer
    }

    getPhase = () => {
        return this.phaseObjects.phases[this.state.gamePhase]
    }

    deductLifePoints = (points, fromPlayer) => {
        const temp = this.state.lifePoints
        temp[fromPlayer] = temp[fromPlayer] - points
        this.setState({
            lifePoints: temp
        })
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
          <div className="game">
              <div className="player2">
                <Player player={1} phase={this.phaseObjects} getPlayer={this.getPlayer} onField={this.state.monstersOnField[1]} />
              </div>
              <div className="player1">
                <Player player={0} phase={this.phaseObjects} getPlayer={this.getPlayer} onField={this.state.monstersOnField[0]} />
              </div>
              <button>End Phase</button>
          </div>
        );
    }
}

export default Game;
