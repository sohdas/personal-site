import React from 'react';

const Navbar = () => {

    return (
        <nav class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="#">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" target="_blank" href="https://www.github.com/sohdas" >Projects</a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" href="mailto:sohamdasg@gmail.com" >Contact</a>
            </li>
        </nav>
    );
};

export default Navbar;