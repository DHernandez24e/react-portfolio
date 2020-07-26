import React from 'react';

function Nav(props) {
    const links = ['About', 'Projects', 'Contact', 'Resume']

    return(
            <ul className='nav nav-pills nav-fill'>
                {links.map(link => (
                    <li className='nav-item' key={link}>
                        <a
                            href={'#' + link.toLowerCase()}
                            onClick={() => props.setCurrentPage(link)}
                            className={
                                props.currentPage === link ? 'nav-link active' : 'nav-link'
                            }
                        >
                        {link}    
                        </a>
                    </li>
                ))}
            </ul>
    );
}

export default Nav;