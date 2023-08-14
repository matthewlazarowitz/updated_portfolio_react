import React from 'react';
import './Navigation.css';

function Navigation(props) {
  const { activeLink, onLinkClick } = props;

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            onClick={() => onLinkClick('about')}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => onLinkClick('portfolio')}
            className={activeLink === 'portfolio' ? 'active' : ''}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => onLinkClick('contact')}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => onLinkClick('resume')}
            className={activeLink === 'resume' ? 'active' : ''}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
