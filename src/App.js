import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './aboutMe'; 
import Projects from './Projects';
import './Contact.css';
import './App.css';

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
