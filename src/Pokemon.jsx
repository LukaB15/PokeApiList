import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Pokemon.css'
import { v4 as uuidv4 } from 'uuid';


export default function Pokemon({pokemon, searchTerm}) {
const randomlvl = Math.floor(Math.random() * 101);


  return (
      <div className='container'>
                  {pokemon.filter((val)=> {
                        if(searchTerm === ""){
                        return null
                        }
                        else if(val.name.toLowerCase().startsWith(searchTerm.toLowerCase())){
                              return val
                        }
                  }
                  ).map(p => (
                        <Link  key={uuidv4()} to={{
                              pathname : `SinglePokemon/${p.url.split("/").slice(-2)[0]}`,
                              gameProps: {
                                    p: p,
                                },
                              }}>
                        <div key={uuidv4()} className="pokemon" >
                              <div className='image_poke'>
                              <img className='image_sprite' src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + p.url.split("/").slice(-2)[0] +  ".png"} alt="pokemon" onError = {e => e.target.style.display = "none"} /> 
                                    <div class="content">
                                          <img className='pokebck' src='../images/pokeballbck.png'></img>
                                    </div>
                              </div>
                              <div className='info_poke'>
                                    <h3 className='Name'>{p.name}</h3>
                                    <div className='healthbar_container'>
                                          <div className='HP_content'>
                                                <p className='HP'>HP</p>
                                                <div className='HP_bar'></div>
                                          </div>
                                    </div>
                                    <div className='lvl_poke'>
                                          <p className='level'>100/100</p>
                                    </div>
                              </div>
                        </div>
                         {/* <img className='image' src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + p.url.split("/").slice(-2)[0] +  ".png"} alt="pokemon" onError = {e => e.target.style.display = "none"} />  */}
                        </Link> 
                        
                  ))}
      </div>
  )
}
