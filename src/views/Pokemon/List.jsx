import { useEffect, useState } from 'react';

export default function PokemonList() {
  // set state
  const [pokemons, setPokemons] = useState([]); // store all pokemons
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // fetching pokemon API, create an object with the info I want to access to
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

  // /search bar

  return (
    <>
      {loading ? (
        <p>Loading Pokemon...</p>
      ) : (
        <>
          <input
            placeholder="Seach a Pokemon"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </>
      )}
    </>
  );
}
