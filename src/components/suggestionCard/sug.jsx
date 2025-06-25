import React from 'react'
import './sug.css'
import Track from './trackCard'
import trackImg from '../heroPlayer/assets/songImage.jpg'

export default function Sug({results}) {

  const topTrack = results[0];

  const rawTopTrackName = topTrack?.name || 'Top Track';
  const topTrackName = rawTopTrackName.length > 20 ? rawTopTrackName.slice(0, 20) + '...' : rawTopTrackName;
  const topTrackArtist = topTrack?.artists?.[0]?.name || 'Artist Name';
  const topTrackImage = topTrack?.album?.images?.[0]?.url || trackImg;

  console.log(topTrackImage)

  return (
    <div className='sugContainer'>
        <div className='topTrack'
        style={{background: `linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0, 0, 0, 0.78) 61.54%), url(${topTrackImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}}>
          <div className='topTrackDetails'>
            <span className='topTrackName'>{topTrackName}</span>
            <span className='topTrackArtist'>{topTrackArtist}</span>
          </div>
        </div>
        <div className='searchSugs'>
          <span className='sugTitle'>Search Results</span>
          <div className='searchResults'>
            {results.length > 0 &&
            results.map((track) => (
              <Track key={track.id} track={track} />
            ))
            }
          </div>
        </div>
    </div>
  );
}
