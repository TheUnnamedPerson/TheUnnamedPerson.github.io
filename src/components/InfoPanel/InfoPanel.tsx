import React, { FunctionComponent, PropsWithChildren } from 'react';
import '../../general.css';
import './InfoPanel.css';
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';

interface InfoPanelProps {
    Header?: string;
    Width?: string;
    MaxWidth? : string;
    FontSize?: string;
    direction?: 'ltr' | 'rtl';
}

const Block = (props: PropsWithChildren<InjectedViewportProps<HTMLDivElement>>) => {
    const { children, forwardedRef, enterCount } = props;
    return (
        <div className="viewport-block" ref={forwardedRef}>
            <div className={enterCount > 0 ? "panel middle fadeInTop" : "panel middle transparent"}>
                {children}
            </div>
        </div>
    );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const InfoPanel: FunctionComponent<PropsWithChildren<InfoPanelProps>> = ({
    children, Header, Width, MaxWidth, FontSize, direction
}) => {
    if (direction == null || direction == undefined) direction = 'ltr';
    return (
        <ViewportBlock>
            <div className='NoFlex' style={{width : Width, maxWidth : MaxWidth, direction: direction}}>
                <h2 className="sectionHeader" style={{fontSize: FontSize}}>
                    {Header}
                </h2>
                {children}
            </div>
        </ViewportBlock>
    );
}

export default InfoPanel