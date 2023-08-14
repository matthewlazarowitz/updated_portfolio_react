import React from 'react';
import './aboutMe.css';

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <img src="./assets/profilepic.jpg" alt="Matthew Lazarowitz" />
        <p>
          Welcome to my site!  My name is Matthew Lazarowitz and I am an aspiring web developer.  Enjoy your stay and take a look around at all my previous works.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
