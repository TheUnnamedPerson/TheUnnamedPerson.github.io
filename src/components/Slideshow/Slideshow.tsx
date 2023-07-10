import { useState } from "react";
import './Slideshow.css'
import { link } from "fs";

interface SlideshowProps {
    slides: string[];
    width: string;
    height: string;
    links?: string[];
}

const Slideshow = ({slides, width, height, links}: SlideshowProps) => {

    const [currentIndex, SetCurrentIndex] = useState(0);

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

    var Slides: SlideClass[] = new Array(slides.length);
    var n = 0;
    
    for (let i = 0; i < Slides.length; i++)
    {
        Slides[i] = new SlideClass();
        Slides[i].slideSrc = slides[i];
        Slides[i].height = height;
        Slides[i].width = width;
        if ((links != null && links != undefined) && i < links!.length) Slides[i].link = links![i];
    }

    const Slide = () =>
    {
        return <>
            {
                Slides.map(slide => 
                    <a href={slide.link} target={(slide.link == "") ? "" : "_blank"} rel="noopener noreferrer">
                        <img src={slide.slideSrc} style={{width: slide.width, height: slide.height}}/>
                    </a>
                )
            }
        </>
    }

    return <div style={{height: height}}>
        <Slide/>
    </div>
}

export default Slideshow