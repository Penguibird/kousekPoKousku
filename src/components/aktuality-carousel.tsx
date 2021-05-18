import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import TinySlider from "tiny-slider-react";
import { Link } from 'gatsby';

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
                mouseDrag: true,
                lazyload: true,
                nav: false,
                controls: false,
                items: 3,
                // gutter: 15,
            }}
            ref={ts => slider = ts}
        >
            {aktuality.map((akt: Aktualita, i: number) => (
                <div className="aktualita" key={i}>
                    <StaticImage className="img" src="../images/hero_placeholder.png" alt="" layout="constrained" />
                    <h3 className="title">{akt.title}</h3>
                    <p>{akt.body}</p>
                    <Link className="aktuality-link link" to="/">Více</Link>
                </div>))}
        </TinySlider >
    </div >
}

export default AktualityCarousel;