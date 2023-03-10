import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import SinglePokemon from "./routes/SinglePokemon";
import Loading from "./Loading";

export default function PokeList({searchTerm}) {
      const [loading, setLoading] = useState(true)
      const [pokemon, setPokemon] = useState([])

          useEffect(() => {
            setLoading(true)
            const fetchData2 = async () => {
            const result = await axios(
               'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1278',
                  );
            const pokemon = result.data.results;
            setLoading(false)
            setPokemon(pokemon);
              };
            fetchData2();
          }, []);
        
          if (loading) return <Loading />
          
  return (
      <>
      <Pokemon pokemon={pokemon} searchTerm={searchTerm}  />
    </>
  )
}
