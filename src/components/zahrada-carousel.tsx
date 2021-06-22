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
        title: 'Společné tvoření',
        className: 'socialni',
        body: [
            ` Víme, že sdílet radost z výsledku, pomáhá. Budování a péče o Zahradu podpoří přátelství lidí různých generací, kteří by se pravděpodobně jinde nepotkali,
             stejně tak spolupráci, prohlubování vztahu k přírodě, práci a tělu. Komunitní tvoření, společný zájem, pospolitost bude pro mnohé nové, věříme, že o to zajímavější.
            `
        ],
        imageUrl: '../images/hero_placeholder.png',
        imageAlt: '',
        image: < StaticImage className="img" loading="eager" src='../images/deda.png' alt='Děda s vnukem sázejí na Zahradě' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Pohyb a kreativita",
        className: 'pohybovy',
        body: [
            `Vědomé cvičení, workshopy na téma malování, fotografování, tvorba a vázání dekorací, běžných či příležitostných květinových vazeb, zpracování bylin v širokém pojetí,
             užití v kuchyni, postupně i zdravé vaření. To vše čeká Zahradu Hojnosti. `,
            `Učme se od přírody, bez ohledu na to, kolik je nám let.`
        ],
        imageUrl: '../images/zahrada_cviceni.jpg',
        imageAlt: 'Zena cvici jogu',
        image: < StaticImage className="img" loading="eager" src='../images/joga.png' alt='Žena cvičí jógu v parku' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Moudrost přírody",
        className: 'edukativni',
        body: [
            `Zahrada poslouží dětem a mladým v praxi pochopit zákonitostí přírody, koloběhu, ekosystému. Budou poznávat rostliny a květiny, učit se o jejich významu, účincích bylin.
             Podle odkazu Jana Amose Komenského, který vyučoval své žáky v nedalekém Žákovském háji, využíváme moudrost přírody v reálném prostředí. 
            Společně rozvineme mnoho vzdělávacích možností a projektů, které budou vznikat na míru, v závislosti na ročním období a koloběhu přírody.`,
            `Podobně se mohou přidat dospělí. Ti se jistě zapojí i do výměny pěstitelských zkušeností,
             předávání rad a tipů o zpracování plodů, bylin, ovoce, zavařování, výrobě tinktur, olejů, mastí a dalších zázraků.`
        ],
        image: < StaticImage className="img" loading="eager" src='../images/kniha.jpg' alt='Otevřená kniha na trávě' layout='constrained' placeholder="blurred" />

    },
    {
        title: "Hojnost",
        className: 'samozber',
        body: [
            `Až Zahrada nabídne svou hojnost, budeme pořádat samosběry z jejich darů. Tak se uzavře cyklus dát a sklidit v rámci jednoho roku, aby mohl započít další.
             Její hospodaření nastavujeme tak, aby byla soběstačná. 
            Samosběr bude spolu s workshopy vytvářet zdroje příjmů, které se znovu vloží do další sezóny. Zahrada hojnosti je místem, které vzkvétá. `
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
                    className={`${true ? 'carousel-nav-button ' : '' }${i} ${i + 1 == selectedIndex ? 'selected' : ''}`}
                    onClick={goTo(i)}

                ><Leaf filled={i + 1 == selectedIndex} /></button>
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

interface LeafProps {
    filled?: boolean
}
const Leaf: React.FC<LeafProps> = ({filled}) => (
    filled 
    ? <svg viewBox="0 0 412 412" width="412" height="412" viewBox="0 0 412 412" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="206" cy="206" r="201" fill="#118A07" stroke="#118A07" strokeWidth="10"/>
    <path d="M278.076 71.0947C278.076 71.0947 252.083 96.3068 223.971 106.471C15.7961 181.751 103.592 328.449 106.457 328.933C106.457 328.933 118.13 308.609 133.899 297.017C233.963 223.473 254.301 138.821 254.301 138.821C254.301 138.821 231.846 240.685 142.825 304.067C123.163 318.059 110.53 344.934 104.894 379.366C104.894 379.366 115.8 387.01 121.793 385.485C124.131 370.238 131.368 349.94 139.629 336.898C264.047 351.707 304.797 251.477 310.12 216.528C322.684 133.985 278.076 71.0947 278.076 71.0947Z" fill="white"/>
    <path d="M278.076 71.0947L282.154 68.202L278.78 63.4457L274.594 67.5057L278.076 71.0947ZM223.971 106.471L222.271 101.769L222.271 101.769L223.971 106.471ZM106.457 328.933L105.624 333.863L109.058 334.442L110.792 331.423L106.457 328.933ZM133.899 297.017L130.938 292.988L130.937 292.988L133.899 297.017ZM254.301 138.821L259.183 139.897C259.774 137.218 258.096 134.564 255.423 133.948C252.75 133.333 250.08 134.986 249.439 137.653L254.301 138.821ZM142.825 304.067L145.724 308.141L145.725 308.14L142.825 304.067ZM104.894 379.366L99.9595 378.559L99.4522 381.658L102.024 383.461L104.894 379.366ZM121.793 385.485L123.026 390.331L126.234 389.515L126.736 386.243L121.793 385.485ZM139.629 336.898L140.22 331.933L137.091 331.56L135.405 334.222L139.629 336.898ZM310.12 216.528L315.063 217.281L315.063 217.28L310.12 216.528ZM278.076 71.0947C274.594 67.5057 274.595 67.5052 274.595 67.5048C274.595 67.5048 274.596 67.5045 274.596 67.5045C274.596 67.5045 274.595 67.5049 274.594 67.5057C274.593 67.5072 274.59 67.5102 274.585 67.5147C274.576 67.5237 274.56 67.5388 274.538 67.5596C274.495 67.6012 274.427 67.6662 274.335 67.7532C274.152 67.9272 273.874 68.1893 273.506 68.5299C272.771 69.2111 271.679 70.2051 270.278 71.4339C267.474 73.8933 263.441 77.2833 258.549 80.9837C248.704 88.4304 235.642 96.9346 222.271 101.769L225.671 111.174C240.412 105.844 254.402 96.6594 264.582 88.959C269.702 85.0857 273.924 81.5375 276.872 78.952C278.347 77.6583 279.506 76.6033 280.302 75.866C280.7 75.4973 281.007 75.2078 281.218 75.0075C281.324 74.9074 281.405 74.8295 281.462 74.7751C281.49 74.748 281.512 74.7266 281.528 74.7114C281.536 74.7037 281.542 74.6976 281.547 74.693C281.55 74.6907 281.552 74.6888 281.553 74.6872C281.554 74.6864 281.555 74.6856 281.555 74.6852C281.556 74.6844 281.557 74.6838 278.076 71.0947ZM222.271 101.769C169.651 120.798 135.297 144.496 113.597 169.656C91.8531 194.866 83.0262 221.3 81.0902 245.349C79.1606 269.319 84.0817 290.783 89.629 306.244C92.4064 313.985 95.361 320.278 97.7447 324.696C98.9332 326.9 100.003 328.68 100.863 329.964C101.285 330.594 101.706 331.179 102.102 331.657C102.291 331.885 102.556 332.188 102.873 332.481C103.03 332.625 103.284 332.846 103.617 333.066C103.871 333.233 104.588 333.688 105.624 333.863L107.289 324.002C108.28 324.17 108.943 324.599 109.131 324.723C109.399 324.901 109.578 325.06 109.65 325.127C109.798 325.263 109.854 325.34 109.8 325.274C109.709 325.164 109.499 324.889 109.172 324.4C108.532 323.445 107.625 321.95 106.546 319.949C104.393 315.958 101.645 310.123 99.0415 302.867C93.8269 288.333 89.2729 268.327 91.058 246.152C92.8368 224.056 100.915 199.671 121.169 176.187C141.466 152.654 174.204 129.785 225.671 111.173L222.271 101.769ZM106.457 328.933C110.792 331.423 110.792 331.424 110.792 331.424C110.792 331.424 110.791 331.425 110.791 331.425C110.791 331.425 110.791 331.425 110.791 331.425C110.791 331.424 110.792 331.423 110.794 331.42C110.798 331.414 110.804 331.403 110.813 331.388C110.831 331.357 110.86 331.307 110.9 331.239C110.979 331.104 111.102 330.897 111.267 330.625C111.595 330.082 112.089 329.281 112.733 328.279C114.023 326.272 115.907 323.47 118.267 320.319C123.03 313.957 129.548 306.421 136.861 301.045L130.937 292.988C122.481 299.205 115.278 307.627 110.262 314.325C107.733 317.703 105.713 320.707 104.321 322.873C103.624 323.957 103.082 324.835 102.711 325.448C102.526 325.755 102.382 325.996 102.283 326.164C102.234 326.248 102.195 326.314 102.168 326.36C102.155 326.384 102.144 326.402 102.136 326.416C102.132 326.423 102.129 326.428 102.126 326.433C102.125 326.435 102.124 326.437 102.123 326.438C102.123 326.439 102.122 326.44 102.122 326.441C102.121 326.441 102.121 326.442 106.457 328.933ZM136.86 301.046C187.515 263.816 218.057 223.721 235.95 192.847C244.894 177.414 250.675 164.29 254.23 154.981C256.008 150.326 257.23 146.625 258.013 144.064C258.404 142.783 258.686 141.788 258.873 141.101C258.966 140.757 259.036 140.491 259.083 140.305C259.107 140.212 259.125 140.138 259.139 140.086C259.145 140.059 259.15 140.038 259.154 140.022C259.156 140.014 259.158 140.007 259.159 140.001C259.16 139.999 259.161 139.996 259.161 139.994C259.162 139.991 259.162 139.989 254.301 138.821C249.439 137.653 249.439 137.651 249.44 137.649C249.44 137.649 249.44 137.648 249.44 137.648C249.44 137.648 249.44 137.649 249.439 137.651C249.438 137.655 249.436 137.665 249.432 137.679C249.425 137.708 249.413 137.758 249.395 137.827C249.36 137.966 249.303 138.184 249.223 138.478C249.063 139.067 248.81 139.962 248.45 141.14C247.73 143.496 246.581 146.982 244.888 151.413C241.504 160.275 235.946 172.91 227.298 187.833C210.006 217.671 180.347 256.674 130.938 292.988L136.86 301.046ZM254.301 138.821C249.418 137.745 249.418 137.743 249.418 137.742C249.418 137.743 249.418 137.742 249.418 137.742C249.418 137.743 249.418 137.746 249.417 137.75C249.415 137.757 249.412 137.771 249.407 137.792C249.398 137.832 249.383 137.896 249.363 137.984C249.322 138.16 249.258 138.431 249.17 138.793C248.993 139.516 248.719 140.601 248.336 142.015C247.57 144.841 246.372 148.979 244.655 154.153C241.221 164.506 235.721 178.991 227.476 195.434C210.973 228.349 183.572 268.918 139.925 299.994L145.725 308.14C191.099 275.834 219.436 233.78 236.415 199.917C244.912 182.971 250.589 168.029 254.147 157.302C255.927 151.936 257.178 147.62 257.988 144.629C258.393 143.133 258.688 141.968 258.884 141.168C258.981 140.768 259.054 140.459 259.104 140.246C259.129 140.139 259.148 140.057 259.161 139.998C259.167 139.969 259.172 139.946 259.176 139.929C259.178 139.921 259.18 139.914 259.181 139.909C259.181 139.906 259.182 139.903 259.182 139.902C259.183 139.899 259.183 139.897 254.301 138.821ZM139.926 299.993C118.67 315.119 105.683 343.586 99.9595 378.559L109.828 380.174C115.376 346.281 127.656 320.998 145.724 308.141L139.926 299.993ZM104.894 379.366C102.024 383.461 102.025 383.461 102.026 383.462C102.026 383.462 102.027 383.463 102.028 383.463C102.029 383.464 102.03 383.465 102.032 383.466C102.035 383.468 102.039 383.471 102.044 383.474C102.053 383.481 102.065 383.489 102.079 383.499C102.108 383.519 102.147 383.546 102.196 383.579C102.294 383.646 102.432 383.74 102.606 383.856C102.954 384.087 103.447 384.408 104.055 384.785C105.263 385.535 106.957 386.528 108.878 387.479C110.779 388.419 113.027 389.382 115.325 390C117.53 390.594 120.315 391.021 123.026 390.331L120.561 380.639C120.275 380.712 119.449 380.755 117.924 380.344C116.492 379.959 114.89 379.296 113.314 378.516C111.76 377.747 110.353 376.924 109.328 376.289C108.82 375.973 108.414 375.709 108.142 375.528C108.006 375.438 107.904 375.368 107.84 375.324C107.807 375.302 107.785 375.286 107.772 375.277C107.765 375.273 107.761 375.27 107.76 375.269C107.759 375.269 107.759 375.269 107.76 375.269C107.76 375.269 107.761 375.27 107.761 375.27C107.761 375.27 107.762 375.271 107.762 375.271C107.763 375.271 107.764 375.272 104.894 379.366ZM126.736 386.243C128.978 371.613 135.994 351.98 143.853 339.573L135.405 334.222C126.741 347.9 119.283 368.862 116.851 384.728L126.736 386.243ZM139.038 341.863C202.863 349.46 245.695 327.498 273.146 298.83C300.376 270.395 312.273 235.599 315.063 217.281L305.177 215.775C302.644 232.406 291.505 265.2 265.924 291.914C240.565 318.397 200.813 339.145 140.22 331.933L139.038 341.863ZM315.063 217.28C321.507 174.944 313.282 137.712 303.502 111.131C298.608 97.8309 293.31 87.156 289.222 79.7857C287.177 76.099 285.432 73.2344 284.188 71.2765C283.566 70.2975 283.068 69.5448 282.721 69.0289C282.547 68.771 282.411 68.5722 282.316 68.434C282.268 68.3648 282.23 68.3108 282.203 68.2721C282.19 68.2528 282.179 68.2372 282.17 68.2255C282.166 68.2197 282.163 68.2148 282.16 68.2109C282.159 68.2089 282.157 68.2067 282.156 68.2057C282.155 68.2037 282.154 68.202 278.076 71.0947C273.997 73.9875 273.996 73.9862 273.996 73.9852C273.996 73.9852 273.995 73.9844 273.995 73.9844C273.995 73.9843 273.996 73.9851 273.997 73.9869C273.999 73.9905 274.005 73.998 274.013 74.0091C274.028 74.0315 274.054 74.069 274.091 74.1213C274.163 74.2261 274.276 74.3906 274.426 74.6134C274.726 75.0591 275.175 75.7381 275.748 76.6399C276.894 78.4438 278.536 81.1374 280.477 84.6363C284.36 91.6373 289.429 101.844 294.117 114.584C303.5 140.084 311.297 175.568 305.177 215.775L315.063 217.28Z" fill="#118A07"/>
    </svg>
    : <svg viewBox="0 0 412 412" width="412" height="412" viewBox="0 0 412 412" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M278.075 71.0947C278.075 71.0947 252.083 96.3068 223.971 106.471C15.7959 181.751 105.636 332.017 108.5 332.5C108.5 332.5 118.13 308.609 133.899 297.017C233.963 223.473 254.3 138.821 254.3 138.821C254.3 138.821 231.846 240.685 142.824 304.067C123.163 318.059 110.135 342.567 104.5 377C104.5 377 116.007 384.525 122 383C124.337 367.753 131.368 349.94 139.628 336.898C264.047 351.707 304.796 251.477 310.12 216.528C322.684 133.985 278.075 71.0947 278.075 71.0947Z" stroke="#118A07" strokeWidth="14" strokeLinejoin="round"/>
    <circle cx="206" cy="206" r="201" stroke="#118A07" strokeWidth="10"/>
    </svg>   
)

export default ZahradaCarousel;