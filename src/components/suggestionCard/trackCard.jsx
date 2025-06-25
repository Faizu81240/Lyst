import React from 'react'
import './sug.css'
import trackImg from '../heroPlayer/assets/songImage.jpg'
import addIcon from '../heroPlayer/assets/add.svg'

export default function Track({track}){

  const image = track.album?.images[0]?.url || trackImg

  const durationMs = track.duration_ms;
  const minutes = Math.floor(durationMs / 60000);
  const seconds = String(Math.floor((durationMs % 60000) / 1000)).padStart(2, '0');
  const duration = `${minutes}.${seconds}`;

  return (
    <div className='sugCard'>
        <img src={image} alt="" className='trackImage' />
        <div className='trackContainer'>
            <div className='trackDetails'>
              <span className='trackName'>{track.name}</span>
              <span className='trackArtist'>{(() => {
                  const artistNames = track.artists.map(artist => artist.name).join(', ');
                  return artistNames.length > 59 ? artistNames.slice(0, 60) + '...' : artistNames;
                  })()}
</span>
            </div>
            <div className='trackControls'>
                <span className='trackDuration'>{duration}</span>
                <img src={addIcon} alt="" className='trackAdd'/>
            </div>
        </div>
    </div>
  );
}
