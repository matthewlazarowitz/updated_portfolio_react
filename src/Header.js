import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
  const [activeLink, setActiveLink] = useState('about');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <h1>Matthew Lazarowitz</h1>
      <Navigation activeLink={activeLink} onLinkClick={handleLinkClick} />
    </header>
  );
}

export default Header;
