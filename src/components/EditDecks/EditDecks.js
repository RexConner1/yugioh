import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './EditDecks.css';

const backendUrl = 'http://localhost:3000/api'
// const backendUrl = 'https://backend-yugioh-thing.herokuapp.com/api'

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
        const response = await axios(`${backendUrl}/decks/${JSON.parse(localStorage.getItem('user')).id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })

        this.setState({
            decks: response.data.decks
        })
    }

    addNewDeck = async(e) => {
        if (e.target.name.value) {
            await axios.post(`${backendUrl}/users/${JSON.parse(localStorage.getItem('user')).id}/newdeck`, {
                name: e.target.name.value
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            })

            this.getDecks()
        }
    }

    deleteDeck = async(id) => {
        await axios.delete(`${backendUrl}/decks/${id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        })

        this.getDecks()
    }

    updateDeckName = async(e, id) => {
        await axios.put(`${backendUrl}/decks/${id}`, {
            name: e.target.value
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
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
