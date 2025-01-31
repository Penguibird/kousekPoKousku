import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import LayerWrapper from './../components/layer-wrapper';
import { StaticImage } from 'gatsby-plugin-image';
import Loadable from '@loadable/component';

// @ts-ignore


// @ts-ignore
import heroVideo from "../images/videos/zahrada_final.mp4"
// @ts-ignore
import heroVideo1366 from "../images/videos/zahrada_final_1366.mp4"
// @ts-ignore
import heroVideo768 from "../images/videos/zahrada_final_768.mp4"
// @ts-ignore
import heroVideo360 from "../images/videos/zahrada_final_360.mp4"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

// import ZahradaCarousel from '../components/zahrada-carousel'
const ZahradaCarousel = Loadable(() => import('../components/zahrada-carousel'))
const ZahradaGalerie = Loadable(() => import('../components/zahrada-galerie'))

// import AktualityCarousel from "../components/aktuality-carousel";
const AktualityCarousel = Loadable(() => import("../components/aktuality-carousel"))

import SmallMap from '../components/small-zahrada-map';
import useAktualityZahrada from '../functions/useAktualityZahrada'
import Counter from './../components/numberCounter';
import type Aktualita from '../types/aktualita'
import { Link } from 'gatsby';
import JurtaSection from '../components/section-jurta';
// import JurtaSection from './../components/section-jurta';
interface ZahradaPageProps {


};


