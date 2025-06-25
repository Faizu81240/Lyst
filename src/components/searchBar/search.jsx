import React from 'react'
import sch from '../heroPlayer/assets/add.svg'
import spot from '../heroHeader/assets/spotify.svg'
import './search.css'

export default function search({query, setQuery}) {
  return (
    <div className='searchBar'>
            <img src={sch} alt="" className='seachIcon' />
            <input 
              type="text" 
              placeholder='Search by title, artist or album....' 
              className='inputArea'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <img src={spot} alt="" className='spotifyLogo' />
    </div>
  )
}
