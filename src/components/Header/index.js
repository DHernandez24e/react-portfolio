import React from 'react';
import Nav from '../Navigation';

function Header(props) {
    const { currentPage, setCurrentPage } = props

    return(
        <header className='d-flex justify-content-between mx-4 p-4 bg-info'>
            <h2>Diego Hernandez's Portfolio</h2>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
        </header>
    );
}

export default Header;