import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';

import './EditCards.css';

class EditCards extends Component {
    constructor() {
        super();
        this.state = {
            decks: [
                {
                    "id": 3,
                    "name": "Deck3",
                    "userId": 1,
                    "createdAt": "2020-12-13T02:54:09.232Z",
                    "updatedAt": "2020-12-13T02:54:09.232Z",
                    "Cards": [
                        {
                            "id": 1,
                            "cardNumber": 11714098,
                            "name": "30,000-Year White Turtle",
                            "Stat": {
                                "level": 5,
                                "attack": 1250,
                                "defense": 2100
                            },
                            "DeckCard": {
                                "deckId": 3,
                                "cardId": 1,
                                "createdAt": "2020-12-13T02:54:09.238Z",
                                "updatedAt": "2020-12-13T02:54:09.238Z"
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Deck2",
                    "userId": 1,
                    "createdAt": "2020-12-13T02:54:09.232Z",
                    "updatedAt": "2020-12-13T02:54:09.232Z",
                    "Cards": [
                        {
                            "id": 1,
                            "cardNumber": 11714098,
                            "name": "30,000-Year White Turtle",
                            "Stat": {
                                "level": 5,
                                "attack": 1250,
                                "defense": 2100
                            },
                            "DeckCard": {
                                "deckId": 2,
                                "cardId": 1,
                                "createdAt": "2020-12-13T02:54:09.238Z",
                                "updatedAt": "2020-12-13T02:54:09.238Z"
                            }
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "Deck1",
                    "userId": 1,
                    "createdAt": "2020-12-13T02:54:09.232Z",
                    "updatedAt": "2020-12-13T02:54:09.232Z",
                    "Cards": [
                        {
                            "id": 1,
                            "cardNumber": 11714098,
                            "name": "30,000-Year White Turtle",
                            "Stat": {
                                "level": 5,
                                "attack": 1250,
                                "defense": 2100
                            },
                            "DeckCard": {
                                "deckId": 1,
                                "cardId": 1,
                                "createdAt": "2020-12-13T02:54:09.238Z",
                                "updatedAt": "2020-12-13T02:54:09.238Z"
                            }
                        },
                        {
                            "id": 5,
                            "cardNumber": 47372349,
                            "name": "Acrobat Monkey",
                            "Stat": {
                                "level": 3,
                                "attack": 1000,
                                "defense": 1800
                            },
                            "DeckCard": {
                                "deckId": 1,
                                "cardId": 5,
                                "createdAt": "2020-12-14T17:09:31.285Z",
                                "updatedAt": "2020-12-14T17:09:31.285Z"
                            }
                        },
                        {
                            "id": 10,
                            "cardNumber": 43096270,
                            "name": "Alexandrite Dragon",
                            "Stat": {
                                "level": 4,
                                "attack": 2000,
                                "defense": 100
                            },
                            "DeckCard": {
                                "deckId": 1,
                                "cardId": 10,
                                "createdAt": "2020-12-14T17:10:39.006Z",
                                "updatedAt": "2020-12-14T17:10:39.006Z"
                            }
                        }
                    ]
                }
            ]
        }
    }

    render() {
        const cards = this.state.decks.map(deck => {
            return (
                <tr key={deck.id}>
                    <td></td>
                    <td onDoubleClick={() => console.log('Hi')}>{deck.name}</td>
                    <td>{deck.Cards.length}</td>
                    <td>{deck.createdAt}</td>
                    <td>{deck.updatedAt}</td>
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
