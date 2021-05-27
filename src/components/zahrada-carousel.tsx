import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import TinySlider from "tiny-slider-react";
import { Link } from 'gatsby';
import LayerWrapper from './layer-wrapper';
// import Loadable from "@loadable/component"
import useWindowSize from '../functions/useWindowSize';
export interface Prinos {
    title: string,
    body: string[],
    imageUrl?: string,
    imageAlt?: string,
}

const prinosy: Prinos[] = [
    {
        title: 'Sociální přínos',
        body: ["Vedení k dobrovolnictví, tvoření fyzickou prací, sdílení, propojování, stmelování generací, předávání zkušeností, prohlubování vztahu k přírodě, práci a tělu. Komunitní tvoření, společný zájem, pospolitost."],
        imageUrl: '../images/hero_placeholder.png',
        imageAlt: '',
    },
    {
        title: "Pohybový a kreativní přínos",
        body: [`Od vědomých cvičení po workshopy na téma malování, fotografování,
        vázání dekorací, kytic a běžných či příležitostných květinových vazeb, zpracování bylin v širokém pojetí, užití v kuchyni atd.`]
    },
    {
        title: "Edukativní přínos pro všechny věkové skupiny",
        body: [
            `Zahrada dětem a mládeži v praxi poslouží pro představení zákonitostí přírody, koloběhu, ekosystému. Budou poznávat rostliny a květiny, učit se o jejich významu, účincích bylin. I tady svou roli sehraje výchova k dobrovolnictví.
        Pobyt v přírodě v rámci vzdělávání je pro Zahradu hojnosti  skvělou motivací, vždyť i Jan Ámos Komenský vyučoval své žáky v nedalekém Žákovském háji a potvrdil, že vlastní zkušenost a praxe jsou nenahraditelné. Bude mnoho vzdělávacích možností a projektů, které budou vznikat na míru, v závislosti na ročním období a koloběhu přírody.`,
            `Podobně se mohou přidat dospělí. Ti se jistě zapojí i do výměny pěstitelských zkušeností, předávání rad a tipů o zpracování plodů, bylin, ovoce, zavařování, výrobě tinktur, olejů, mastí atd.`
        ]
    },
    {
        title: "Praktický přínos - samozběr",
        body: [
            `Až Zahrada nabídne svou hojnost, bude možné využít možnosti samosběru z jejich darů. Tak se uzavře cyklus dát a sklidit v rámci jednoho roku, aby mohl započít další.`
        ]
    }
]

interface Props {

}


const ZahradaCarousel: React.FC<Props> = ({ }) => {
    let slider: TinySlider | null;
    const windowSize = useWindowSize();
    // const getItemsCount = (ws: typeof windowSize) => {
    //     const _ = ws.width == undefined
    //         ? 2
    //         : Math.floor((ws.width + (ws.width > 600 ? - 180 : 0)) / 350);
    //     console.log(ws, _)

    //     return _;
    // };

    const prev = () => slider != null && slider.slider.goTo('prev');
    const next = () => slider != null && slider.slider.goTo('next');

    return <LayerWrapper className="zahrada-carousel zahrada-carousel-wrapper">

        <div className="slider-layer">
            <TinySlider
                settings={{
                    autoplay: false,
                    arrowKeys: false,
                    // autoWidth: true,
                    // fixedWidth: windowSize.width,
                    autoHeight: false,
                    mouseDrag: true,
                    lazyload: true,
                    nav: false,
                    controls: false,
                    items: 1,
                    rewind: false,
                    // startIndex: 0,
                }}
                ref={ts => slider = ts}
            >
                {prinosy.map((p: Prinos, i: number) =>
                    <li key={i}>
                        <LayerWrapper key={i} className="inner-slide">
                            <StaticImage loading="eager" src={'../images/hero_placeholder.png'} alt={p.imageAlt ?? 'Nahradni pozadi'} layout='constrained' />
                            <div className="prinos">
                                <h3 className="title">{p.title}</h3>
                                {p.body.map((text, i) => <p key={i} className="text">{text}</p>)}
                            </div>
                        </LayerWrapper>
                    </li>
                )}
            </TinySlider >
        </div>
        <div className="button-layer">
            <button onClick={prev} className="slider-button prev">
                {"<"}
            </button>
            <button onClick={next} className="slider-button next">
                {">"}
            </button>
        </div>
    </LayerWrapper >
}

export default ZahradaCarousel;