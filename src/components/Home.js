import React from 'react';

const Home = () => {

    return (
        <div class = "container snap">
            <div class="dark-block typewriter">
                <h1 class="title"> <span style={{color: '#549ca0'}}>printf</span>(<span style={{color: 'rgb(196, 67, 91)'}}>"Hi, my name is Soham.\n"</span>);</h1>
            </div>
            <div class ="row">
                <div class ="description">
                I am a junior at UW-Madison, studying computer science and math.
                I have experience in web development and object-oriented programming in professional, academic, and personal contexts.
                In my free time, I like to read books, play pick-up soccer, and listen to ambient music. 
                Shoot me an email if you want to talk! 
                </div>
            </div>
        </div>
    );
}

export default Home;