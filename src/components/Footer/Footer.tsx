import React, { FunctionComponent, PropsWithChildren } from 'react';
import '../../general.css';
import './Footer.css';

import Integrations from '../Integrations/Integrations'

const Footer = () => {
    return (
        <div className='footer center'>
            <div className='NoFlex'>
                <Integrations DoFadeIn={false} Widths='48px' Borders='3px'/>
                <p>
                    © 2023 Fernando Fonseca
                </p>
            </div>
        </div>
    );
}

export default Footer