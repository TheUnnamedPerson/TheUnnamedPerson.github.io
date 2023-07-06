import React, { FunctionComponent, PropsWithChildren } from 'react';
import github from '../../assets/img/github.svg';
import discord from '../../assets/img/discord.svg';
import linkedin from '../../assets/img/linkedin.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import '../../general.css';
import './Bar.css';
import { relative } from 'path';

interface BarProps {
    Text?: string;
    InnerWidth?: string;
    InnerHeight?: string;
    InnerColor?: string;
    OuterWidth?: string;
    OuterHeight?: string;
    OuterColor?: string;
}

const Bar: FunctionComponent<PropsWithChildren<BarProps>> = ({children, Text, InnerWidth, InnerHeight, InnerColor, OuterWidth, OuterHeight, OuterColor}) => {
    return (
        <div>
            <p>{Text}</p>
            <div style={{marginTop : "10px", marginBottom : "10px"}}>
                <div style={{borderRadius : "9999px", width : OuterWidth, height : OuterHeight, backgroundColor : OuterColor}} className='outerBar'>
                    <div style={{borderRadius : "9999px", width : InnerWidth, height : InnerHeight, backgroundColor : InnerColor}} className='innerBar'/>
                </div>
            </div>
            
        </div>
    );
}

export default Bar