import { Route, Switch } from "react-router-dom";

import './App.css';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
