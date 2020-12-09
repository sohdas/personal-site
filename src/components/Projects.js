import React from 'react';

const Projects = () => {

    return (
        <div class = "container snap">
            <div class="dark-block typewriter">
                <h1 class="title"> <span style={{color: '#549ca0'}}>printf</span>(<span style={{color: 'rgb(196, 67, 91)'}}>"Here are some things I've worked on.\n"</span>);</h1>
            </div>
            <div class ="row">
                <div class="img">
                    <img src="%PUBLIC_URL%/ai.png" width="150"/>
                </div>
                <div class ="description">
                    I made the website for the University of Wisconsin-Madison's Artificial Intelligence Club.
                </div>
            </div>
            <div class ="row">

            </div>
        </div>
    );
};

export default Projects;