import React, { FunctionComponent, PropsWithChildren } from 'react';
import '../../general.css';
import './InfoPanel.css';
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';

interface InfoPanelProps {
    Header?: string;
    Width?: string;
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
    children, Header, Width
}) => {
    return (
        <ViewportBlock>
            <div className='NoFlex' style={{width : Width}}>
                <h2 className="sectionHeader">
                    {Header}
                </h2>
                {children}
            </div>
        </ViewportBlock>
    );
}

export default InfoPanel