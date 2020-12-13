import axios from 'axios';
import React, { Component } from 'react';

import './EditDecks.css';

const backendUrl = 'http://localhost:3000/api'

class EditDecks extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount = () => {
        this.signUp()
        // this.logIn()
    }

    signUp = async() => {
        const response = await axios.post(`${backendUrl}/auth/signup`, {
            name: "David Orona",
            username: "djorona",
            password: "test"
        })
        console.log(response)
    }

    logIn = async() => {
        await axios.post(`${backendUrl}/auth/login`, {
            username: "djorona",
            password: "test"
        })
    }

    render() {
        return (
          <div>

          </div>
        );
    }
}

export default EditDecks;
