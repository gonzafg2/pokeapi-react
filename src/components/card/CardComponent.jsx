import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

const requestPokemon = async (poke) => {
  try {
    const req = await axios.get(poke);
    console.log(req.data);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};

const CardComponent = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    requestPokemon(URL).then((data) => setPokemon(data));
  }, []);

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
    </div>
  );
};

export default CardComponent;