const ZahradaPage: React.FC<ZahradaPageProps> = ({ }): JSX.Element => {
    const breakpoints = useBreakpoint();
    const placeholderImage = <StaticImage className='img' src='../images/zahrada_hero_placeholder.png' alt='Foto Zahrady z dronu' layout='fullWidth' placeholder='blurred' />
    const videoProps = {
        className: "hero-video",
        width: "1920",
        height: "1080",
        muted: true,
        playsInline: true,
        autoPlay: true,
        loop: true,
        preload: "auto",

    }
    // React.useLayoutEffect(() => {
    //     const video = document.querySelector('.hero-video');
    //     if (video) video.addEventListener('loadeddata', () => {
    //         const target = document.getElementById('placeholderImage');
    //         // console.log(target)
    //         if (target) target.style.display = 'none';
    //     }, false)
    // }, [breakpoints])

    const aktuality: Aktualita[] = useAktualityZahrada();
    // console.log(images)




    return <Layout title="Zahrada Hojnosti | Nadační fond Kousek po Kousku" headerProps={{ color: 'green', logo: 'zahrada' }}>
        <main className="zahrada">
            <LayerWrapper className="hero">

                {/* <StaticImage className='img' src="../images/hero_placeholder.png" alt='Fotka Zahrady' layout='constrained' placeholder='blurred' />
                <h1 className="title text-center">Zahrada Hojnosti</h1> */}
                {breakpoints.noVideo
                    ? placeholderImage
                    : breakpoints.xs
                        ? <video {...videoProps}>
                            <source src={heroVideo360} type="video/mp4" />
                        </video>

                        : breakpoints.sm
                            ? <video {...videoProps}>
                                <source src={heroVideo768} type="video/mp4" />
                            </video>
                            : breakpoints.md
                                ? <video {...videoProps}>
                                    <source src={heroVideo1366} type="video/mp4" />
                                </video>
                                : breakpoints ? <video {...videoProps}>
                                    <source src={heroVideo} type="video/mp4" />
                                </video>
                                    : placeholderImage
                }
                {/* <div id="placeholderImage">
                    <StaticImage className='img' src='../images/zahrada_hero_placeholder.png' alt='Foto Zahrady z dronu' layout='fullWidth' placeholder='blurred' />
                </div> */}
                {/* <div className="overlay"></div> */}
            </LayerWrapper>


            {/* Unused claim */}
            {/* <p className="text">Jedinečný projekt pro podporu soběstačnosti, s jedinečným modelem hospodaření</p> */}

            <section className="section-uvod" style={{ overflow: 'auto' }}>

                <StaticImage className='img' src="../images/jahoda_right.png" alt='Ruka drzi rostlinku' layout='constrained' placeholder='blurred' />
                <Link className="link-back" to="/"><span className="text">Zpět na hlavní stránku NF <span className="highlight green">Kousek po Kousku</span></span></Link>
                {/* <section className="section section-text co-nabizi"> */}
                <p className="montserrat-subtitle " >
                    {/* <strong>Zahrada Hojnosti na pozemku Nadačního fondu Kousek po kousku je naprosto unikátní projekt,</strong> který&nbsp;je&nbsp;připraven na&nbsp;vstup dalších dárců a&nbsp;filantropů. */}
                    Budujeme přírodní zahradu - Zahradu Hojnosti. Zahradu pro <strong>tělo i duši.</strong> Přidáte se? <strong>Vytvoříme společně krásné, inspirativní místo pro psychickou i fyzickou relaxaci, které bude žít pro další a další generace.</strong>
                </p>
                <p className="montserrat-subtitle">
                    Vítáme všechny, kteří v ní najdou svůj kousek pro sebe. <strong>Kousek pohody, odpočinku, krásy, pohybu, přátelství...</strong>
                </p>
                <p className="montserrat-subtitle">
                    Zahrada poskytne <strong>prostor pro hledání a hlubší poznání sebe sama,</strong> pro tvořivou práci, setkávání, pohyb a poznávání nového prostřednictvím workshopů.
                </p>
                {/* <p className="text">
                        Na&nbsp;pozemku Nadačního fondu Kousek po&nbsp;kousku ve&nbsp;Fulneku, o&nbsp;rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupně rodí výjimečné <strong>místo pro tělo, mysl a&nbsp;duši, harmonizační
                            a&nbsp;inspirativní prostor pro psychickou i fyzickou relaxaci.</strong> Zázemí Zahrady umožní<strong> dobrovolnické projekty, sociální a mezigenerační stmelování, edukační přesah</strong> pro&nbsp;všechny věkové skupiny i&nbsp;spoluúčast na&nbsp;výjimečném ekonomickém procesu.
                        Prostřednictvím samosběrů květin, bylin a&nbsp;plodů jedlé Zahrady představí totiž NF naprosto <strong>unikátní způsob hospodaření pro dosažení soběstačnosti.</strong>
                    </p> */}
                {/* <h2 className="title co-nabizi">
                            Co nabízí?
                        </h2> */}
                {/* </section> */}
            </section>

            <section className="section youtube-video">
                <iframe
                    width="560"
                    height="315"
                    // src="https://www.youtube.com/embed/wsF5T_2csE0"
                    src="https://www.youtube.com/embed/k3hMVfqi8-Y?si=Q2AgMxb5FyiTCih1" 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </section>

            {/* <section className="text-section section section-jurta" style={{ paddingTop: 0 }}>
                <div className="grid-top">
                    <h1 className="section-title title">
                        Jurta pro Zahradu HOJNOSTI
                    </h1>
                    <p className="text">
                        <strong>Zahrada Hojnosti potřebuje celoroční zázemí.</strong> Pro setkávání, workshopy, cvičení i pro děti ze škol, které by mohly trávit nějaký čas mimo
                        lavice.
                    </p>
                </div>
                <StaticImage className='grid-img img section-image' src="../images/jurta_white.jpg" alt='Jurta - Magdaléna Feilhauerová' layout='constrained' placeholder='blurred' />
                <div className="grid-bottom">
                    <p className="text">
                        Jurta o průměru 9 m s výhledem do Zahrady HOJNOSTI poskytne přístřeší a díky tomu
                        možnost pozorovat přírodu bez omezení, za každého počasí.
                        Díky Jurtě bude Zahrada Hojnosti žít v každé roční době.
                        Bude sloužit všem generacím, které spojuje aktivní, tvořivý způsob života.
                    </p>
                </div>
            </section> */}
            {/* <section className="section text-section center section-jurta-2">
                <Counter />
                <p
                    className={"subtitle green"}
                    style={{ marginBottom: '0', maxWidth: '50ch', fontSize: '1.7em' }}
                >
                    <strong>Přispět může každý.</strong>
                </p>
                <p className="text"
                    style={{ marginBottom: '2em', marginTop: '0em', maxWidth: '50ch', fontSize: '1.3em' }}
                > Kolik každý z nás daruje, přesně tolik vloží i Nadační fond Kousek po kousku.</p>
                <div className="button-row">
                    <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/" className={"button filled green bigger"}>Přispět</a>
                </div>
                <p className="small">Dary na Jurtu je možné zaslat také na speciální transparentní účet: <br />
                    <strong> JURTA pro Zahradu HOJNOSTI ve Fulneku – č. 301075890/0300</strong>. Platbu můžete provést také naskenováním QR kódu:
                </p>
                <StaticImage className='img' style={{ margin: '0 auto' }} src="../images/jurtaUcetQR.png" alt='' layout='constrained' placeholder='blurred' />
                <p>
                    Nebo přes odkaz <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/"><strong>zde</strong></a>,
                    kde najdete darovací šeky s obrazem Magdalény Feilhauerové
                </p>

                <p style={{textAlign: 'left'}}>
                    Cena Jurty se, bohužel, od podzimu, kdy jsme výzvu na JURTU vyhlásili a vybrali výrobce,  zvedla v rámci zdražování na 1&nbsp;200&nbsp;000,-&nbsp;Kč.
                    Je to cena včetně kamen a je garantovaná do 1.7.&nbsp;2022.
                </p>
                <p style={{textAlign: 'left'}}>
                    Pokud se nám tedy <strong>do konce června společně podaří získat 150&nbsp;000&nbsp;Kč,</strong> NF dary zdvojnásobí a ve stejný okamžik zaplatí zálohu na výrobu JURTY.
                    Pak bude čas do konce září shromáždit posledních 150&nbsp;000&nbsp;Kč. S podílem NF se tak JURTA doplatí a začátkem října je reálné, abychom se vídali v novém přístřeší u prvních akcí. Prostor začnou využívat také děti z nejen místních škol.
                    Cílová částka <strong>je 1&nbsp;200&nbsp;000&nbsp;Kč.</strong>
                    <strong>O kolik částka roste, přesně tolik vloží Nadační fond KPK.</strong>
                </p>
            </section> */}
            {/* <JurtaSection green /> */}


            <section className="prinos">
                <h2 className="title">Co Zahrada dává?</h2>
                <LayerWrapper>
                    <div style={{ height: '400px' }}></div>
                    <div>
                        <ZahradaCarousel />
                    </div>
                </LayerWrapper>
            </section>

            <section className="section section-text section-centered">
                <p className="montserrat-subtitle co-nabizi" >
                    Spolupráce s přírodou je rovná. <strong>Za práci, péči a starostlivost přichází hojnost.</strong> Pokud ji vidět chceme, vnímáme ji všude. Už při zrodu nabízí Zahrada půdu, prostor a zázemí.
                    Je povzbuzující terapií vidět, jak se i to nejmenší semínko snaží uchytit, každá květina na louce prezentovat svoji krásu. Je to výzva a inspirace pro nás pro všechny.
                </p>
            </section>

            {/* <section className="section section-text tree-section">
                <LayerWrapper>

                </LayerWrapper>
            </section> */}

            <section className="section section-text co-nabizi">


                <ul className="flex-row">
                    <li>
                        <h3 className="title">Půda</h3>
                        <p className="text">
                            Půda poskytuje péči všemu, co po nutných terénních úpravách zbylo, i novým semenům a rostlinám.
                            Jde o prostor více než 16&nbsp;000&nbsp;m<sup>2</sup>. Vzniká zde květinový labyrint, bylinná i okrasná část.
                            Postupně se bude okrasná i jedlá Zahrada rozšiřovat, přibude jedlý les.</p>
                        <p className="text">V&nbsp;Zahradě&nbsp;Hojnosti je po&nbsp;úpravách stále nedostatek orné půdy. <strong>Víte&nbsp;o&nbsp;nějaké?</strong> Napište nám na&nbsp;<a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        <p className="subtitle green"><strong>Pomozte&nbsp;nám zajistit další půdu pro&nbsp;rostliny.</strong></p>
                    </li>
                    <li>
                        <h3 className="title">Prostor</h3>
                        <p className="text">
                            Prostor slouží ke&nbsp;sdílení, setkávání, tvoření jednotlivců i&nbsp;skupin. Všichni si&nbsp;mohou odzkoušet své limity při&nbsp;fyzické práci a&nbsp;zjistit, jaký díl radosti jim přináší.
                            Dobrovolnictví v&nbsp;Zahradě nabude všední význam. Jde o&nbsp;skvělý způsob, jak&nbsp;pozitivně ovlivnit sebe a&nbsp;svět kolem nás.
                        </p>

                        <p className="text">
                            <strong>Chcete&nbsp;se&nbsp;zapojit?</strong> Navštivte&nbsp;FB&nbsp;stránku <a href="https://www.facebook.com/dobrovolniciprozahraduhojnosti.cz/">Dobrovolníci&nbsp;Zahrady&nbsp;Hojnosti</a>, kde sdělujeme aktuální informace o&nbsp;termínech a&nbsp;akcích, nebo napište na&nbsp;<a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>.
                        </p>
                        <p className="subtitle green" ><strong>Rádi Vás přivítáme</strong>.</p>
                    </li>
                    <li>
                        <h3 className="title">Zázemí</h3>
                        <p className="text">
                            Zahrada poskytne zázemí také pro&nbsp;různé druhy vědomého cvičení, pro&nbsp;harmonizaci, odpočinek a&nbsp;duševní pohodu. Pro hledání sama sebe, ztišení své duše, odpoutání se&nbsp;od&nbsp;každodenní reality.
                            Je už&nbsp;na každém, zda relaxuje u&nbsp;fyzické práce, cvičení nebo si&nbsp;jen posedí pod stromem. Připravujeme i&nbsp;mnoho tematických workshopů o&nbsp;pěstování a&nbsp;zpracování bylin, výrobě mastí, krémů, tinktur a&nbsp;dalších zázraků.
                        </p>
                        <p className="text"><strong>Máte vlastní námět?</strong> Přihlaste se na <a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        <p className="subtitle green">
                            <strong>Chcete workshop sami pořádat?</strong>
                        </p>
                    </li>
                </ul>

            </section>

            <section className="tree-section section">
                <LayerWrapper>
                    <StaticImage className='img tree-img' src="../images/tree_final_final.png" alt='' layout='fullWidth' placeholder='blurred' />

                    <section className="quote-section">
                        <figure className="quote-wrapper">
                            <blockquote className="komensky">"Umění, kterak vyučovat a&nbsp;učit&nbsp;se, nesmí a&nbsp;nemůže se&nbsp;bráti odjinud, než&nbsp;od&nbsp;učitelky přírody"</blockquote>
                            <figcaption className="">J.&nbsp;A.&nbsp;Komenský</figcaption>
                            {/* <blockquote className="bottom">Kéž&nbsp;Vám bude Zahrada hojnosti k&nbsp;tomuto sloužit…</blockquote> */}
                        </figure>
                        <StaticImage className="img" src='../images/komensky.jpg' alt='Jan amos komensky' placeholder="blurred" layout='constrained' imgStyle={{ filter: 'brightness(1.1)' }} />
                    </section>
                </LayerWrapper>
            </section>





            <section className="financovani">
                <section className="section section-text inner">
                    <h2 className="title">
                        Hospodaření
                    </h2>

                    <p className="text">
                        <strong>Zahradu hojnosti spravuje a provozuje NF Kousek po kousku se záměrem soběstačnosti.</strong>
                    </p>
                    <p className="text">
                        <strong>Jedním ze zdrojů budou samosběry.</strong> Bude možné přijít na řez květin, sběr bylin, později i bobulovin a vše, co v hojnosti Zahrada vydá.
                        Při samosběru se nastaví minimální částka a bude na každém, zda plody přírody ocení klidně i sumou vyšší.
                        Finanční zdroje se vrátí zpět do hospodaření Nadačního fondu a budou použity na další rozvoj Zahrady.
                    </p>
                    <p className="text">
                        <strong>Další zdroje přinese zapojení jednotlivců, skupin a firem.</strong> Každý může zakoupit svůj strom, část plotu, lavičku atd., které ponesou jejich jmenovku.
                    </p>
                    <p className="text">
                        <strong>Věříme, že tento inovátorský projekt přitáhne další regionální dárce a filantropy.</strong>

                    </p>
                </section>
                {/* <StaticImage className='img' src="https://image.shutterstock.com/shutterstock/photos/583423603/display_1500/stock-photo-hand-holding-credit-card-isolated-on-white-583423603.jpg" alt='' layout='constrained' placeholder='blurred'/> */}
            </section>

            <section className="section paragraph">
                {/* //todo Fix image, responsive, etc */}
                <StaticImage className='img' src="../images/paprika_hor.png" alt='Ruka držící rostlinku papriky' layout='constrained' placeholder='blurred' />
                <p className="lone-paragraph">
                    <strong>Přejeme si&nbsp;dlouhodobě spolu vytvářet podmínky pro společnost, která žije v hojnosti autentických projevů,</strong> s vědomím svého odpovědného jednání, s uměním radovat se z každodenního žití a chutí tvořit v radosti, což je<strong> největší dar</strong>.
                </p>
            </section>



            <section className="section section-text pravidla">
                <h2 className="title">
                    Desatero Zahrady
                </h2>
                <ol className="pravidla-list">
                    <li>Přistupuj s láskou ke všemu, co zde je a cti hojnost.</li>
                    <li>I ty jsi přiložil ruku k dílu nebo se teprve tak stane. </li>
                    <li>Přijmi práci druhých i svou a dary, které vznikly pod vedením přírody.</li>
                    <li>Vezmi pro sebe to, co neovlivní hojnost druhým.</li>
                    <li>Využij prostor pro relaxaci, meditaci, zklidnění.</li>
                    <li>Využij čisté energie pro načerpání nových sil. </li>
                    <li>Zapoj se do dobrovolnických prací a vyzkoušej své limity. </li>
                    <li>Zažij, jaké je tvořit rukama, zotav tělo i mysl.</li>
                    <li>Vše co Zahrada Hojnosti nabízí se vrací zpět, v podobě darů potřebným. </li>
                    <li>Udržuj koloběh hojnosti. Přijď a nasbírej si při samosběru květiny, byliny, plody. Finančním darem za ně se Zahrada může dále rozvíjet. </li>
                </ol>
            </section>

            {/* <section className="gallery">
                <ZahradaGalerie />
            </section> */}

            <section className="aktuality-zahrada">
                <AktualityCarousel aktuality={aktuality} green />
            </section>

            <SmallMap />


        </main >
    </Layout >
}

