import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './aboutMe'; 
import Projects from './Projects';
import './Contact.css';
import './App.css';

function App() {
  const projects = [
    {
      title: 'Database Terminal App',
      description: 'I was tasked with building a command-line application that allows users to manage employee data in a MySQL database. The goal was to create a robust system that enables users to perform various operations such as viewing departments, roles, and employees, adding new departments, roles, and employees, updating an employees role, and exiting the application.  To accomplish this, we utilized Node.js and MySQL as the foundation of the application.',
      image: process.env.PUBLIC_URL + '/assets/challenge12SS1.PNG',
      deployedLink: 'https://www.facebook.com/',
      githubLink: 'https://github.com/matthewlazarowitz/Employee_Database_Terminal_App',
    },
    {
      title: 'The Social Network Database',
      description: 'I was tasked with building an API for a social network web application using Express.js and MongoDB with Mongoose ODM. The API enables users to share their thoughts, react to friends, thoughts, and create a friend list. To achieve this, we created models for User, Thought, and Reaction, each with specific schema settings and virtuals to handle complex relationships and retrieve data efficiently.',
      image: process.env.PUBLIC_URL + '/assets/Challenge18SS1.PNG',
      deployedLink: 'https://www.facebook.com/',
      githubLink: 'https://github.com/matthewlazarowitz/The_Social_Network_Database',
    },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="app">
      <Header />
      <AboutMe />
      { <Projects projects={projects} /> }
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
        </form>
      </section>
    </div>
  );
}

export default App;
