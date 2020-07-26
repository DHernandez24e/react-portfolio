import React, { useState } from 'react';
import './App.css';
import './bootstrap.css'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Project from '../src/components/Project';
import Contact from '../src/components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Contact')

    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return //<About/>
        case 'Projects':
          return <Project/>
        case 'Contact':
          return <Contact/>
        case 'Resume':
          return //<Resume/>
        default:
            return //<About/>
      }
    }

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
