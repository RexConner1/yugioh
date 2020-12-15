import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Game from './components/Game/Game'
import EditDecks from './components/EditDecks/EditDecks'
import EditCards from './components/EditCards/EditCards'
import Navigation from "./components/Navigation/Navigation";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  setLoginState = (state) => {
    this.setState({
      loggedIn: state
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navigation loggedIn={this.state.loggedIn} />
        </header>
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/login" render={(routerProps) => <Login {...routerProps} setLoginState={this.setLoginState} />} />
            <Route path="/signup" render={() => <Signup />} />

            <Route path="/game" render={() => <Game />} />

            <Route path="/decks/edit" render={() => <EditDecks />} />
            <Route path="/decks/deck/:id/edit" render={() => <EditCards />} />
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
