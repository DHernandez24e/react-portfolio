import React from 'react';

function Project(props) {

    return(
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className='content'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <i>
                <a href={props.repo_link}>Link</a>
            </i>
            </div>
        </div>
    )
};

export default Project;