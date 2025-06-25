import '../heroNav/nav.css'
import './heroHeader.css'
import lyst from './assets/lyst.svg'
import spotify from './assets/spotify.svg'

function HeroHeader(){
  return (
    <div className='header'>
      <img src={lyst} alt="" className='logo'/>
      <button className='buttonHeader'>Login with<img src={spotify} className='buttonLogo' /></button>
    </div>
  );
}

export default HeroHeader;
