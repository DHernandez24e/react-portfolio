import React from 'react';

function Resume() {
    return(
        <section className='m-3 p-4 h-75 bg-success'>
            <h3>Resume</h3>
            <a href='/'>Download my resume</a>
            <h3>Front End Technologies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
            <h3>Back End Technologies:</h3>
            <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>SQL/Sequelize</li>
                <li>noSQL/Mongoose</li>
                <li>Express.js</li>
            </ul>
        </section>
    )
}

export default Resume;