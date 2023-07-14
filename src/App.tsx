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
import DOT_NET_Logo from "./assets/cs-logos/DOT_NET.svg"
import React_Logo from "./assets/cs-logos/React.svg"
import Unity_Logo from "./assets/cs-logos/Unity.png"
import Avalonia_Logo from "./assets/cs-logos/Avalonia.svg"
import Python_Logo from "./assets/cs-logos/Python.svg"
import Django_Logo from "./assets/cs-logos/Django.svg"

import Avenir_Project from "./assets/img/projects/Avenir.png"
import EU4_Project from "./assets/img/projects/EU4-Modding-Tool.png"
import BRS_Project from "./assets/img/projects/Battle-Royale-Simulator.png"

import Footer from './components/Footer/Footer'

function App() {

    const getFullVh = () => {
        return document.documentElement.clientHeight;
        //return (document.querySelector('#measure-vh') != null && document.querySelector('#measure-vh') != undefined) ? document.querySelector('#measure-vh')!.clientHeight : document.documentElement.clientHeight;
    }
    const getFullVw = () => {
        return document.documentElement.clientWidth;
        //return (document.querySelector('#measure-vh') != null && document.querySelector('#measure-vh') != undefined) ? document.querySelector('#measure-vh')!.clientWidth : document.documentElement.clientWidth;
    }

    var ViewportAspectRatio: number = getFullVw() / getFullVh();

    const Langs = [
        C_Sharp_Logo,
        Cpp_Logo,
        Java_Logo,
        DOT_NET_Logo,
        React_Logo,
        Xaml_Logo,
        Unity_Logo,
        Avalonia_Logo,
        Python_Logo,
        Django_Logo,
    ]

    const LangLinks = [
        "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "https://cplusplus.com/",
        "https://dev.java/",
        "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet",
        "https://react.dev/",
        "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-7.0",
        "https://unity.com/",
        "https://avaloniaui.net/",
        "https://www.python.org/",
        "https://www.djangoproject.com/",
    ]

  return (
    <div id='rootContainer' className='NoFlex'>
        <div style={{overflow: "hidden", height: 0}}>
            <div id="measure-vh" style={{position: "fixed", height: "100vh", width: "100vw"}}></div>
        </div>
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
                    <InfoPanel Header="Who Am I?" FontSize='5vh' Width='60vw' MaxWidth='1500px'>
                        <div className='center' style={{paddingBottom: "4vh"}}>
                            <div className='center' style={{paddingRight: "1vw", paddingLeft: "1vw", verticalAlign: "top"}} >
                                <div className='center'>
                                    <div className='text-center' style={{display: "block"}} >
                                        <p className='ProjectText'>
                                            I am a <b>Software Developer </b>centered out of <b>Los Angeles County</b> specializing in <b>.NET</b> and <b>C# </b>
                                            with plenty of experience in other languages and frameworks such as <b>C++, Java, and React. </b>
                                            I natively speak <b>English, </b><b>Spanish,</b> and took 4 years of <b> Japanese.</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </InfoPanel>
                </div>
            </div>
            <div className='NoFlex'>
                <div className='vertPaddingXV center' style={{marginTop :"40px", marginBottom : "40px", }}>
                    <InfoPanel Header="My Skills" FontSize='5vh' Width='60vw' MaxWidth='1500px'>
                        <div className='center'>
                            <Carousel slides={Langs} links={LangLinks} width='50vw' maxWidth='1300px' height='10vh' buttonDiameter="5vh" countToShow={(ViewportAspectRatio > 0.5) ? Math.floor((ViewportAspectRatio / 0.375) - .00001) + 1 : Math.floor((ViewportAspectRatio / 0.375) - .00001)} spacing='1vw' paddingTop='2.5vh' paddingBottom='5vh' paddingLeft='5vw' paddingRight='5vw' />
                        </div>
                    </InfoPanel>
                </div>
            </div>
            <div className='NoFlex'>
                <div className='vertPaddingXV center' style={{marginTop :"40px", marginBottom : "40px", }}>
                    <InfoPanel Header="Projects" FontSize='5vh' Width='60vw' MaxWidth='1500px'>
                        <div className='center' style={{paddingTop: "1vh", paddingBottom: "4vh", display: "inline-block"}}>
                            <div style={{display: "inline-block"}} >
                                <a href="https://avenirinnovations.com" target="_blank" rel="noopener noreferrer">
                                    <img src={Avenir_Project} style={{width: (getFullVw() * (.2525 + .2875) > 480) ? "25.25vw": "100%", borderStyle: "solid", borderWidth: "1vw", borderColor:"#FFFFFF",position: "relative", right: (getFullVw() * (.2525 + .2875) > 480) ? "2vw" : "1vw"}} />
                                </a>
                            </div>
                            <div className='center' style={{width: (getFullVw() * (.2525 + .2875) > 480) ? "28.75vw": "95%", display: "inline-block",  paddingRight: "1vw", paddingLeft: "1vw", verticalAlign: "top"}} >
                                <div className='center' style={{paddingTop: "2vh"}}>
                                    <div className='text-center' style={{display: "block"}} >
                                        <h3 className='ProjectHeader'>
                                            Avenir Innovations
                                        </h3>
                                        <p className='ProjectText'>
                                            At <a href="https://avenirinnovations.com" target="_blank" rel="noopener noreferrer"><b>Avenir Innovations </b></a>
                                            I oversaw the <b>Programming Department</b> as <b>Director of Programming. </b>
                                            There, I oversaw the development of 
                                            <a href="https://avenirinnovations.com" target="_blank" rel="noopener noreferrer">
                                            <b> the Avenir Innovations website </b></a>
                                            and developed software that <b>facilitates remote control of a quadrupedal robot, </b>
                                            software that <b>processes LiDAR Data, several video feeds,</b> and other sensor data in order to put together<b> a map of it's surroundings, </b>
                                            software that allows <b>remote monitoring</b> of the robot, and more.
                                        </p>
                                        <h4 className='langHeader'>Relevant Skills</h4>
                                        <div className='langSection' style={{display: "inline-block"}}>
                                            <img className='langImg' src={C_Sharp_Logo}/>
                                            <img className='langImg' src={Cpp_Logo}/>
                                            <img className='langImg' src={DOT_NET_Logo}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='center' style={{paddingTop: "1vh", paddingBottom: "4vh", display: "inline-block", direction: "rtl"}}>
                            <div style={{display: "inline-block", direction: "ltr"}} >
                                <a href="https://github.com/TheUnnamedPerson/EU4-Modding-Tool" target="_blank" rel="noopener noreferrer">
                                    <img src={EU4_Project} style={{width: (getFullVw() * (.2525 + .2875) > 480) ? "25.25vw": "100%", borderStyle: "solid", borderWidth: "1vw", borderColor:"#FFFFFF",position: "relative", left: (getFullVw() * (.2525 + .2875) > 480) ? "2vw" : "-1vw"}} />
                                </a>
                            </div>
                            <div className='center' style={{width: (getFullVw() * (.2525 + .2875) > 480) ? "28.75vw": "95%", display: "inline-block",  paddingRight: "1vw", paddingLeft: "1vw", verticalAlign: "top", direction: "ltr"}} >
                                <div className='center' style={{paddingTop: "2vh"}}>
                                    <div className='text-center' style={{display: "block"}} >
                                        <h3 className='ProjectHeader'>
                                            Machiavelli
                                        </h3>
                                        <p className='ProjectText'>
                                            <a href="https://github.com/TheUnnamedPerson/EU4-Modding-Tool" target="_blank" rel="noopener noreferrer">
                                            <b>Machiavelli </b></a>
                                            is a <b>modding tool</b> for the video game Europa Universalis IV built using <b>Avalonia,</b> a Modernized Version of <b>WPF. </b>
                                            Functionality needed for this project includes <b>parsing a custom scripting language, analyzing bitmaps,</b> and <b>editing data stored across a large amount of files.</b> 
                                        </p>
                                        <h4 className='langHeader'>Relevant Skills</h4>
                                        <div className='langSection' style={{display: "inline-block"}}>
                                            <img className='langImg' src={C_Sharp_Logo}/>
                                            <img className='langImg' src={DOT_NET_Logo}/>
                                            <img className='langImg' src={Xaml_Logo}/>
                                            <img className='langImg' src={Avalonia_Logo}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='center' style={{paddingTop: "1vh", paddingBottom: "4vh", display: "inline-block"}}>
                            <div style={{display: "inline-block"}} >
                                <a href="https://github.com/TheUnnamedPerson/Battle-Royale-Simulator" target="_blank" rel="noopener noreferrer">
                                    <img src={BRS_Project} style={{width: (getFullVw() * (.2525 + .2875) > 480) ? "25.25vw": "100%", borderStyle: "solid", borderWidth: "1vw", borderColor:"#FFFFFF",position: "relative", right: (getFullVw() * (.2525 + .2875) > 480) ? "2vw" : "1vw"}} />
                                </a>
                            </div>
                            <div className='center' style={{width: (getFullVw() * (.2525 + .2875) > 480) ? "28.75vw": "95%", display: "inline-block",  paddingRight: "1vw", paddingLeft: "1vw", verticalAlign: "top"}} >
                                <div className='center' style={{paddingTop: "2vh"}}>
                                    <div className='text-center' style={{display: "block"}} >
                                        <h3 className='ProjectHeader'>
                                            Battle Royale Simulator
                                        </h3>
                                        <p className='ProjectText'>
                                            <a href="https://github.com/TheUnnamedPerson/Battle-Royale-Simulator" target="_blank" rel="noopener noreferrer">
                                            <b>Battle Royale Simulator </b></a>
                                            is an older project of mine that I built using <b>UWP. </b>
                                            Based on <a href="https://brantsteele.net/hungergames/disclaimer.php" target="_blank" rel="noopener noreferrer">Brantsteele's Hunger Games Simulator, </a>
                                            I rebuilt it multiple times with increased functionality such as character properties and Gaussian normal distribution for events. Initial versions were made in <b>Unity 3D, </b> but I eventually switched to <b>UWP. </b>
                                            Relevant functionality includes <b>reading and writing to an XML database, </b> usage of various
                                            <b> statistical functions </b> to account for more probable events, and an <b>MVC</b> architecture.
                                        </p>
                                        <h4 className='langHeader'>Relevant Skills</h4>
                                        <div className='langSection' style={{display: "inline-block"}}>
                                            <img className='langImg' src={C_Sharp_Logo}/>
                                            <img className='langImg' src={DOT_NET_Logo}/>
                                            <img className='langImg' src={Xaml_Logo}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='center' style={{paddingTop: "1vh", paddingBottom: "4vh", display: "inline-block"}}>
                            <div className='center' style={{paddingRight: "1vw", paddingLeft: "1vw", verticalAlign: "top"}} >
                                <div className='center' style={{paddingTop: "2vh"}}>
                                    <div className='text-center' style={{display: "block"}} >
                                        <h3 className='ProjectHeader'>
                                            Other Projects
                                        </h3>
                                        <p className='ProjectText'>
                                            I have various other projects that I have worked on. I did <b>Levels 1-4 of Google's Foo Bar in Java, </b>
                                            I have made a
                                            <a href="https://github.com/TheUnnamedPerson/Canvas-plus-plus" target="_blank" rel="noopener noreferrer">
                                            <b> Website</b> that interacts with Canvas LMS's <b>RestfulAPI</b> that handles <b>account data </b>using<b> Django, </b></a>
                                            The website you are currently looking at is made using <b>React, </b>
                                            and I have been making games in <b>Unity 3D</b> since middle school, among many other projects. 
                                            You can find a few of my projects on my
                                            <a href="https://github.com/TheUnnamedPerson/" target="_blank" rel="noopener noreferrer">
                                            <b> Github page, </b></a>
                                            although I am still working through searching old hard drives for various more projects that I've done so that I can upload them.
                                        </p>
                                        <h4 className='langHeader'>Relevant Skills</h4>
                                        <div className='langSection' style={{display: "inline-block"}}>
                                            <img className='langImg' src={Java_Logo}/>
                                            <img className='langImg' src={Python_Logo}/>
                                            <img className='langImg' src={Django_Logo}/>
                                            <img className='langImg' src={React_Logo}/>
                                            <img className='langImg' src={Unity_Logo}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
