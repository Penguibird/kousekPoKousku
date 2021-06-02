import * as React from 'react';
import { useState, Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import TinySlider from "tiny-slider-react";
// import Loadable from "@loadable/component"

import LayerWrapper from './layer-wrapper';
import useWindowSize from '../functions/useWindowSize';

export interface Prinos {
    title: string,
    className: string,
    body: string[],
    imageUrl?: string,
    imageAlt?: string,
    image?: any,
}

const prinosy: Prinos[] = [
    {
        title: 'Sociální přínos',
        className: 'socialni',
        body: [
            `<strong>Vedení k dobrovolnictví, tvoření fyzickou prací,</strong> sdílení, propojování, stmelování generací, předávání zkušeností, prohlubování vztahu k přírodě, práci a tělu. Komunitní tvoření, společný zájem, pospolitost.`
        ],
        imageUrl: '../images/hero_placeholder.png',
        imageAlt: '',
        image: < StaticImage className="img" loading="eager" src='../images/zahrada_deda.jpg' alt='Zena cvici jogu' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Pohybový a kreativní přínos",
        className: 'pohybovy',
        body: [
            `<strong>Vědomé cvičení, workshopy na téma malování, fotografování, tvorba a vázání dekorací,</strong> běžných či příležitostných květinových vazeb, zpracování bylin v širokém pojetí,
             užití v kuchyni, postupně i zdravé vaření podle makrobiotiky i dalších trendy stylů.`,
            //     `Od vědomých cvičení po workshopy na téma malování, fotografování,
            // vázání dekorací, kytic a běžných či příležitostných květinových vazeb, zpracování bylin v širokém pojetí, užití v kuchyni atd.`
        ],
        imageUrl: '../images/zahrada_cviceni.jpg',
        imageAlt: 'Zena cvici jogu',
        image: < StaticImage className="img" loading="eager" src='../images/zahrada_cviceni.jpg' alt='Zena cvici jogu' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Edukativní přínos pro všechny věkové skupiny",
        className: 'edukativni',
        body: [
            `Zahrada dětem a mládeži v praxi poslouží pro představení zákonitostí přírody, koloběhu, ekosystému. Budou poznávat rostliny a květiny, učit se o jejich významu, účincích bylin. <strong>I tady svou roli sehraje výchova k dobrovolnictví.</strong>
        Pobyt v přírodě v rámci vzdělávání je pro Zahradu hojnosti  skvělou motivací, vždyť i <strong>Jan Ámos Komenský vyučoval své žáky v nedalekém Žákovském háji</strong> a potvrdil, že vlastní zkušenost a praxe jsou nenahraditelné. Bude mnoho vzdělávacích možností a projektů, které budou vznikat na míru, v závislosti na ročním období a koloběhu přírody.`,
            `<strong>Podobně se mohou přidat dospělí.</strong> Ti se jistě zapojí i do výměny pěstitelských zkušeností, předávání rad a tipů o zpracování plodů, bylin, ovoce, zavařování, výrobě tinktur, olejů, mastí atd.`
        ],
        image: < StaticImage className="img" loading="eager" src='../images/zahrada_kniha.jpg' alt='Zena cvici jogu' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Praktický přínos - samosběr",
        className: 'samozber',
        body: [
            `Až Zahrada nabídne svou hojnost, bude možné využít možnosti samosběru z jejich darů. <strong>Tak se uzavře cyklus dát a sklidit v rámci jednoho roku, aby mohl započít další.</strong>`,
            `Zahrada hojnosti má být místem, které bude stále vzkvétat, to znamená, že i její hospodaření je potřeba nastavit tak, aby byla soběstačná. Samosběr bude kromě workshopů vytvářet prozatím zdroje příjmů, které se znovu vloží do další sezóny.`
        ],
        image: < StaticImage className="img" loading="eager" src='../images/zahrada_byliny.jpg' alt='Zena cvici jogu' layout='constrained' placeholder="blurred" />

    }
]

const romanNumerals: readonly string[] = ["", 'I', 'II', 'III', 'IV', 'V', 'VI'] as const;

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
    const goTo = (i: number) => () => slider != null && slider.slider.goTo(i);
    const [selectedIndex, setSelectedIndex] = useState(1);

    return <Fragment>
        <div className="carousel-navigation">
            <button onClick={prev} className="slider-button prev">
                {"<"}
            </button>
            {prinosy.map((p, i) =>
                <button key={i}
                    className={`carousel-nav-button ${i} ${i + 1 == selectedIndex ? 'selected' : ''}`}
                    onClick={goTo(i)}

                >{romanNumerals[i + 1]}</button>
            )}
            <button onClick={next} className="slider-button next">
                {">"}
            </button>
        </div>
        <LayerWrapper className="zahrada-carousel zahrada-carousel-wrapper">
            <div className="slider-layer">
                <TinySlider
                    settings={{
                        autoplay: false,
                        arrowKeys: false,
                        // autoWidth: true,
                        // fixedWidth: windowSize.width,
                        autoHeight: true, //TODO Check

                        mouseDrag: true,
                        // lazyload: true,
                        nav: false,
                        controls: false,
                        items: 1,
                        rewind: false,
                        // startIndex: 0,
                        responsive: {
                            800: {
                                autoHeight: false,
                            }
                        }
                    }}
                    ref={ts => slider = ts}
                    onIndexChanged={(e) => { setSelectedIndex(e.index) }}
                >
                    {prinosy.map((p: Prinos, i: number) =>
                        <li key={i} className={`zahrada-prinos zahrada-prinos-${i} ${p.className}`} >
                            <LayerWrapper key={i} className="inner-slide">
                                {p.image}
                                <div className={`prinos ${i} ${p.title.split(' ')[0]}`}>
                                    <h3 className="title">{p.title}</h3>
                                    {p.body.map((text, i) => <p key={i} className="text" dangerouslySetInnerHTML={{ __html: text }}></p>)}
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
    </Fragment>
}

export default ZahradaCarousel;