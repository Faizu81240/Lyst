import songImage from './assets/songImage.jpg';
import previous from './assets/previous.svg';
import pause from './assets/pause.svg';
import forward from './assets/forward.svg';
import add from './assets/add.svg';
import './player.css'

function HeroSongPlayback(prop) {
  return (
    <div className='songPlayback'>
        <div className='track'>
            <img src= {songImage} alt="" className='trackImage'></img>
            <div className='trackDetails'>
                <span className='trackName'>{ prop.songName }</span>
                <span className='artist'>{ prop.artist }</span>
            </div>
        </div>
        <div className='playerControls'>
            <span className='timer'></span>
            <div className='playbackControls'>
                <img src = {previous} className='previous'></img>
                <img src = {pause} className='playPause'></img>
                <img src = {forward} className='forward'></img>
            </div>
            <img src = {add} className='addButton'></img>
        </div>
    </div>
  );
}

export default HeroSongPlayback;
