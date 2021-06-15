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
        title: 'Přilož ruku k dílu',
        className: 'socialni',
        body: [
            ` <strong>Podporujeme dobrovolnictví,</strong> věříme, že je to způsob, jak pozitivně ovlivnit sebe i svět kolem nás.
             <strong>Víme, že sdílet radost z výsledku pomáhá.</strong> Zahrada podpoří přátelství lidí různých generací, kteří by se třeba jinde nepotkali,
             stejně tak spolupráci, prohlubování vztahu k přírodě, práci a tělu. Komunitní tvoření, společný zájem, pospolitost bude pro mnohé nové, věříme, že o to zajímavější. 
            `
        ],
        imageUrl: '../images/hero_placeholder.png',
        imageAlt: '',
        image: < StaticImage className="img" loading="eager" src='../images/deda.png' alt='Děda s vnukem sázejí na zahradě' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Pojďme tvořit a hýbat se",
        className: 'pohybovy',
        body: [
            `<strong>Vědomé cvičení, workshopy na téma malování, fotografování, tvorba a vázání dekorací,</strong> běžných či příležitostných květinových vazeb, zpracování bylin v širokém pojetí,
         užití v kuchyni, postupně i zdravé vaření podle makrobiotiky i dalších trendy stylů. To vše čeká Zahradu Hojnosti. `    ,
            `Učme se od přírody, bez ohledu na to, kolik je nám let.`
        ],
        imageUrl: '../images/zahrada_cviceni.jpg',
        imageAlt: 'Zena cvici jogu',
        image: < StaticImage className="img" loading="eager" src='../images/joga.png' alt='Žena cvičí jógu v parku' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Učme se od matky přírody",
        className: 'edukativni',
        body: [
            `Zahrada dětem a mladým v praxi poslouží pro představení zákonitostí přírody, koloběhu, ekosystému. Budou poznávat rostliny a květiny, učit se o jejich významu, účincích bylin. 
            Podle odkazu <strong>Jana Ámose Komenského, který vyučoval své žáky v nedalekém Žákovském háji, využijme moudrost přírody v reálném prostředí.</strong>
       Společně rozvineme mnoho vzdělávacích možností a projektů, které budou vznikat na míru, v závislosti na ročním období a koloběhu přírody.`,
            `<strong>Podobně se mohou přidat dospělí.</strong> Ti se jistě zapojí i do výměny pěstitelských zkušeností, předávání rad a tipů o zpracování plodů,
             bylin, ovoce, zavařování, výrobě tinktur, olejů, mastí atd.
            `
        ],
        image: < StaticImage className="img" loading="eager" src='../images/kniha.jpg' alt='Otevřená kniha na trávě' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Užijme si hojnost, kterou poskytne",
        className: 'samozber',
        body: [
            `Až Zahrada nabídne svou hojnost, budeme pořádat samosběry z jejich darů. Tak se uzavře cyklus dát a sklidit v rámci jednoho roku, aby mohl započít další.`,
            `Zahrada hojnosti má být místem, které bude stále vzkvétat, to znamená, že i její hospodaření je potřeba nastavit tak, aby byla soběstačná.
             Samosběr bude kromě workshopů vytvářet prozatím zdroje příjmů, které se znovu vloží do další sezóny. `
        ],
        image: < StaticImage className="img" loading="eager" src='../images/byliny.jpg' alt='Sesbírané byliny na stole' layout='constrained' placeholder="blurred" />

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
                        // responsive: {
                        // 800: {
                        //     autoHeight: false,
                        // }
                        // }
                    }}
                    ref={ts => slider = ts}
                    onIndexChanged={(e) => { setSelectedIndex(e.index) }}
                >
                    {prinosy.map((p: Prinos, i: number) =>
                        <li key={i} className={`zahrada-prinos zahrada-prinos-${i} ${p.className}`} >
                            <LayerWrapper key={i} className="inner-slide">
                                {p.image}
                                <div className={`prinos ${i} ${p.className}`}>
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
                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
                </button>
                <button onClick={next} className="slider-button next">
                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
                </button>
            </div>
        </LayerWrapper >
    </Fragment>
}

export default ZahradaCarousel;