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
            deck: [],
            lifePoints: 8000,
        }
    }

    componentDidMount = () => {
        this.setDeck()
    }

    setDeck = async() => {
        const response = await axios(`${backendUrl}/decks`)
        this.setState({
            deck: response
        })
    }

    drawCard = () => {
        const temp = this.state.deck
        const card = temp.shift()
        this.setState({
            deck: temp
        })
        return card
    }

    render() {
        return (
          <div>
              <div className="board">
                  <Board draw={this.props.draw} />
              </div>
              <div className="hand">
                  <Hand />
              </div> 
          </div>
        );
    }
}

export default Player;
