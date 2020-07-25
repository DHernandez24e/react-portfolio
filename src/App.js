import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Project from '../src/components/Project';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <Project/>
      </div>
      <div>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
