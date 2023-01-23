import { useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Pokemon from '../Pokemon';
import axios from "axios";
import './SinglePokemon.css'
import Title from "../Title";
import { v4 as uuidv4 } from 'uuid';
import Title_Single from "../Title_Single";

export default function SinglePokemon() {
  const {id} = useParams();
  const [onePokemon, setOnePokemon] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData2 = async () => {
    const result = await axios(
       `https://pokeapi.co/api/v2/pokemon/${id}/`,
          );
    const onePokemon = result.data;
    // console.log(onePokemon.sprites.other.home.front_default);
    setLoading(false)
    setOnePokemon(onePokemon);
      };
    fetchData2();
  }, []);



  return (
    <>
    <Title_Single />
    {Object.keys(onePokemon).length > 0 && 
    <div>
      <h2>
      { onePokemon.name}
     </h2>
     
     <div className="container_single">
      <img className='image' src={onePokemon.sprites.other["official-artwork"].front_default} alt="pokemon" onError = {e => e.target.style.display = "none"}/>

     <div className="stats_pokemon">{onePokemon.stats.map((p) => (
      <div key={uuidv4()} className="pokemon_stat">
        <p>{p.stat.name}</p>
        <p>{p.base_stat}</p>
      </div>
     ))}</div>
       </div>
     <div className="type_pokemon">{onePokemon.types.map((p) => (
      <div key={uuidv4()} className="pokemon_type">
           <p className={`${{"grass":"grass","fire":"fire","water":"water"}[p.type.name]}`}
           >{p.type.name} </p>
      </div>
     ))}</div>
     {/* <img className='image_sprite' src={onePokemon.sprites.front_default} alt="pokemon" /> */}
    
    </div>
}
  </>
  )
}

// {`${p.type.name === "grass"?"green":"yellow"}`}