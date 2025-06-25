import React from 'react'
import bg from '../assets/Tunnel.svg';

import HeroHeader from '../components/heroHeader/heroHeader';
import SuggestionImage from '../components/SUGGESTIONS.png';
import HeroSongPlayback from '../components/heroPlayer/player';
import HeroNav from '../components/heroNav/nav';

function HomePage() {
  return (
    <div className='hero'>
        <img src={bg} className='bg'/>
        <HeroHeader></HeroHeader>
        <HeroNav></HeroNav>
        <img src={SuggestionImage} alt="" />
        <HeroSongPlayback songName="Muththa Mazhai" artist="AR Rahman . Chinmayi"></HeroSongPlayback>
    </div>
  )
}

export default HomePage