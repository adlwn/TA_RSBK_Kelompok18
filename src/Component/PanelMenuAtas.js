import React, { useState  } from 'react';
import { Tombol } from './Tombol';
import { Link } from 'react-router-dom';
import './PanelMenuAtas.css';

function PanelMenuAtas() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                First Page
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tentangkami'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Creator Page
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pokedex'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pokedex Page
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/legendarycards'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buy Legendary Cards
              </Link>
            </li>
          </ul>
          <Tombol color={"black"} darkColor={"red"} onClick={(e) => {
              e.preventDefault();
              window.location.href='https://divianis.my.id';
              }} >CONTACT DIVI
          </Tombol>
          <Tombol color={"black"} darkColor={"red"} onClick={(e) => {
              e.preventDefault();
              window.location.href='https://www.linkedin.com/in/desy-krisdian-37444615a/';
              }} >CONTACT DESY
          </Tombol>
        </div>
      </nav>
    </>
  );
}

export default PanelMenuAtas;
