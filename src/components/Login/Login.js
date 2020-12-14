import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
          <div className="login">
              <form onSubmit={(e) => {
                  e.preventDefault()
                  console.log(e.target.username.value)
                  console.log(e.target.password.value)
              }}>
                      <label htmlFor="username">User Name: </label>
                      <input name="username" id="username" />
                      <br/>
                      <label htmlFor="password">Password: </label>
                      <input name="password" id="password" />
                      <br />
                      <button>Submit</button>
              </form>
          </div>
        );
    }
}

export default Login;
