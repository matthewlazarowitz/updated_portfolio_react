import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="#https://github.com/matthewlazarowitz">GitHub</a>
        <a href="#https://www.linkedin.com/">LinkedIn</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Matthew Lazarowitz. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
