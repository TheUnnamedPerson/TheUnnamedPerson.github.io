import React, { FunctionComponent, PropsWithChildren } from 'react';
import '../../general.css';
import './InfoPanel.css';
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';

interface InfoPanelProps {
    Header?: string;
    Width?: string;
    MaxWidth? : string;
    FontSize?: string;
}

const Block = (props: PropsWithChildren<InjectedViewportProps<HTMLDivElement>>) => {
    const { children, inViewport, forwardedRef } = props;
    return (
        <div className="viewport-block" ref={forwardedRef}>
            <div className={inViewport ? "panel middle fadeInTop" : "panel middle transparent"}>
                {children}
            </div>
        </div>
    );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const InfoPanel: FunctionComponent<PropsWithChildren<InfoPanelProps>> = ({
    children, Header, Width, MaxWidth, FontSize
}) => {
    return (
        <ViewportBlock>
            <div className='NoFlex' style={{width : Width, maxWidth : MaxWidth}}>
                <h2 className="sectionHeader" style={{fontSize: FontSize}}>
                    {Header}
                </h2>
                {children}
            </div>
        </ViewportBlock>
    );
}

export default InfoPanel