// import axios from 'axios';
import React, { Component } from 'react';

import './EditDecks.css';

// const backendUrl = 'http://localhost:3000/api'

class EditDecks extends Component {
    constructor() {
        super();
        this.state = {

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
        const decks = [
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

        return (
          <div>
            <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Deck Name</th>
                <th scope="col">Year</th>
                <th scope="col">Created</th>
                <th scope="col">Updated</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td><a href="/edit">Edit</a></td>
                    <td><a href="/delete">Delete</a></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td><a href="/edit">Edit</a></td>
                    <td><a href="/delete">Delete</a></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td><a href="/edit">Edit</a></td>
                    <td><a href="/delete">Delete</a></td>
                </tr>
            </tbody>
            </table>
          </div>
        );
    }
}

export default EditDecks;
