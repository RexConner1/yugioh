import React, { Component } from 'react';
// import axios from 'axios';

import './Player.css';
import Board from '../Board/Board';
import Hand from '../Hand/Hand';

// const backendUrl = 'http://localhost:3000/api'

class Player extends Component {
    constructor() {
        super();
        // this.phases: ["draw", "standby", "main1", "battle", "main2", "end"],
        this.phases = ["draw", "main1", "battle", "end"]
        this.state = {
            deck: [
                {
                    id: 1,
                    cardNumber: 1,
                    name: "Test1",
                    type: "Normal Monster"
                },
                {
                    id: 2,
                    cardNumber: 2,
                    name: "Test2",
                    type: "Normal Monster"
                },
                {
                    id: 3,
                    cardNumber: 3,
                    name: "Test3",
                    type: "Normal Monster"
                },
            ],
            hand: [],
            turn: 1,
            phase: 0,
            summonThisTurn: false,
        }
    }

    componentDidMount = () => {
        // this.setDeck()
    }


    //
    isPlayersTurn = () => {
        return this.props.getPlayer() === this.props.player
    }


    // PHASES
    getPhase = () => {
        return this.phases[this.state.phase]
    }

    goToNextPhase = async() => {
        await this.setState({
            phase: this.state.phase + 1 < this.phases.length ? this.state.phase + 1 : 0
        })

        if (!this.state.phase) {
            this.props.changePlayer()
        }
    }

    isCorrectPhase = (phaseId) => {
        return this.getPhase() === this.phases[phaseId]
    }


    // DRAW
    drawCard = () => {
        if (this.isCorrectPhase(0) && this.isPlayersTurn()) {
            const temp = this.state.deck
            const card = temp.shift()
            this.setState({
                deck: temp
            })

            console.log(card)
            this.addCardToHand(card)
        }
    }

    addCardToHand = (card) => {
        const temp = this.state.hand
        temp.push(card)
        this.setState({
            hand: temp
        })

        this.goToNextPhase()
    }


    // SUMMON
    selectMonsterToSummon = (e) => {
        if (this.isCorrectPhase(1) && !this.state.summonThisTurn) {
            console.log(e.target)
            this.setState({
                summonThisTurn: e.target
            })
        }
    }

    summonMonsterToField = (e) => {
        if (this.isCorrectPhase(1) && this.state.summonThisTurn) {
            e.target.src = this.state.summonThisTurn.src
            console.log(e.target)
        }

        this.goToNextPhase()
    }



    render() {
        return (
          <div>
              <div className="board">
                  <Board draw={this.drawCard} summonTo={this.summonMonsterToField} onField={this.props.onField} />
              </div>
              <div className="hand">
                  <Hand hand={this.state.hand} summon={this.selectMonsterToSummon} />
              </div> 
          </div>
        );
    }
}

export default Player;
