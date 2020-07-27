import React from 'react';
import Nav from '../Navigation';

function Header(props) {
    const { currentPage, setCurrentPage } = props

    return(
        <header className='d-flex justify-content-between p-5 bg-secondary'>
            <h2 className='text-primary'>Diego Hernandez's Portfolio</h2>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
        </header>
    );
}

export default Header;