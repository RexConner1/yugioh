import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

import './EditCards.css';

// const backendUrl = 'http://localhost:3000/api'
const backendUrl = 'https://orona-yugioh-backend.herokuapp.com/'

class EditCards extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            toSelect: []
        }
    }

    componentDidMount = () => {
        this.getCardsForDeck()
        this.getAllCards()
    }

    getCardsForDeck = async() => {
        const response = await axios(`${backendUrl}/decks/deck/${this.props.match.params.id}`)

        this.setState({
            cards: response.data.deck
        })
    }

    getAllCards = async() => {
        const response = await axios(`${backendUrl}/cards`)

        this.setState({
            toSelect: response.data.allCards
        })
    }

    addCardToDeck = async(id) => {
        await axios.post(`${backendUrl}/decks/${this.props.match.params.id}/addcard`, {
            deckId: this.props.match.params.id,
            cardId: id
        })

        this.getCardsForDeck()
    }

    deleteCardFromDeck = async(cardId) => {
        // console.log(`${backendUrl}/decks/${this.props.match.params.id}/removecard`)
        await axios.delete(`${backendUrl}/decks/${cardId}/removecard`)

        this.getCardsForDeck()
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
                    <td><Link onClick={() => this.deleteCardFromDeck(card.id)}>Delete</Link></td>
                </tr>
            )
        })

        const cardOptions = this.state.toSelect.map(card => {
            return (
                <Dropdown.Item onClick={() => this.addCardToDeck(card.id)}>{card.name}</Dropdown.Item>
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

                 <DropdownButton id="dropdown-basic-button" title="Add Card to Deck">
                     {cardOptions}
                 </DropdownButton>
          </div>
        );
    }
}

export default EditCards;
