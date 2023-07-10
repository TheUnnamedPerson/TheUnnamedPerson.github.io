import React from 'react';
import './general.css';
import './App.css';

import Integrations from './components/Integrations/Integrations'
import InfoPanel from './components/InfoPanel/InfoPanel'
import Bar from './components/Bar/Bar'
import Slideshow from './components/Slideshow/Slideshow'

import Xaml_Logo from "./assets/cs-logos/xaml.png";
import C_Sharp_Logo from "./assets/cs-logos/c-sharp.svg";
import Cpp_Logo from "./assets/cs-logos/c++.svg";

import Footer from './components/Footer/Footer'

function App() {

    const Langs = [
        Xaml_Logo,
        C_Sharp_Logo,
        Cpp_Logo,
    ]

    const LangLinks = [
        "",
        "",
        "",
    ]

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
            <div className='vertPaddingXV center' style={{marginTop :"40px", marginBottom : "40px", }}>
            <InfoPanel Header="Skills" Width='50vw' MaxWidth='1000px'>
                <div className='center'>
                    <Slideshow slides={Langs} links={LangLinks} width='7.5vw' height='7.5vw' />
                </div>
            </InfoPanel>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
