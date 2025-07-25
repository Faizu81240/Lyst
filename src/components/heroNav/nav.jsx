
import './nav.css'
import { NavLink } from 'react-router-dom';

function HeroNav(){
  return (
    <div className='navContainer'>
      <NavLink to="/home" className={'buttonFocus'}>
        Home
      </NavLink>
      <NavLink to="/search" className={'button'}>
        Search
      </NavLink>
      <NavLink to="/library" className={'button'}>
        Library
      </NavLink>
      <NavLink to="/create" className={'button'}>
        Create
      </NavLink>
    </div>
  );
}

export default HeroNav;
