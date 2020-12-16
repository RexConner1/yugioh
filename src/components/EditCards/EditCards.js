import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';

import './EditCards.css';

const backendUrl = 'http://localhost:3000/api'

class EditCards extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        }
    }

    componentDidMount = () => {
        this.getCardsForDeck()
    }

    getCardsForDeck = async() => {
        const response = await axios(`${backendUrl}/decks/deck/${this.props.match.params.id}`)

        console.log(response.data.deck)

        this.setState({
            cards: response.data.deck
        })
    }

    render() {
        const cards = this.state.cards.map(card => {
            return (
                <tr key={card.id}>
                    <td>{card.cardNumber}</td>
                    <td onDoubleClick={() => console.log('Hi')}>{card.name}</td>
                    <td>{card.Stat.level}</td>
                    <td>{card.Stat.attack}</td>
                    <td>{card.Stat.defense}</td>
                    <td></td>
                    <td><a href="/delete">Delete</a></td>
                </tr>
            )
        })

        return (
          <div>
              <table className="table table-striped table-hover">
                  <thead>
                      <tr>
                          <th scope="col">Card Number</th>
                          <th scope="col">Name</th>
                          <th scope="col">Level</th>
                          <th scope="col">Attack</th> 
                          <th scope="col">Defense</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards}
                    </tbody>
                 </table>
          </div>
        );
    }
}

export default EditCards;
