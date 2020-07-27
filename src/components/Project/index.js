import React from 'react';

function Project(props) {

    return(
        <div className='col-sm-6 project-tile justify-content-center' key={props.id}>
            <div className={`image-${props.id} project-img m-2 p-3 w-75 rounded-lg`}>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <a href={props.repo_link}>
                        <i className="fa fa-github" aria-hidden="true" style={{ fontSize: '30px' }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Project;