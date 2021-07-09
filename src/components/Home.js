import React from 'react';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    return (
        <div className = "container snap">
            
            <div className="dark-block typewriter">
                <h1 className="title"> <span style={{color: '#549ca0'}}>printf</span>(<span style={{color: 'rgb(196, 67, 91)'}}>"Hi, my name is Soham.\n"</span>);</h1>
            </div>
            <br/>
            <Grid container>
                <Grid item xs>
                    <div className ="description">
                        I'm a senior at UW-Madison studying computer science and math.
                        I have experience in web development and object-oriented programming in professional, academic, and personal contexts.
                        In my free time, I like to read books, bike, and mess around on my guitar. 
                        Shoot me an email if you want to talk!
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;