import React, { FunctionComponent, PropsWithChildren } from 'react';
import github from '../../assets/svg/github.svg';
import discord from '../../assets/svg/discord.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import instagram from '../../assets/svg/instagram.svg';
import twitter from '../../assets/svg/twitter.svg';
import threads from '../../assets/svg/threads.svg';
import '../../general.css';
import './Integrations.css';

interface IntegrationsProps {
    DoFadeIn?: boolean;
    Widths?: string;
    Borders?: string;
    PaddingTop?: string;
    PaddingBottom?: string;
    Spacing?: string;
}

const Integrations: FunctionComponent<PropsWithChildren<IntegrationsProps>> = ({children, DoFadeIn, Widths, Borders, PaddingTop, PaddingBottom, Spacing}) => {
    return (
        <div className={DoFadeIn ? "integrationsContainer fadeInLeft" : "integrationsContainer"} style={{paddingTop : PaddingTop, paddingBottom : PaddingBottom}}>
            <ul className="horizontal">
                <li style={{paddingRight : Spacing}}>
                    <a href="https://github.com/TheUnnamedPerson" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={github}/></a>
                </li>
                <li style={{paddingRight : Spacing}}>
                    <a href="https://discordapp.com/users/264168562183241730" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={discord}/></a>
                </li>
                <li style={{paddingRight : Spacing}}>
                    <a href="https://www.linkedin.com/in/unnamedperson/" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={linkedin}/></a>
                </li>
                <li style={{paddingRight : Spacing}}>
                    <a href="https://www.instagram.com/unnamed.person13/" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={instagram}/></a>
                </li>
                <li style={{paddingRight : Spacing}}>
                    <a href="https://twitter.com/UnnamedPerson13" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={twitter}/></a>
                </li>
                <li style={{paddingRight : Spacing}}>
                    <a href="https://www.threads.net/@unnamed.person13" target="_blank" rel="noopener noreferrer">
                        <img className="integrationImg" style={{width : Widths, borderWidth : Borders}} src={threads}/></a>
                </li>
            </ul>  
        </div>
    );
}

export default Integrations