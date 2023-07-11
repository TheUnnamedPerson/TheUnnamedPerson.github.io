import React from 'react';
import './general.css';
import './App.css';

import Integrations from './components/Integrations/Integrations'
import InfoPanel from './components/InfoPanel/InfoPanel'
import Bar from './components/Bar/Bar'
import Carousel from './components/Carousel/Carousel'

import Xaml_Logo from "./assets/cs-logos/Xaml.png";
import C_Sharp_Logo from "./assets/cs-logos/C-Sharp.svg";
import Cpp_Logo from "./assets/cs-logos/C++.svg";
import Java_Logo from "./assets/cs-logos/Java.svg"
import DOT_NET_Logo from "./assets/cs-logos/.Net.svg"
import React_Logo from "./assets/cs-logos/React.svg"
import Unity_Logo from "./assets/cs-logos/Unity.png"
import Avalonia_Logo from "./assets/cs-logos/Avalonia.svg"

import Footer from './components/Footer/Footer'

function App() {

    const Langs = [
        C_Sharp_Logo,
        Cpp_Logo,
        Java_Logo,
        DOT_NET_Logo,
        React_Logo,
        Xaml_Logo,
        Unity_Logo,
        Avalonia_Logo,
    ]

    const LangLinks = [
        "",
        "",
        "",
        "",
        "",
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
        <div className="infoSection NoFlex">
            <div className='NoFlex'>
                <div className='vertPaddingXV center' style={{marginTop :"40px", marginBottom : "40px", }}>
                    <InfoPanel Header="Skills" FontSize='5vh' Width='60vw' MaxWidth='1500px'>
                        <div className='center'>
                            <Carousel slides={Langs} links={LangLinks} width='35vw' height='7.5vw' buttonRadius="7.5vh" countToShow={4} spacing='1vw' paddingTop='1vh' paddingBottom='5vh' paddingLeft='5vw' paddingRight='5vw' />
                        </div>
                    </InfoPanel>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  );
}

export default App;
