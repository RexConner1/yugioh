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
      userId: false,
    }
  }

  setUserId = async(userId) => {
    await this.setState({
      userId: userId
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navigation loggedIn={this.state.userId} />
        </header>
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/login" render={(routerProps) => <Login {...routerProps} setUserId={this.setUserId} />} />
            <Route path="/signup" render={() => <Signup />} />

            <Route path="/game" render={() => <Game />} />

            <Route path="/decks/edit" render={(routerProps) => <EditDecks {...routerProps} userId={this.state.userId} />} />
            <Route path="/decks/deck/:id/edit" render={(routerProps) => <EditCards {...routerProps} userId={this.state.userId} />} />
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
