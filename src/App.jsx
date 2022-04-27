import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import PokemonList from './views/Pokemon/List';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>Alchemy Compendium</h1>
            <PokemonList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
