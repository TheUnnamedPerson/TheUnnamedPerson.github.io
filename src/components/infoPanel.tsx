import React from 'react';
import './infoPanel.css';

function panel(args)
{
    return (
        <div className="panel middle onScrollFadeIn">
            <h2 className="sectionHeader">
                {args.Header}
            </h2>
            <button onClick={() => console.log("ScrollY = " + window.scrollY.toString())}>Print Height</button>
        </div>
    )
    
}