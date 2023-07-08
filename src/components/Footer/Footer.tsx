import React, { FunctionComponent, PropsWithChildren } from 'react';
import '../../general.css';
import './Footer.css';

import Integrations from '../Integrations/Integrations'

const Footer = () => {
    return (
        <div className='footer center'>
            <div className='NoFlex'>
                <Integrations DoFadeIn={false} Widths='Min(48px, 10vw)' Borders='3px' PaddingTop="min(5px, 2vh)" PaddingBottom="min(5px, 2vh)" />
                <p>
                    © 2023 Fernando Fonseca
                </p>
            </div>
        </div>
    );
}

export default Footer