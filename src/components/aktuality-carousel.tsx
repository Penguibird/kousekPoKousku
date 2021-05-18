import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import TinySlider from "tiny-slider-react";
import { Link } from 'gatsby';
// import Loadable from "@loadable/component"
import useWindowSize from './../functions/useWindowSize';
export interface Aktualita {
    title: string,
    body: string,
}

interface Props {

}

const aktuality: Aktualita[] = [
    {
        title: "Lorem ipsum",
        body: "Natus repellat provident ducimus blanditiis dolor quos. Labore rerum ut error. Hic eos eum hic voluptas eos autem sed. In dolores provident qui ut porro dolorem at iste unde."
    },
    {
        title: "Lorem ipsum",
        body: "Natus repellat provident ducimus blanditiis dolor quos. Labore rerum ut error. Hic eos eum hic voluptas eos autem sed. In dolores provident qui ut porro dolorem at iste unde."
    },
    {
        title: "Lorem ipsum",
        body: "Natus repellat provident ducimus blanditiis dolor quos. Labore rerum ut error. Hic eos eum hic voluptas eos autem sed. In dolores provident qui ut porro dolorem at iste unde."
    },
    {
        title: "Lorem ipsum",
        body: "Natus repellat provident ducimus blanditiis dolor quos. Labore rerum ut error. Hic eos eum hic voluptas eos autem sed. In dolores provident qui ut porro dolorem at iste unde."
    },
    {
        title: "Lorem ipsum",
        body: "Natus repellat provident ducimus blanditiis dolor quos. Labore rerum ut error. Hic eos eum hic voluptas eos autem sed. In dolores provident qui ut porro dolorem at iste unde."
    },
    {
        title: "Lorem ipsum",
        body: "Natus repellat provident ducimus blanditiis dolor quos. Labore rerum ut error. Hic eos eum hic voluptas eos autem sed. In dolores provident qui ut porro dolorem at iste unde."
    },
]

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
                lazyload: true,
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
                        <StaticImage loading="eager" className="img" src="../images/hero_placeholder.png" alt="" layout="constrained" />

                        <h3 className="title">{akt.title}</h3>
                        <p>{akt.body}</p>
                        <Link className="aktuality-link link" to="/">Více</Link>
                    </div>
                </div>))}
        </TinySlider >
    </div >
}

export default AktualityCarousel;