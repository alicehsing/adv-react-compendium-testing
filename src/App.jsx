import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import PokemonList from './views/Pokemon/List';
import PokemonDetail from './views/Pokemon/Detail';

export default function App() {
  return (
    <Switch>
      <Route path="/pokemon/:id">
        <PokemonDetail />
      </Route>
      <Route path="/pokemon">
        <PokemonList />
      </Route>
      <Route path="/">
        <p>Home</p>
        <Link to="/pokemon">View Pokemon List</Link>
      </Route>
    </Switch>
  );
  
}
