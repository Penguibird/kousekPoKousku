// import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import TinySlider from "tiny-slider-react";

// import Loadable from "@loadable/component"

import { GatsbyImage } from 'gatsby-plugin-image';
import { Aktualita } from '../functions/useAktuality';
import { useState } from 'react';
import { useEffect } from 'react';

interface Props {
    aktuality: Aktualita[],
    green?: boolean,
    bigger?: boolean,
}

const AktualityCarousel: React.FC<Props> = ({ aktuality, green = false, bigger = false }) => {
    let slider: TinySlider | null;
    // const windowSize = useWindowSize();
    // const getItemsCount = (ws: typeof windowSize) => {
    //     const _ = ws.width == undefined
    //         ? 2
    //         : Math.floor((ws.width + (ws.width > 600 ? - 180 : 0)) / 350);
    //     console.log(ws, _)

    //     return _;
    // };
    const prev = () => {
        slider != null && slider.slider.goTo('prev');
        // resize();
    }
    const next = () => {
        slider != null && slider.slider.goTo('next');
        // resize();
    }

    // const aktuality = 
    // console.log(aktuality)
    // console.log(aktuality.map(a => a.date))
    // .sort((a: Aktualita, b: Aktualita) => a.date.getTime() - b.date.getTime());
    const resize = () => {
        if (slider) {
            // @ts-ignore
            slider.slider.updateSliderHeight();
            // slider.slider.updateInnerWrapperHeight();
        }
    }

    return <div className="aktuality-wrapper">
        <button onClick={prev} className="slider-button prev">
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
        </button>
        <button onClick={next} className="slider-button next">
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
        </button>
        <TinySlider

            settings={{
                autoplay: false,
                arrowKeys: false,
                // autoWidth: false,
                autoHeight: true,

                // mouseDrag: true,
                // lazyload: true,
                loop: false,
                nav: false,
                speed: 1000,
                controls: false,
                slideBy: 1,
                items: 1,
                responsive: {
                    700: {
                        autoHeight: true,
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    },
                    1700: {
                        items: 4,
                    },
                }
                // gutter: 15,
            }}
            ref={ts => slider = ts}
        >
            {aktuality.map((akt: Aktualita, i: number) => (<AktualitaComponent green={green} bigger={bigger} akt={akt} key={i} resize={resize} />))}
        </TinySlider >
    </div >
}

interface AktualitaProps {
    akt: Aktualita,
    resize: () => void,
    green: boolean,
    bigger: boolean,
}


const cutOffLength = 200;
const AktualitaComponent: React.FC<AktualitaProps> = ({ akt, resize, green, bigger }) => {

    if (akt.body.length < cutOffLength || bigger) {
        return <div className="aktualita" >
            <div className="aktualita-inner" >

                {/* maybe change to <img /> */}
                {/* <StaticImage loading="eager" className="img" src="../images/hero_placeholder.png" alt="" layout="constrained" /> */}
                <GatsbyImage objectFit='contain' objectPosition='top' className="img" image={akt.image.image} alt={akt.image.imageAlt}></GatsbyImage>

                <h3 className="title">{akt.title}</h3>
                <p className="text" dangerouslySetInnerHTML={{ __html: akt.body }}></p>
                {/* {akt.link && (akt.link[0] == "/" ? <Link to={akt.link} className="aktuality-link link">Více</Link>
        : <a className="aktuality-link link" href={akt.link}>Více</a>)} */}
            </div>
        </div>
    }

    const newline = `
    `;
    const longText = akt.body;
    const paragraphArr = akt.body.split(/\r?\n/);
    const firstParagraph = paragraphArr[0] + newline + paragraphArr[1];


    const trimEnd = (string: string) => {
        if (/\r?\n/.test(string[string.length - 1])) {
            string = string.slice(0, string.length - 2);
        }
        return string;
    }

    const shortText = firstParagraph.length > cutOffLength
        ? firstParagraph.slice(0, cutOffLength) + '...'
        : firstParagraph
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        resize();
    }, [expanded])

    return <div className="aktualita" >
        <div className="aktualita-inner" >

            {/* maybe change to <img /> */}
            {/* <StaticImage loading="eager" className="img" src="../images/hero_placeholder.png" alt="" layout="constrained" /> */}
            <GatsbyImage objectFit='contain' objectPosition='top' className="img" image={akt.image.image} alt={akt.image.imageAlt}></GatsbyImage>

            <h3 className="title">{akt.title}</h3>
            <p className="text" dangerouslySetInnerHTML={{ __html: expanded ? longText : shortText }}></p>
            <button className={`button vice-button ${green ? 'green' : ''}`} onClick={() => {
                setExpanded(!expanded);
            }}>{expanded ? 'Méně' : 'Více'}</button>
            {/* {akt.link && (akt.link[0] == "/" ? <Link to={akt.link} className="aktuality-link link">Více</Link>
        : <a className="aktuality-link link" href={akt.link}>Více</a>)} */}
        </div>
    </div>
}

export default AktualityCarousel;
export {AktualitaComponent}