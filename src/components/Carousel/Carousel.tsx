import React from 'react'
import { useState } from "react";
import './Carousel.css'
import '../../general.css'
import '../../CssCustom'
import { link } from "fs";
import { relative } from 'path';
import { CssCustom } from '../../CssCustom';

import LeftArrow from '../../assets/svg/arrow-left.svg'
import RightArrow from '../../assets/svg/arrow-right.svg'

interface CarouselProps {
    slides: string[];
    countToShow: number;
    links?: string[];
    width: string;
    maxWidth?: string;
    height: string;
    maxHeight?: string;
    buttonDiameter?: string;
    spacing?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    
}

function mod (x: number, n: number): number {
    "use strict";
    return ((x % n) + n) % n;
};


const Carousel = ({slides, countToShow, links, width, maxWidth, height, maxHeight, buttonDiameter, spacing, paddingTop, paddingBottom, paddingLeft, paddingRight}: CarouselProps) => {

    const [currentIndex, SetCurrentIndex] = useState(0);
    const [previousIndex, SetPreviousIndex] = useState(0);

    class SlideClass {
        slideSrc: string;
        height: string;
        width: string;
        position: number;
        link: string;
        constructor(_src: string = "", _h: string = "", _w: string = "", _p: number = 0, _l: string = "") {
            this.slideSrc = _src;
            this.height = _h;
            this.width = _w;
            this.position = _p;
            this.link = _l;
        }

    }

    if (maxWidth == null || maxWidth == undefined) maxWidth = width;
    if (maxHeight == null || maxHeight == undefined) maxHeight = height;

    width = "min( " + width + ", " + maxWidth + " )"
    height = "min( " + height + ", " + maxHeight + " )"

    var Slides: SlideClass[] = new Array(slides.length * 2);
    //var Slides: SlideClass[] = new Array(slides.length);
    var n = 0;

    const SlideWidth: string = "calc( calc( calc(" + width + " - " + spacing + " - " + spacing + " - " + buttonDiameter + " - " + buttonDiameter + " )" + " / " + countToShow.toString() + " ) - " + spacing + " )"
    //const SlideWidth: string = "6vw"
    
    
    for (let i = 0; i < slides.length; i++)
    {
        Slides[i] = new SlideClass();
        Slides[i].slideSrc = slides[i];
        Slides[i].height = SlideWidth;
        Slides[i].width = SlideWidth;
        Slides[i].position = i;
        if ((links != null && links != undefined) && i < links!.length) Slides[i].link = links![i];
    }
    for (let i = slides.length; i < slides.length * 2; i++)
    {
        Slides[i] = new SlideClass();
        Slides[i].slideSrc = slides[i - slides.length];
        Slides[i].height = SlideWidth;
        Slides[i].width = SlideWidth;
        Slides[i].position = i;
        if ((links != null && links != undefined) && (i - slides.length) < links!.length) Slides[i].link = links![i - slides.length];
    }

    const Slide = () => 
    {
        const CSS_Style = (slide: SlideClass) =>
        {
            return {
                width: SlideWidth, 
                height: SlideWidth, 
                paddingRight: spacing,
                position: "absolute", 
                top: "calc( calc( " + height + " - " + slide.width + " ) / 2)",
                "--old-Pos": "calc( calc( " + slide.width + " + " + spacing + " ) * " + (mod(slide.position + previousIndex + 1, Slides.length) - 1 ).toString() + " )" , 
                "--new-Pos": "calc( calc( " + slide.width + " + " + spacing + " ) * " + (mod(slide.position + currentIndex + 1, Slides.length) - 1).toString() + " )",
                "--old-Opacity": (mod((slide.position + previousIndex), Slides.length) + 1 > countToShow) ? "0%" : "100%",
                "--new-Opacity": ((mod((slide.position + currentIndex), Slides.length)) + 1 > countToShow) ? "0%" : "100%",
                "--old-Display": (mod((slide.position + previousIndex), Slides.length) + 1 > countToShow) ? "none" : "inline-block",
                "--new-Display": ((mod((slide.position + currentIndex), Slides.length)) + 1 > countToShow) ? "none" : "inline-block",
                "--inner-Display": (((mod((slide.position + currentIndex), Slides.length)) + 1 > countToShow) || (mod((slide.position + previousIndex), Slides.length) + 1 > countToShow)) ? "none" : "inline-block",
            } as CssCustom
        }
        return <>
            {
                Slides.map(slide => (
                    <a className={ (((slide.position + currentIndex) % Slides.length) > countToShow) ? "transitionLeft invisible" : "transitionLeft"} href={slide.link} target={(slide.link == "") ? "" : "_blank"} rel="noopener noreferrer"
                    style={CSS_Style(slide)} >
                        <img src={slide.slideSrc} style={{width: SlideWidth, height: SlideWidth}}/>
                    </a>)
                )
            }
        </>
    }

    function updateIndex (_index: number)
    {   
        SetPreviousIndex(currentIndex);
        //if (_index < 0) SetCurrentIndex(_index + Slides.length);
        //else if (_index > Slides.length) SetCurrentIndex(_index - Slides.length);
        //else SetCurrentIndex(_index);
        SetCurrentIndex(_index);
    }

    return <div className="center" style={{height: height, paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight}}>
                <button className="arrowButton" style={{width: buttonDiameter, height: buttonDiameter}} onClick={() => updateIndex(currentIndex + 1)}>
                    <img src={LeftArrow} style={{width: buttonDiameter, height: buttonDiameter}} />
                </button>
                <div className="" style={{ paddingLeft: spacing, verticalAlign: "middle" , position: "relative", display: "inline-block", height: height, width: "calc( " + width + " - " + spacing + " - " + spacing + " - " + buttonDiameter + " - " + buttonDiameter + " )" }}>
                    <Slide/>
                </div>
                <button className="arrowButton" style={{width: buttonDiameter, height: buttonDiameter }} onClick={() => updateIndex(currentIndex - 1)}>
                    <img src={RightArrow} style={{width: buttonDiameter, height: buttonDiameter}} />
                </button>
            </div>
}

export default Carousel