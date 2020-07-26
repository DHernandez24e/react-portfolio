import React, { useState } from 'react';
import './App.css';
import './bootstrap.css'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import Resume from '../src/components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About/>
        case 'Projects':
          return <Portfolio/>
        case 'Contact':
          return <Contact/>
        case 'Resume':
          return <Resume/>
        default:
            return <About/>
      }
    }

  return (
    <div className='bg-danger'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
