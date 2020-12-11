import { Route, Switch } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home'
import Game from './components/Game/Game'
import EditDecks from './components/EditDecks/EditDecks'

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />

          <Route path="/game" render={() => <Game />} />

          <Route path="/decks/edit" render={() => <EditDecks />} />
          <Route path="/deck/:id/edit" render={() => <EditDecks />} />
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
