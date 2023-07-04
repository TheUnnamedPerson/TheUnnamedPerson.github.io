import React from 'react';
import github from './assets/img/github.svg';
import discord from './assets/img/discord.svg';
import linkedin from './assets/img/linkedin.svg';
import instagram from './assets/img/instagram.svg';
import twitter from './assets/img/twitter.svg';
import './App.css';

function App() {
  return (
    <div className="introSection">
        <span className="IntroContainer">
            <h1 className="title">Fernando Fonseca</h1>
            <h2 className="subtitle">Software Developer</h2>
            <div className="integrationsContainer">
                <ul className="horizontal">
                    <li>
                        <a href="https://github.com/TheUnnamedPerson" target="_blank" rel="noopener noreferrer">
                            <img className="integrationImg" src={github}/></a>
                    </li>
                    <li>
                        <a href="https://discordapp.com/users/264168562183241730" target="_blank" rel="noopener noreferrer">
                            <img className="integrationImg" src={discord}/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/unnamedperson/" target="_blank" rel="noopener noreferrer">
                            <img className="integrationImg" src={linkedin}/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/unnamed.person13/" target="_blank" rel="noopener noreferrer">
                            <img className="integrationImg" src={instagram}/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/UnnamedPerson13" target="_blank" rel="noopener noreferrer">
                            <img className="integrationImg" src={twitter}/></a>
                    </li>
                </ul>  
            </div>
        </span>
        <div className="spacerDiv"></div>
        <span className="logoContainer">
            <div className="logo">
                <div className="goop"></div>
            </div>
            
        </span>
        
    </div>
  );
}

export default App;