export default ZahradaPage;



/* <section className="section section-text intro">

</section> */

/* <section className="section section-text kde ">
    <h2 className="title">Kde? </h2>
    <p className="subtitle"><strong>Zahrada hojnosti se rozprostírá ve Fulneku na Novojičínsku,</strong> na ulici Palackého, nedaleko Kapucínského kláštera.</p>
    <p className="text">
        Na protějším kopci se rozprostírá Žákovský háj, kam chodil vyučovat své žáky Jan Ámos Komenský.
        Kousek od Zahrady hojnosti  stojí i Dětský domov Loreta, v jehož podzemí byla potvrzena existence zaniklé Loretánské kaple, nazývané Svatá chýše.
        Santa Casy se bez výjimek stavěly na zcela výjimečných místech s prokázanými tzv. telurickými proudy. Ty vznikají pohybem podzemních vod, posuvem půdy nebo na geologických zlomech.
        Telurické proudy jsou podle historických zdrojů projevem života, často se označují jako meridiány Země. Jsou popisovány jako energetické toky, které zásobují krajinu pozitivní energií.
    </p>
    <p className="text">
        Fulnek je na základě těchto doložených faktů bezpochyb mystickým místem. Je povzbuzován zvláštní, jedinečnou energií.
        Síle energetických jevů věřili už v 15. století a její pozitiva plně využívali.
    </p>

</section> */
