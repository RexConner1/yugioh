import React, { Component } from 'react';

import './Game.css';
import Player from '../Player/Player'

class Game extends Component {
    constructor() {
        super();
        this.numberOfMonsterSlots = 5;
        this.state = {
            currentPlayer: 0,
            monstersOnField: [new Array(this.numberOfMonsterSlots).fill(null), new Array(this.numberOfMonsterSlots).fill(null)],
            lifePoints: [8000, 8000],
            winner: "",
        }
    }


    
    getPlayer = () => {
        return this.state.currentPlayer
    }

    getOtherPlayer = () => {
        return this.state.currentPlayer ? 0 : 1
    }

    changePlayer = () => {
        this.setState({
            currentPlayer: this.getOtherPlayer()
        })
    }



    deductLifePoints = (points, fromPlayer = this.getOtherPlayer()) => {
        const temp = this.state.lifePoints
        temp[fromPlayer] = temp[fromPlayer] - points
        this.setState({
            lifePoints: temp
        })
    }



    render() {
        return (
          <div className="game">
              <div className="player2">
                <Player player={1} getPlayer={this.getPlayer} changePlayer={this.changePlayer} onField={this.state.monstersOnField[1]} />
              </div>
              <div className="player1">
                <Player player={0} getPlayer={this.getPlayer} changePlayer={this.changePlayer} onField={this.state.monstersOnField[0]} />
              </div>
              <button>End Phase</button>
          </div>
        );
    }
}

export default Game;
