import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './EditDecks.css';

// const backendUrl = 'http://localhost:3000/api'
const backendUrl = 'https://orona-yugioh-backend.herokuapp.com/'

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

        this.setState({
            decks: response.data.decks
        })
    }

    addNewDeck = async(e) => {
        if (e.target.name.value) {
            await axios.post(`${backendUrl}/users/${this.props.userId}/newdeck`, {
                name: e.target.name.value
            })

            this.getDecks()
        }
    }

    deleteDeck = async(id) => {
        await axios.delete(`${backendUrl}/decks/${id}`)

        this.getDecks()
    }

    updateDeckName = async(e, id) => {
        await axios.put(`${backendUrl}/decks/${id}`, {
            name: e.target.value
        })

        this.getDecks()
    }

    render() {
        const decks = this.state.decks.map(deck => {
            return (
                <tr key={deck.id}>
                    <td>
                        <div className="radio" onChange={(e) => console.log(e.target)}>
                            <input type="radio" id={`radio${deck.id}`} name="optradio" />
                        </div>
                    </td>
                    <td><input onChange={(e) => this.updateDeckName(e, deck.id)} type="text" defaultValue={deck.name} /></td>
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
