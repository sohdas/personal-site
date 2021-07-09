import React from 'react';

const Navbar = () => {

    return (
        <nav className="nav">
            <li className="nav-item">
                <a className="nav-link active" href="/">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.github.com/sohdas" >Projects</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link" href="mailto:sohamdasg@gmail.com" >Contact</a>
            </li>
        </nav>
    );
};

export default Navbar;