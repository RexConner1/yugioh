import React, { Component } from 'react';
import axios from 'axios';

import './Player.css';
import Board from '../Board/Board';
import Hand from '../Hand/Hand';

const backendUrl = 'http://localhost:3000/api'

class Player extends Component {
    constructor() {
        super();
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
            turn: 1
        }
    }

    componentDidMount = () => {
        // this.setDeck()
    }

    setDeck = async() => {
        const response = await axios(`${backendUrl}/decks`)
        this.setState({
            deck: response
        })
    }

    isCorrectPhase = (phaseId) => {
        return this.props.phase.getPhase() === this.props.phase.phases[phaseId]
    }

    isPlayersTurn = () => {
        return this.props.getPlayer() === this.props.player
    }

    drawCard = () => {
        if (this.isCorrectPhase(0) && this.isPlayersTurn()) {
            const temp = this.state.deck
            const card = temp.shift()
            this.setState({
                deck: temp
            })

            this.props.phase.goToNextPhase()

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
    }

    render() {
        return (
          <div>
              <div className="board">
                  <Board draw={this.drawCard} />
              </div>
              <div className="hand">
                  <Hand hand={this.state.hand} />
              </div> 
          </div>
        );
    }
}

export default Player;
