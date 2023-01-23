import React from 'react'
import PokeList from './PokeList';
import { useState } from 'react';
import './Home.css'

export default function Home() {
      const [searchTerm, setSearchTerm] = useState("")
  return (
      <>
        <div className='searchbardiv'>
            <input className='searchbar' type="text" placeholder='Search a Pokemon' onChange={event=>{setSearchTerm(event.target.value)}}/>
        </div>
            <PokeList searchTerm={searchTerm}/>
      </>
  )
}
