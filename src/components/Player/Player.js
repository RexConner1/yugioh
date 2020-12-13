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
            lifePoints: 8000,
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

    drawCard = () => {
        if (this.props.phase.getPhase() === this.props.phase.phases[0] && this.props.getPlayer() === this.props.player) {
            const temp = this.state.deck
            const card = temp.shift()
            this.setState({
                deck: temp
            })

            this.props.phase.nextPhase()

            console.log(card)
            return card
        }
    }

    deductLifePoints = (points) => {
        this.setState({
            lifePoints: this.state.lifePoints - points
        })
    }

    render() {
        return (
          <div>
              <div className="board">
                  <Board draw={this.drawCard} />
              </div>
              <div className="hand">
                  <Hand />
              </div> 
          </div>
        );
    }
}

export default Player;
