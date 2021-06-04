// import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import TinySlider from "tiny-slider-react";
import { Link, useStaticQuery, graphql } from 'gatsby';
// import Loadable from "@loadable/component"

import { GatsbyImage } from 'gatsby-plugin-image';
import { Aktualita } from '../functions/useAktuality';
import useAktuality from '../functions/useAktuality';

interface Props {

}

const AktualityCarousel: React.FC<Props> = ({ }) => {
    let slider: TinySlider | null;
    // const windowSize = useWindowSize();
    // const getItemsCount = (ws: typeof windowSize) => {
    //     const _ = ws.width == undefined
    //         ? 2
    //         : Math.floor((ws.width + (ws.width > 600 ? - 180 : 0)) / 350);
    //     console.log(ws, _)

    //     return _;
    // };
    const prev = () => slider != null && slider.slider.goTo('prev');
    const next = () => slider != null && slider.slider.goTo('next');

    const aktuality = useAktuality();
    console.log(aktuality[89])
    // .sort((a: Aktualita, b: Aktualita) => a.date.getTime() - b.date.getTime());


    return <div className="aktuality-wrapper">
        <button onClick={prev} className="slider-button prev">
            {"<"}
        </button>
        <button onClick={next} className="slider-button next">
            {">"}
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
                controls: false,
                items: 1,
                responsive: {
                    640: {
                        items: 2,
                    },
                    900: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                }
                // gutter: 15,
            }}
            ref={ts => slider = ts}
        >
            {aktuality.map((akt: Aktualita, i: number) => (
                <div className="aktualita" key={i}>
                    <div className="aktualita-inner" >

                        {/* maybe change to <img /> */}
                        {/* <StaticImage loading="eager" className="img" src="../images/hero_placeholder.png" alt="" layout="constrained" /> */}
                        <GatsbyImage className="img" image={akt.image.image} alt={akt.image.imageAlt}></GatsbyImage>

                        <h3 className="title">{akt.title}</h3>
                        <p className="text" dangerouslySetInnerHTML={{ __html: akt.body }}></p>
                        {/* {akt.link && (akt.link[0] == "/" ? <Link to={akt.link} className="aktuality-link link">Více</Link>
                            : <a className="aktuality-link link" href={akt.link}>Více</a>)} */}
                    </div>
                </div>))}
        </TinySlider >
    </div >
}

export default AktualityCarousel;