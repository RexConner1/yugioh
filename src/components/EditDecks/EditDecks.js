// import axios from 'axios';
import React, { Component } from 'react';

import './EditDecks.css';

// const backendUrl = 'http://localhost:3000/api'

class EditDecks extends Component {
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
                },
                {
                    "id": 2,
                    "name": "Deck2",
                    "userId": 1,
                    "createdAt": "2020-12-13T02:54:09.232Z",
                    "updatedAt": "2020-12-13T02:54:09.232Z",
                },
                {
                    "id": 1,
                    "name": "Deck1",
                    "userId": 1,
                    "createdAt": "2020-12-13T02:54:09.232Z",
                    "updatedAt": "2020-12-13T02:54:09.232Z",
                }
            ]
        }
    }

    componentDidMount = () => {
        // this.signUp()
        // this.logIn()
    }

    // signUp = async() => {
    //     const response = await axios.post(`${backendUrl}/auth/signup`, {
    //         name: "Bre Orona",
    //         username: "nice",
    //         password: "test"
    //     })
    //     console.log(response)
    // }

    // logIn = async() => {
    //     await axios.post(`${backendUrl}/auth/login`, {
    //         username: "djorona",
    //         password: "test"
    //     })
    // }

    // getDeck = async() => {
    //     const response = await axios(`${backendUrl}/deck`)
    //     console.log(response)
    // }

    render() {
        const decks = this.state.decks.map(deck => {
            return (
                <tr key={deck.id}>
                    <th scope="row">{deck.id}</th>
                    <td>{deck.name}</td>
                    <td>{deck.userId}</td>
                    <td>{deck.createdAt}</td>
                    <td>{deck.updatedAt}</td>
                    <td><a href="/edit">Edit</a></td>
                    <td><a href="/delete">Delete</a></td>
                </tr>
            )
        })

        return (
          <div>
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
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
          </div>
        );
    }
}

export default EditDecks;
