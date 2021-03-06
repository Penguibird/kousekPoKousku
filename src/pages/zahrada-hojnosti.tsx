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




    return <Layout title="Zahrada Hojnosti | Nada??n?? fond Kousek po Kousku" headerProps={{ color: 'green', logo: 'zahrada' }}>
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
            {/* <p className="text">Jedine??n?? projekt pro podporu sob??sta??nosti, s jedine??n??m modelem hospoda??en??</p> */}

            <section className="section-uvod" style={{ overflow: 'auto' }}>

                <StaticImage className='img' src="../images/jahoda_right.png" alt='Ruka drzi rostlinku' layout='constrained' placeholder='blurred' />
                <Link className="link-back" to="/"><span className="text">Zp??t na hlavn?? str??nku NF <span className="highlight green">Kousek po Kousku</span></span></Link>
                {/* <section className="section section-text co-nabizi"> */}
                <p className="montserrat-subtitle " >
                    {/* <strong>Zahrada Hojnosti na pozemku Nada??n??ho fondu Kousek po kousku je naprosto unik??tn?? projekt,</strong> kter??&nbsp;je&nbsp;p??ipraven na&nbsp;vstup dal????ch d??rc?? a&nbsp;filantrop??. */}
                    Budujeme p????rodn?? zahradu - Zahradu Hojnosti. Zahradu pro <strong>t??lo i du??i.</strong> P??id??te se? <strong>Vytvo????me spole??n?? kr??sn??, inspirativn?? m??sto pro psychickou i fyzickou relaxaci, kter?? bude ????t pro dal???? a dal???? generace.</strong>
                </p>
                <p className="montserrat-subtitle">
                    V??t??me v??echny, kte???? v n?? najdou sv??j kousek pro sebe. <strong>Kousek pohody, odpo??inku, kr??sy, pohybu, p????telstv??...</strong>
                </p>
                <p className="montserrat-subtitle">
                    Zahrada poskytne <strong>prostor pro hled??n?? a hlub???? pozn??n?? sebe sama,</strong> pro tvo??ivou pr??ci, setk??v??n??, pohyb a pozn??v??n?? nov??ho prost??ednictv??m workshop??.
                </p>
                {/* <p className="text">
                        Na&nbsp;pozemku Nada??n??ho fondu Kousek po&nbsp;kousku ve&nbsp;Fulneku, o&nbsp;rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupn?? rod?? v??jime??n?? <strong>m??sto pro t??lo, mysl a&nbsp;du??i, harmoniza??n??
                            a&nbsp;inspirativn?? prostor pro psychickou i fyzickou relaxaci.</strong> Z??zem?? Zahrady umo??n??<strong> dobrovolnick?? projekty, soci??ln?? a mezigenera??n?? stmelov??n??, eduka??n?? p??esah</strong> pro&nbsp;v??echny v??kov?? skupiny i&nbsp;spolu????ast na&nbsp;v??jime??n??m ekonomick??m procesu.
                        Prost??ednictv??m samosb??r?? kv??tin, bylin a&nbsp;plod?? jedl?? Zahrady p??edstav?? toti?? NF naprosto <strong>unik??tn?? zp??sob hospoda??en?? pro dosa??en?? sob??sta??nosti.</strong>
                    </p> */}
                {/* <h2 className="title co-nabizi">
                            Co nab??z???
                        </h2> */}
                {/* </section> */}
            </section>

            <section className="section youtube-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wsF5T_2csE0"
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
                        <strong>Zahrada Hojnosti pot??ebuje celoro??n?? z??zem??.</strong> Pro setk??v??n??, workshopy, cvi??en?? i pro d??ti ze ??kol, kter?? by mohly tr??vit n??jak?? ??as mimo
                        lavice.
                    </p>
                </div>
                <StaticImage className='grid-img img section-image' src="../images/jurta_white.jpg" alt='Jurta - Magdal??na Feilhauerov??' layout='constrained' placeholder='blurred' />
                <div className="grid-bottom">
                    <p className="text">
                        Jurta o pr??m??ru 9 m s??v??hledem do Zahrady HOJNOSTI poskytne p????st??e???? a d??ky tomu
                        mo??nost pozorovat p????rodu bez omezen??, za ka??d??ho po??as??.
                        D??ky Jurt?? bude Zahrada Hojnosti ????t v??ka??d?? ro??n?? dob??.
                        Bude slou??it v??em generac??m, kter?? spojuje aktivn??, tvo??iv?? zp??sob ??ivota.
                    </p>
                </div>
            </section> */}
            {/* <section className="section text-section center section-jurta-2">
                <Counter />
                <p
                    className={"subtitle green"}
                    style={{ marginBottom: '0', maxWidth: '50ch', fontSize: '1.7em' }}
                >
                    <strong>P??isp??t m????e ka??d??.</strong>
                </p>
                <p className="text"
                    style={{ marginBottom: '2em', marginTop: '0em', maxWidth: '50ch', fontSize: '1.3em' }}
                > Kolik ka??d?? z??n??s daruje, p??esn?? tolik vlo???? i Nada??n?? fond Kousek po kousku.</p>
                <div className="button-row">
                    <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/" className={"button filled green bigger"}>P??isp??t</a>
                </div>
                <p className="small">Dary na Jurtu je mo??n?? zaslat tak?? na speci??ln?? transparentn?? ????et: <br />
                    <strong> JURTA pro Zahradu HOJNOSTI ve Fulneku ??? ??. 301075890/0300</strong>. Platbu m????ete prov??st tak?? naskenov??n??m QR k??du:
                </p>
                <StaticImage className='img' style={{ margin: '0 auto' }} src="../images/jurtaUcetQR.png" alt='' layout='constrained' placeholder='blurred' />
                <p>
                    Nebo p??es odkaz <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/"><strong>zde</strong></a>,
                    kde najdete darovac?? ??eky s obrazem Magdal??ny Feilhauerov??
                </p>

                <p style={{textAlign: 'left'}}>
                    Cena Jurty se, bohu??el, od podzimu, kdy jsme v??zvu na JURTU vyhl??sili a vybrali v??robce,  zvedla v r??mci zdra??ov??n?? na 1&nbsp;200&nbsp;000,-&nbsp;K??.
                    Je to cena v??etn?? kamen a je garantovan?? do 1.7.&nbsp;2022.
                </p>
                <p style={{textAlign: 'left'}}>
                    Pokud se n??m tedy <strong>do konce ??ervna spole??n?? poda???? z??skat 150&nbsp;000&nbsp;K??,</strong> NF dary zdvojn??sob?? a ve stejn?? okam??ik zaplat?? z??lohu na v??robu JURTY.
                    Pak bude ??as do konce z?????? shrom????dit posledn??ch 150&nbsp;000&nbsp;K??. S pod??lem NF se tak JURTA doplat?? a za????tkem ????jna je re??ln??, abychom se v??dali v nov??m p????st??e???? u prvn??ch akc??. Prostor za??nou vyu????vat tak?? d??ti z nejen m??stn??ch ??kol.
                    C??lov?? ????stka <strong>je 1&nbsp;200&nbsp;000&nbsp;K??.</strong>
                    <strong>O kolik ????stka roste, p??esn?? tolik vlo???? Nada??n?? fond KPK.</strong>
                </p>
            </section> */}
            <JurtaSection green />


            <section className="prinos">
                <h2 className="title">Co Zahrada d??v???</h2>
                <LayerWrapper>
                    <div style={{ height: '400px' }}></div>
                    <div>
                        <ZahradaCarousel />
                    </div>
                </LayerWrapper>
            </section>

            <section className="section section-text section-centered">
                <p className="montserrat-subtitle co-nabizi" >
                    Spolupr??ce s p????rodou je rovn??. <strong>Za pr??ci, p????i a starostlivost p??ich??z?? hojnost.</strong> Pokud ji vid??t chceme, vn??m??me ji v??ude. U?? p??i zrodu nab??z?? Zahrada p??du, prostor a z??zem??.
                    Je povzbuzuj??c?? terapi?? vid??t, jak se i to nejmen???? sem??nko sna???? uchytit, ka??d?? kv??tina na louce prezentovat svoji kr??su. Je to v??zva a inspirace pro n??s pro v??echny.
                </p>
            </section>

            {/* <section className="section section-text tree-section">
                <LayerWrapper>

                </LayerWrapper>
            </section> */}

            <section className="section section-text co-nabizi">


                <ul className="flex-row">
                    <li>
                        <h3 className="title">P??da</h3>
                        <p className="text">
                            P??da poskytuje p????i v??emu, co po nutn??ch ter??nn??ch ??prav??ch zbylo, i nov??m semen??m a rostlin??m.
                            Jde o prostor v??ce ne?? 16&nbsp;000&nbsp;m<sup>2</sup>. Vznik?? zde kv??tinov?? labyrint, bylinn?? i okrasn?? ????st.
                            Postupn?? se bude okrasn?? i jedl?? Zahrada roz??i??ovat, p??ibude jedl?? les.</p>
                        <p className="text">V&nbsp;Zahrad??&nbsp;Hojnosti je po&nbsp;??prav??ch st??le nedostatek orn?? p??dy. <strong>V??te&nbsp;o&nbsp;n??jak???</strong> Napi??te n??m na&nbsp;<a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        <p className="subtitle green"><strong>Pomozte&nbsp;n??m zajistit dal???? p??du pro&nbsp;rostliny.</strong></p>
                    </li>
                    <li>
                        <h3 className="title">Prostor</h3>
                        <p className="text">
                            Prostor slou???? ke&nbsp;sd??len??, setk??v??n??, tvo??en?? jednotlivc?? i&nbsp;skupin. V??ichni si&nbsp;mohou odzkou??et sv?? limity p??i&nbsp;fyzick?? pr??ci a&nbsp;zjistit, jak?? d??l radosti jim p??in??????.
                            Dobrovolnictv?? v&nbsp;Zahrad?? nabude v??edn?? v??znam. Jde o&nbsp;skv??l?? zp??sob, jak&nbsp;pozitivn?? ovlivnit sebe a&nbsp;sv??t kolem n??s.
                        </p>

                        <p className="text">
                            <strong>Chcete&nbsp;se&nbsp;zapojit?</strong> Nav??tivte&nbsp;FB&nbsp;str??nku <a href="https://www.facebook.com/dobrovolniciprozahraduhojnosti.cz/">Dobrovoln??ci&nbsp;Zahrady&nbsp;Hojnosti</a>, kde sd??lujeme aktu??ln?? informace o&nbsp;term??nech a&nbsp;akc??ch, nebo napi??te na&nbsp;<a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>.
                        </p>
                        <p className="subtitle green" ><strong>R??di V??s p??iv??t??me</strong>.</p>
                    </li>
                    <li>
                        <h3 className="title">Z??zem??</h3>
                        <p className="text">
                            Zahrada poskytne z??zem?? tak?? pro&nbsp;r??zn?? druhy v??dom??ho cvi??en??, pro&nbsp;harmonizaci, odpo??inek a&nbsp;du??evn?? pohodu. Pro hled??n?? sama sebe, zti??en?? sv?? du??e, odpout??n?? se&nbsp;od&nbsp;ka??dodenn?? reality.
                            Je u??&nbsp;na ka??d??m, zda relaxuje u&nbsp;fyzick?? pr??ce, cvi??en?? nebo si&nbsp;jen posed?? pod stromem. P??ipravujeme i&nbsp;mnoho tematick??ch workshop?? o&nbsp;p??stov??n?? a&nbsp;zpracov??n?? bylin, v??rob?? mast??, kr??m??, tinktur a&nbsp;dal????ch z??zrak??.
                        </p>
                        <p className="text"><strong>M??te vlastn?? n??m??t?</strong> P??ihlaste se na <a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        <p className="subtitle green">
                            <strong>Chcete workshop sami po????dat?</strong>
                        </p>
                    </li>
                </ul>

            </section>

            <section className="tree-section section">
                <LayerWrapper>
                    <StaticImage className='img tree-img' src="../images/tree_final_final.png" alt='' layout='fullWidth' placeholder='blurred' />

                    <section className="quote-section">
                        <figure className="quote-wrapper">
                            <blockquote className="komensky">"Um??n??, kterak vyu??ovat a&nbsp;u??it&nbsp;se, nesm?? a&nbsp;nem????e se&nbsp;br??ti odjinud, ne??&nbsp;od&nbsp;u??itelky p????rody"</blockquote>
                            <figcaption className="">J.&nbsp;A.&nbsp;Komensk??</figcaption>
                            {/* <blockquote className="bottom">K????&nbsp;V??m bude Zahrada hojnosti k&nbsp;tomuto slou??it???</blockquote> */}
                        </figure>
                        <StaticImage className="img" src='../images/komensky.jpg' alt='Jan amos komensky' placeholder="blurred" layout='constrained' imgStyle={{ filter: 'brightness(1.1)' }} />
                    </section>
                </LayerWrapper>
            </section>





            <section className="financovani">
                <section className="section section-text inner">
                    <h2 className="title">
                        Hospoda??en??
                    </h2>

                    <p className="text">
                        <strong>Zahradu hojnosti spravuje a provozuje NF Kousek po kousku se z??m??rem sob??sta??nosti.</strong>
                    </p>
                    <p className="text">
                        <strong>Jedn??m ze zdroj?? budou samosb??ry.</strong> Bude mo??n?? p??ij??t na ??ez kv??tin, sb??r bylin, pozd??ji i bobulovin a v??e, co v hojnosti Zahrada vyd??.
                        P??i samosb??ru se nastav?? minim??ln?? ????stka a bude na ka??d??m, zda plody p????rody ocen?? klidn?? i sumou vy??????.
                        Finan??n?? zdroje se vr??t?? zp??t do hospoda??en?? Nada??n??ho fondu a budou pou??ity na dal???? rozvoj Zahrady.
                    </p>
                    <p className="text">
                        <strong>Dal???? zdroje p??inese zapojen?? jednotlivc??, skupin a firem.</strong> Ka??d?? m????e zakoupit sv??j strom, ????st plotu, lavi??ku atd., kter?? ponesou jejich jmenovku.
                    </p>
                    <p className="text">
                        <strong>V??????me, ??e tento inov??torsk?? projekt p??it??hne dal???? region??ln?? d??rce a filantropy.</strong>

                    </p>
                </section>
                {/* <StaticImage className='img' src="https://image.shutterstock.com/shutterstock/photos/583423603/display_1500/stock-photo-hand-holding-credit-card-isolated-on-white-583423603.jpg" alt='' layout='constrained' placeholder='blurred'/> */}
            </section>

            <section className="section paragraph">
                {/* //todo Fix image, responsive, etc */}
                <StaticImage className='img' src="../images/paprika_hor.png" alt='Ruka dr????c?? rostlinku papriky' layout='constrained' placeholder='blurred' />
                <p className="lone-paragraph">
                    <strong>P??ejeme si&nbsp;dlouhodob?? spolu vytv????et podm??nky pro spole??nost, kter?? ??ije v hojnosti autentick??ch projev??,</strong> s v??dom??m sv??ho odpov??dn??ho jedn??n??, s um??n??m radovat se z ka??dodenn??ho ??it?? a chut?? tvo??it v radosti, co?? je<strong> nejv??t???? dar</strong>.
                </p>
            </section>



            <section className="section section-text pravidla">
                <h2 className="title">
                    Desatero Zahrady
                </h2>
                <ol className="pravidla-list">
                    <li>P??istupuj s l??skou ke v??emu, co zde je a cti hojnost.</li>
                    <li>I ty jsi p??ilo??il ruku k d??lu nebo se teprve tak stane. </li>
                    <li>P??ijmi pr??ci druh??ch i svou a dary, kter?? vznikly pod veden??m p????rody.</li>
                    <li>Vezmi pro sebe to, co neovlivn?? hojnost druh??m.</li>
                    <li>Vyu??ij prostor pro relaxaci, meditaci, zklidn??n??.</li>
                    <li>Vyu??ij ??ist?? energie pro na??erp??n?? nov??ch sil. </li>
                    <li>Zapoj se do dobrovolnick??ch prac?? a vyzkou??ej sv?? limity. </li>
                    <li>Za??ij, jak?? je tvo??it rukama, zotav t??lo i mysl.</li>
                    <li>V??e co Zahrada Hojnosti nab??z?? se vrac?? zp??t, v podob?? dar?? pot??ebn??m. </li>
                    <li>Udr??uj kolob??h hojnosti. P??ij?? a nasb??rej si p??i samosb??ru kv??tiny, byliny, plody, zapla?? za n??, a?? se Zahrada m????e d??le rozv??jet. </li>
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
    <p className="subtitle"><strong>Zahrada hojnosti se rozprost??r?? ve Fulneku na Novoji????nsku,</strong> na ulici Palack??ho, nedaleko Kapuc??nsk??ho kl????tera.</p>
    <p className="text">
        Na prot??j????m kopci se rozprost??r?? ????kovsk?? h??j, kam chodil vyu??ovat sv?? ????ky Jan ??mos Komensk??.
        Kousek od Zahrady hojnosti  stoj?? i D??tsk?? domov Loreta, v jeho?? podzem?? byla potvrzena existence zanikl?? Loret??nsk?? kaple, naz??van?? Svat?? ch????e.
        Santa Casy se bez v??jimek stav??ly na zcela v??jime??n??ch m??stech s prok??zan??mi tzv. telurick??mi proudy. Ty vznikaj?? pohybem podzemn??ch vod, posuvem p??dy nebo na geologick??ch zlomech.
        Telurick?? proudy jsou podle historick??ch zdroj?? projevem ??ivota, ??asto se ozna??uj?? jako meridi??ny Zem??. Jsou popisov??ny jako energetick?? toky, kter?? z??sobuj?? krajinu pozitivn?? energi??.
    </p>
    <p className="text">
        Fulnek je na z??klad?? t??chto dolo??en??ch fakt?? bezpochyb mystick??m m??stem. Je povzbuzov??n zvl????tn??, jedine??nou energi??.
        S??le energetick??ch jev?? v????ili u?? v 15. stolet?? a jej?? pozitiva pln?? vyu????vali.
    </p>

</section> */
