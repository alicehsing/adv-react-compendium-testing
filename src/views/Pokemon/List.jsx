import { useEffect, useState } from 'react';
import styles from '../../App.css';
import PokemonCard from '../../components/Card';

export default function PokemonList() {
  // set state
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]); //stores a filtered subset of pokemons

  // if there is a search of any length; !! converting value into boolean
  const isSearching = !!search.length;
  // if there is a search, show the results, otherwise show all pokemons
  const pokeList = isSearching ? results : pokemons;
  // if there is search and there are no results
  const noPokemon = isSearching && !results.length;

  // useEffect to fetch pokemon API, create an object with the info I want to access to
  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch(
        'https://pokedex-alchemy.herokuapp.com/api/pokedex'
      );
      const { results } = await res.json();
      const pokemonData = results.map((pokemon) => ({
        name: pokemon.pokemon,
        image: pokemon.url_image,
        type: pokemon.type_1,
        defenseLevel: pokemon.defense,
      }));
      setPokemons(pokemonData);
      setLoading(false);
    };
    getPokemons();
  }, []);

  // function for handling search input, will also filter by name, be case insensitive and remove extra space
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const searchResults = pokemons.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim())
    );
    setResults(searchResults);
  };

  return (
    <>
      {loading ? (
        <p>Loading Pokemon...</p>
      ) : (
        <>
          <input
            value={search}
            placeholder="Search by name"
            type="text"
            onChange={handleSearch}
            // onChange={() => {
            //   handleSearch();
            // }}
          />
          <h2>List of Pokemons</h2>

          <div className={styles.list}>
            {pokeList.map((pokemon) => {
              return (
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.type}
                  defenseLevel={pokemon.defenseLevel}
                />
              );
            })}
          </div>
        </>
      )}
      {noPokemon && <p>No results</p>}
    </>
  );
}
