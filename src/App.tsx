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
    <div id='rootContainer' className='NoFlex'>
        <div className="introSection sizedToScreen">
            <span className="IntroContainer">
                <h1 className="title">Fernando Fonseca</h1>
                <h2 className="subtitle">Software Developer</h2>
                <Integrations DoFadeIn={true} Widths='min(min(64px, 4vh), 4vw)' Borders='min(5px, 0.3125vh)' PaddingTop='min(10px, 0.35vh)' Spacing='min(10px, 2vh)'/>
            </span>
            <div className="spacerDiv"/>
            <span className="logoContainer">
                <div className="logo">
                    <div className="goop"></div>
                </div>
                
            </span>
        </div>
        <div className="infoSection middle">
            <div className='vertPaddingXV center' style={{marginTop : "40px", marginBottom : "40px", }}>
                <InfoPanel Header="Skills" Width='50vw' MaxWidth='1000px'>
                    <div className={"horizontal" + ((window.innerHeight > window.innerWidth) ? "" : " center")} style={{marginLeft : "2.5%", marginRight : "2.5%"}}>
                        <div className='maxWidth inlineBlock'>
                            <div>
                                <h3>Front End Development</h3>
                                <div className='left sidePaddingXV vertPaddingX'>
                                    <Bar Text='XAML - WPF, Avalonia' InnerWidth='70%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='XAML - UWP' InnerWidth='70%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='React' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                </div>
                            </div>
                            <div>
                                <h3>Mobile Development</h3>
                                <div className='left sidePaddingXV vertPaddingX'>
                                    <Bar Text='React Native' InnerWidth='65%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                </div>
                            </div>
                            <div>
                                <h3>CS Languages</h3>
                                <div className='left sidePaddingXV vertPaddingX'>
                                    <Bar Text='C#' InnerWidth='90%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='C++' InnerWidth='75%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='Java' InnerWidth='65%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='Python' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="spacerDiv" style={{maxWidth : "10%"}}/>
                        
                        <div className='maxWidth inlineBlock'>
                            <div>
                                <h3>Back End Development</h3>
                                <div className='left sidePaddingXV vertPaddingX'>
                                <Bar Text='ASP .NET' InnerWidth='85%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='Node JS' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                </div>
                            </div>
                            <div>
                                <h3>Software Development</h3>
                                <div className='left sidePaddingXV vertPaddingX'>
                                <Bar Text='.NET Core' InnerWidth='95%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                <Bar Text='Unity 3D' InnerWidth='80%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                </div>
                            </div>
                            <div>
                                <h3>Spoken Langauges</h3>
                                <div className='left sidePaddingXV vertPaddingX'>
                                    <Bar Text='English' InnerWidth='100%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='Spanish' InnerWidth='100%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                    <Bar Text='Japanese' InnerWidth='55%' InnerHeight="15px" InnerColor='#0000FF' OuterWidth='100%' OuterHeight="15px" OuterColor='#777777'/>
                                </div>
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
