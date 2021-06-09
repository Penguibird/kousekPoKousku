import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import LayerWrapper from './../components/layer-wrapper';
import { StaticImage } from 'gatsby-plugin-image';
import Loadable from '@loadable/component';

// @ts-ignore


// @ts-ignore
import heroVideo from "../images/videos/zahrada_hero.mp4"
// @ts-ignore
import heroVideo1366 from "../images/videos/zahrada_1366_4Mb.mp4"
// @ts-ignore
import heroVideo768 from "../images/videos/zahrada_768_4Mb.mp4"
// @ts-ignore
import heroVideo360 from "../images/videos/zahrada_360_4Mb.mp4"

// import ZahradaCarousel from '../components/zahrada-carousel'
const ZahradaCarousel = Loadable(() => import('../components/zahrada-carousel'))
const ZahradaGalerie = Loadable(() => import('../components/zahrada-galerie'))
interface ZahradaPageProps {

};


const ZahradaPage: React.FC<ZahradaPageProps> = ({ }): JSX.Element => {


    // console.log(images)
    return <Layout title="Zahrada hojnosti | Nadační fond Kousek po Kousku" headerProps={{ color: 'green', logo: 'zahrada' }}>
        <main className="zahrada">
            <LayerWrapper className="hero">

                {/* <StaticImage className='img' src="../images/hero_placeholder.png" alt='Fotka zahrady' layout='constrained' placeholder='blurred' />
                <h1 className="title text-center">Zahrada Hojnosti</h1> */}
                <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto">
                    <source media="(max-width: 360px)" src={heroVideo360} type="video/mp4" />
                    <source media="(max-width: 768px)" src={heroVideo768} type="video/mp4" />
                    <source media="(max-width: 1366px)" src={heroVideo1366} type="video/mp4" />
                    <source src={heroVideo} type="video/mp4" />                </video>
                <div className="overlay"></div>
            </LayerWrapper>


            {/* Unused claim */}
            {/* <p className="text">Jedinečný projekt pro podporu soběstačnosti, s jedinečným modelem hospodaření</p> */}

            <section className="section-uvod">
                <section className="section section-text co-nabizi">
                    <p className="montserrat-subtitle " >
                        <strong>Zahrada Hojnosti na pozemku Nadačního fondu Kousek po kousku je naprosto unikátní projekt,</strong> který&nbsp;je&nbsp;připraven na&nbsp;vstup dalších dárců a&nbsp;filantropů.
                        </p>
                    <p className="text">
                        Na&nbsp;pozemku Nadačního fondu Kousek po&nbsp;kousku ve&nbsp;Fulneku, o&nbsp;rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupně rodí výjimečné <strong>místo pro tělo, mysl a&nbsp;duši, harmonizační
                            a&nbsp;inspirativní prostor pro psychickou i fyzickou relaxaci.</strong> Zázemí zahrady umožní<strong> dobrovolnické projekty, sociální a mezigenerační stmelování, edukační přesah</strong> pro&nbsp;všechny věkové skupiny i&nbsp;spoluúčast na&nbsp;výjimečném ekonomickém procesu.
                        Prostřednictvím samosběrů květin, bylin a&nbsp;plodů jedlé zahrady představí totiž NF naprosto <strong>unikátní způsob hospodaření pro dosažení soběstačnosti.</strong>
                    </p>
                    {/* <h2 className="title co-nabizi">
                            Co nabízí?
                        </h2> */}
                </section>
                <StaticImage className='img' src="../images/jahoda.png" alt='Ruka drzi rostlinku' layout='constrained' placeholder='blurred' />
            </section>

            <section className="section section-text co-nabizi">
                <p className="montserrat-subtitle bigger co-nabizi" style={{ marginTop: '0' }}>
                    <p><strong>Hojnost je všude.</strong> </p>
                    <p>
                        Zahrada se utváří, příroda tady vládne, kam se&nbsp;podíváš. Jakékoli semínko se&nbsp;snaží vzklíčit, každá květinka prezentuje svoji krásu.
                        Je&nbsp;to fascinující, uklidňující, povzbuzující terapie. Zahrada Hojnosti poskytuje půdu, prostor a&nbsp;zázemí.
                    </p>
                </p>

                <ul className="flex-row">
                    <li>
                        <h3>Půda</h3>
                        <p className="text">
                            Půda poskytuje péči semenům a&nbsp;kořenům rostlin, které jsou a&nbsp;budou postupně vysévány a&nbsp;sazeny na&nbsp;pozemku NF&nbsp;KpK o&nbsp;rozloze více než 16&nbsp;000&nbsp;m2.
                            Vzniká květinový labyrint, bylinná i&nbsp;okrasná část. Postupně se&nbsp;bude okrasná i&nbsp;jedlá zahrada rozšiřovat, přibude jedlý les.
                            </p>
                        <p className="text">V&nbsp;Zahradě&nbsp;Hojnosti je po&nbsp;terénních úpravách stále nedostatek orné půdy. <strong>Víte&nbsp;o&nbsp;nějaké?</strong> Napište nám na&nbsp;<a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        <p className="subtitle green">Pomozte&nbsp;nám zajistit další půdu pro&nbsp;rostliny.</p>
                    </li>
                    <li>
                        <h3>Prostor</h3>
                        <p className="text">
                            Prostor slouží ke&nbsp;sdílení, setkávání, tvoření jednotlivců i&nbsp;skupin. Všichni si&nbsp;mohou odzkoušet své limity při&nbsp;fyzické práci a&nbsp;zjistit, jaký díl radosti jim přináší.
                            Dobrovolnictví v&nbsp;zahradě nabude všední význam. Jde o&nbsp;skvělý způsob, jak&nbsp;pozitivně ovlivnit sebe a&nbsp;svět kolem nás.
                            </p>

                        <p className="text">
                            <strong>Chcete&nbsp;se&nbsp;zapojit?</strong> Přihlaste&nbsp;se do FB&nbsp;skupiny <a href="">Dobrovolníci&nbsp;pro&nbsp;kousek</a>, kde sdělujeme aktuální informace o&nbsp;termínech a&nbsp;akcích, nebo napište na&nbsp;<a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>.
                        </p>
                        <p className="subtitle green" >Rádi Vás přivítáme.</p>
                    </li>
                    <li>
                        <h3>Zázemí</h3>
                        <p className="text">
                            Zahrada poskytne zázemí také pro&nbsp;různé druhy vědomého cvičení, pro&nbsp;harmonizaci, odpočinek a&nbsp;duševní pohodu. Pro hledání sama sebe, ztišení své duše, odpoutání se&nbsp;od&nbsp;každodenní reality.
                            Je už&nbsp;na každém, zda relaxuje u&nbsp;fyzické práce, cvičení nebo si&nbsp;jen posedí pod stromem. Budeme připravovat i&nbsp;mnoho tematických workshopů o&nbsp;pěstování a&nbsp;zpracování bylin, výrobě mastí, krémů, tinktur a&nbsp;v&nbsp;dalších letech se&nbsp;okruh ještě rozšíří.
                            </p>
                        <p className="text"><strong>Máte vlastní námět?</strong> Přihlaste se na <a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        {/* <p className="subtitle green"> Už <strong>J.Á. Komenský</strong> tvrdil, že nejlepší učitelkou je sama příroda. A je to tak.</p> */}
                        <p className="subtitle green">
                            Chcete workshop sami pořádat?
                        </p>
                    </li>
                </ul>

            </section>

            <section className="quote-section">
                <figure className="quote-wrapper">
                    <blockquote className="komensky">"Umění, kterak vyučovat a&nbsp;učit&nbsp;se, nesmí a&nbsp;nemůže se&nbsp;bráti odjinud, než&nbsp;od&nbsp;učitelky přírody"</blockquote>
                    <figcaption className=""> - J.&nbsp;Á.&nbsp;Komenský</figcaption>
                    {/* <blockquote className="bottom">Kéž&nbsp;Vám bude Zahrada hojnosti k&nbsp;tomuto sloužit…</blockquote> */}
                </figure>
                <StaticImage className="img" src='../images/komensky.jpg' alt='Jan amos komensky' placeholder="blurred" layout='constrained' />
            </section>


            <section className="prinos">
                <h2 className="title">Přínos</h2>
                <LayerWrapper>
                    <div style={{ height: '400px' }}></div>
                    <div>
                        <ZahradaCarousel />
                    </div>
                </LayerWrapper>
            </section>




            <section className="section section-text financovani">
                <h2 className="title">
                    Financování
                    </h2>
                <p className="text">
                    Zda se&nbsp;časem zahrada stane soběstačnou, zvládne provoz a&nbsp;přitáhne další regionální dárce a&nbsp;filantropy.
                    </p>
                <p className="text">
                    <strong>Jedním ze&nbsp;zdrojů budou samosběry.</strong> Bude možné přijít na&nbsp;řez květin, sběr bylin, později i&nbsp;bobulovin a&nbsp;vše, co&nbsp;v&nbsp;hojnosti zahrada vydá. Při&nbsp;samosběru se&nbsp;nastaví minimální částka a&nbsp;bude na&nbsp;každém, zda plody přírody ocení klidně i sumou vyšší.
                    <strong> Finanční zdroje se&nbsp;vrátí zpět do&nbsp;hospodaření Nadačního&nbsp;fondu a&nbsp;budou použity na&nbsp;další kousky dobra</strong> v&nbsp;rámci projektů Nadačního&nbsp;fondu Kousek po&nbsp;kousku a&nbsp;pro&nbsp;další rozvoj zahrady.
                </p>
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
                    Desatero zahrady
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
                    <li>Udržuj koloběh hojnosti. Přijď a nasbírej si při samosběru květiny, byliny, plody, zaplať za ně, ať se zahrada může dále rozvíjet. </li>
                </ol>
            </section>

            <section className="gallery">
                <ZahradaGalerie />
            </section>
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
