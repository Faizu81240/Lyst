
import './nav.css'

function HeroNav(){
  return (
    <div className='navContainer'>
        <div className='buttonFocus'><span to="/home">Home</span></div>
        <div className='button'><span>Search</span></div>
        <div className='button'><span>Library</span></div>
        <div className='button'><span>Create</span></div>
    </div>
  );
}

export default HeroNav;
