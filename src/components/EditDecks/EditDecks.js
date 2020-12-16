import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './EditDecks.css';

const backendUrl = 'http://localhost:3000/api'

class EditDecks extends Component {
    constructor() {
        super();
        this.state = {
            decks: []
        }
    }

    componentDidMount = () => {
        this.getDecks()
    }

    getDecks = async() => {
        const response = await axios(`${backendUrl}/decks/${this.props.userId}`)

        console.log(response.data.decks)

        this.setState({
            decks: response.data.decks
        })
    }

    addNewDeck = async(e) => {
        if (e.target.name.value) {
            const response = await axios.post(`${backendUrl}/users/${this.props.userId}/newdeck`, {
                name: e.target.name.value
            })

            this.getDecks()
        }
    }

    deleteDeck = async(id) => {
        const response = await axios.delete(`${backendUrl}/decks/${id}`)

        this.getDecks()
    }

    render() {
        const decks = this.state.decks.map(deck => {
            return (
                <tr key={deck.id}>
                    <td>
                        {/* <div class="radio" onChange={(e) => console.log(e.target)}>
                            <input type="radio" id={`radio${deck.id}`} name="optradio" checked />
                        </div> */}
                    </td>
                    <td onDoubleClick={() => console.log('Hi')}>{deck.name}</td>
                    <td>{deck.Cards.length}</td>
                    <td>{deck.createdAt}</td>
                    <td>{deck.updatedAt}</td>
                    <td><Link to={`deck/${deck.id}/edit`}>Edit</Link></td>
                    <td><Link onClick={() => this.deleteDeck(deck.id)}>Delete</Link></td>
                </tr>
            )
        })

        return (
          <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Set as Deck</th>
                    <th scope="col">Deck Name</th>
                    <th scope="col">Cards in Deck</th>
                    <th scope="col">Created At</th> 
                    <th scope="col">Updated At</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {decks}
                </tbody>
            </table>

            <form className="form-inline justify-content-center" onSubmit={(e) => {
                e.preventDefault()
                this.addNewDeck(e)
            }}>
                <div className="form-group col-xs-4">
                    {/* <label htmlFor="ex3">col-xs-4</label> */}
                    <input className="form-control" id="ex3" name="name" type="text" />
                </div>
                <button type="submit" className="btn btn-primary btn-center">Add Deck</button>
            </form>
          </div>
        );
    }
}

export default EditDecks;
