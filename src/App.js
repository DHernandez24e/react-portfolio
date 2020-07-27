import React, { useState, useEffect } from 'react';
import './App.css';
import './bootstrap.css'
import '../src/assets/css/font-awesome-4.7.0/css/font-awesome.css'
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

    useEffect(() => {
      document.title = currentPage
    })

  return (
    <div className='bg-primary'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className='vh-100 overflow-auto'>
        {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
