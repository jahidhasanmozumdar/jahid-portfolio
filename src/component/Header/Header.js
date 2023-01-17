import React from 'react';
import CTA from './Cv';
import HeaderSocials from './headerSocial';
import './Header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jahid hasan</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;