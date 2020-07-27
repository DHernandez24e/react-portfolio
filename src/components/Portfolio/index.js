import React from 'react';
import Project from '../Project';
import projectList from '../../project-info.json';

function Portfolio() {
    const renderProject = (projectList) => {
        return(
            <Project
                id={projectList.id}
                key={projectList.id}
                name={projectList.name}
                description={projectList.description}
                repo_link={projectList.repo_link}
                live_link={projectList.live_link}
            />
        )
    }

    return(
        <section className='p-4 bg-success container-fluid justify-content-center'>
            <div className='row'>
                {projectList.map(renderProject)}
            </div>
        </section>
    )
}

export default Portfolio;