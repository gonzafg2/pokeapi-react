import { useEffect } from "react";
import axios from 'axios'

const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

const requestPokemon = async (poke) => { 
  try {
    const req = await axios.get(poke)
    console.log(req.data)
    return req.data
  } catch (error) {
    console.error(error);
  }
}

const CardComponent = () => {

  useEffect(() => {
    requestPokemon(URL)
  })

  return <h1>Vite + React Holi</h1>;
}

export default CardComponent;