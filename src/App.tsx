import React from 'react';
import './general.css';
import './App.css';

import Integrations from './components/Integrations/Integrations'
import InfoPanel from './components/InfoPanel/InfoPanel'
import Bar from './components/Bar/Bar'

import Footer from './components/Footer/Footer'

function App() {
    var initialHeight = document.documentElement.clientHeight;
  return (
    <div id='rootContainer' className=''>
        <div className="introSection sizedToScreen">
            <span className="IntroContainer">
                <h1 className="title">Fernando Fonseca</h1>
                <h2 className="subtitle">Software Developer</h2>
                <Integrations DoFadeIn={true} Widths='64px' Borders='5px'/>
            </span>
            <div className="spacerDiv"/>
            <span className="logoContainer">
                <div className="logo">
                    <div className="goop"></div>
                </div>
                
            </span>
        </div>
        <div className="infoSection middle">
            <div className='vertPaddingXV'>
                <InfoPanel Header="Skills" Width='50vw'>
                    <div className='horizontal center'>
                        <div className='maxWidth'>
                            <h3>Front End Development</h3>
                            <div className='left sidePaddingXV vertPaddingX'>
                                <Bar Text='XAML - WPF, Avalonia' InnerWidth='70%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='XAML - UWP' InnerWidth='70%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='React' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            </div>
                            <h3>Mobile Development</h3>
                            <div className='left sidePaddingXV vertPaddingX'>
                            <Bar Text='React Native' InnerWidth='65%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            </div>
                            <h3>CS Languages</h3>
                            <div className='left sidePaddingXV vertPaddingX'>
                                <Bar Text='C#' InnerWidth='90%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='C++' InnerWidth='75%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='Java' InnerWidth='65%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='Python' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            </div>
                        </div>
                        
                        <div className="spacerDiv" style={{maxWidth : "10%"}}/>
                        
                        <div className='maxWidth'>
                            <h3>Back End Development</h3>
                            <div className='left sidePaddingXV vertPaddingX'>
                            <Bar Text='ASP .NET' InnerWidth='85%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            <Bar Text='Node JS' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            </div>
                            <h3>Software Development</h3>
                            <div className='left sidePaddingXV vertPaddingX'>
                            <Bar Text='.NET Core' InnerWidth='95%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            <Bar Text='Unity 3D' InnerWidth='80%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            </div>
                            <h3>Spoken Langauges</h3>
                            <div className='left sidePaddingXV vertPaddingX'>
                                <Bar Text='English' InnerWidth='100%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='Spanish' InnerWidth='100%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='Japanese' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                            </div>
                        </div>
                    </div>
                    
                </InfoPanel>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
