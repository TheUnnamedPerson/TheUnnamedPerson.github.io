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

import AvenirProject from "./assets/img/projects/Avenir.png"

import Footer from './components/Footer/Footer'
import { relative } from 'path';

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
            <div className='NoFlex'>
                <div className='vertPaddingXV center' style={{marginTop :"40px", marginBottom : "40px", }}>
                    <InfoPanel Header="Projects" FontSize='5vh' Width='50vw' MaxWidth='1500px'>
                        <div className='center' style={{height: "50vh", paddingTop: "5vh", display: "inline-block"}}>
                            <div style={{display: "inline-block"}} >
                                <a href="https://avenirinnovations.com" target="_blank" rel="noopener noreferrer">
                                    <img src={AvenirProject} style={{width: "24vw", borderStyle: "solid", borderWidth: "1vh", borderColor:"#FFFFFF", position: "relative", right: "2vw"}} />
                                </a>
                            </div>
                            <div style={{height: "40vh", width: "26vw", display: "inline-block",  position: "absolute", marginRight: "1vw", marginLeft: "1vw"}} >
                                <div className='center' style={{position: "relative", right: "2vw", top: "1vh"}}>
                                    <div className='text-center' style={{display: "block"}} >
                                        <h3 className='' >
                                            Avenir Innovations
                                        </h3>
                                        <p style={{paddingTop: "1vh", fontSize: "0.8vw"}}>
                                            At <a href="https://avenirinnovations.com" target="_blank" rel="noopener noreferrer">Avenir Innovations </a>
                                            I oversaw the <b>Programming Department</b> as <b>Director of Programming. </b>
                                            There, I oversaw the development of <a href="https://avenirinnovations.com" target="_blank" rel="noopener noreferrer"><b>The Avenir Innovations Website </b></a>
                                            and Developed Software that <b>Allows Remote Control of a Quadrupedal Robot, </b> Software that <b>Processes LiDAR Sensor Data in Order to Put Together a Map, </b>
                                            <b>Software that Allows Remote Monitoring of The Robot,</b> and More.
                                        </p>
                                        <h4 className='langHeader'>Relevent Skills</h4>
                                        <div className='langSection' style={{display: "inline-block"}}>
                                            <img className='langImg' src={C_Sharp_Logo}/>
                                            <img className='langImg' src={Cpp_Logo}/>
                                            <img className='langImg' src={DOT_NET_Logo}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            
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
