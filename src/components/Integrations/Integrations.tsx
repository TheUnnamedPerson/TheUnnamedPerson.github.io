import React, { FunctionComponent, PropsWithChildren } from 'react';
import github from '../../assets/img/github.svg';
import discord from '../../assets/img/discord.svg';
import linkedin from '../../assets/img/linkedin.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import threads from '../../assets/img/threads.svg';
import '../../general.css';
import './Integrations.css';

interface IntegrationsProps {
    DoFadeIn?: boolean;
    Widths?: string;
    Borders?: string;
}

const Integrations: FunctionComponent<PropsWithChildren<IntegrationsProps>> = ({children, DoFadeIn, Widths, Borders}) => {
    return (
        <div className={DoFadeIn ? "integrationsContainer fadeInLeft" : "integrationsContainer"}>
            <ul className="horizontal">
                <li>
                    <a href="https://github.com/TheUnnamedPerson" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={github}/></a>
                </li>
                <li>
                    <a href="https://discordapp.com/users/264168562183241730" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={discord}/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/unnamedperson/" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={linkedin}/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/unnamed.person13/" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={instagram}/></a>
                </li>
                <li>
                    <a href="https://twitter.com/UnnamedPerson13" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={twitter}/></a>
                </li>
                <li>
                    <a href="https://www.threads.net/@unnamed.person13" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={threads}/></a>
                </li>
            </ul>  
        </div>
    );
}

export default Integrations