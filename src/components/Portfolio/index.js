import React from 'react';
import Project from '../Project';
import projectList from '../../project-info.json';

function Portfolio() {
    const renderProject = (projectList) => {
        return(
            <Project
                key={projectList.name}
                name={projectList.name}
                image={projectList.image}
                description={projectList.description}
                repo_link={projectList.repo_link}
            />
        )
    }

    return(
        <section className='col-6'>
            {projectList.map(renderProject)}
        </section>
    )
}

export default Portfolio;