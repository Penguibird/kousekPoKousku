import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import LayerWrapper from './../components/layer-wrapper';
import { StaticImage } from 'gatsby-plugin-image';
import Loadable from '@loadable/component';

// import ZahradaCarousel from '../components/zahrada-carousel'
const ZahradaCarousel = Loadable(() => import('../components/zahrada-carousel'))
const ZahradaGalerie = Loadable(() => import('../components/zahrada-galerie'))
interface ZahradaPageProps {

};


const ZahradaPage: React.FC<ZahradaPageProps> = ({ }): JSX.Element => {


    // console.log(images)
    return <Layout headerProps={{ color: 'green', logo: 'zahrada' }}>
        <main className="zahrada">
            <LayerWrapper className="hero">

                <StaticImage className='img' src="../images/hero_placeholder.png" alt='Fotka zahrady' layout='constrained' placeholder='blurred' />
                <h1 className="title text-center">Zahrada Hojnosti</h1>
            </LayerWrapper>


            {/* Unused claim */}
            {/* <p className="text">Jedinečný projekt pro podporu soběstačnosti, s jedinečným modelem hospodaření</p> */}

            <section className="section-uvod">
                <section className="section section-text co-nabizi">
                    <p className="montserrat-subtitle " >
                        <strong>Zahrada Hojnosti na pozemku Nadačního fondu Kousek po kousku je naprosto unikátní projekt,</strong> který je připraven na vstup dalších dárců a filantropů.
                        </p>
                    <p className="text">
                        Na pozemku Nadačního fondu Kousek po kousku ve Fulneku, o rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupně rodí výjimečné místo pro tělo, mysl a&nbsp;duši, harmonizační a&nbsp;inspirativní prostor pro psychickou i fyzickou relaxaci. Zázemí zahrady umožní dobrovolnické projekty, sociální a mezigenerační stmelování, edukační přesah pro všechny věkové skupiny i spoluúčast na výjimečném ekonomickém procesu.
                        Prostřednictvím samosběrů květin, bylin a plodů jedlé zahrady představí totiž NF naprosto unikátní způsob hospodaření pro dosažení soběstačnosti.
                        </p>
                    {/* <h2 className="title co-nabizi">
                            Co nabízí?
                        </h2> */}
                </section>
                <StaticImage className='img' src="../images/jahoda.png" alt='Ruka drzi rostlinku' layout='constrained' placeholder='blurred' />
            </section>

            <section className="section section-text co-nabizi">
                <p className="montserrat-subtitle bigger co-nabizi" style={{ marginTop: '0' }}>
                    <p>Zahrada se pomalu rodí, ale příroda v ní vládne, kam se podíváš. Každé semínko se snaží uchytit, každá květina na louce prezentuje svoji krásu. <strong>Je to fascinující, uklidňující, povzbuzující terapie.</strong>
                    </p>
                    <p>Hojnost je všude, kde ji chceme vidět. Zahrada Hojnosti je bohatá už teď. Nabízí <strong>půdu, prostor a zázemí.</strong></p>
                </p>

                <ul className="flex-row">
                    <li>
                        <h3>Půda</h3>
                        <p className="text">
                            Půda poskytuje péči semenům a kořenům rostlin, které jsou a budou postupně vysévány a sazeny na pozemku NF KpK o rozloze více než 16 000 m2.
                            Vzniká květinový labyrint, bylinná i okrasná část. Postupně se bude okrasná i jedlá zahrada rozšiřovat, přibude jedlý les.
                            </p>
                        <p className="text">V Zahradě Hojnosti je po terénních úpravách stále nedostatek orné půdy. <strong>Víte o nějaké?</strong> Napište nám na <a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a></p>
                        <p className="subtitle green">Pomozte nám zajistit další půdu pro rostliny.</p>
                    </li>
                    <li>
                        <h3>Prostor</h3>
                        <p className="text">
                            Prostor slouží ke sdílení, setkávání, tvoření jednotlivců i skupin. Všichni si mohou odzkoušet své limity při fyzické práci a zjistit, jaký díl radosti jim přináší.
                            Dobrovolnictví v zahradě nabude všední význam. Jde o skvělý způsob, jak pozitivně ovlivnit sebe a svět kolem nás.
                            </p>

                        <p className="text">
                            <strong>Chcete se zapojit?</strong> Přihlaste se do FB skupiny <a href="">Dobrovolníci pro kousek</a>, kde sdělujeme aktuální informace o termínech a akcích, nebo napište na <a className="mail" href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>.
                        </p>
                        <p className="subtitle green" >Rádi Vás přivítáme.</p>
                    </li>
                    <li>
                        <h3>Zázemí</h3>
                        <p className="text">
                            Zahrada poskytne zázemí také pro různé druhy vědomého cvičení, pro harmonizaci, odpočinek a duševní pohodu. Pro hledání sama sebe, ztišení své duše, odpoutání se od každodenní reality.
                            Je už na každém, zda relaxuje u fyzické práce, cvičení nebo si jen sedne pod strom. Budeme připravovat i mnoho tematických workshopů o pěstování a zpracování bylin, výrobě mastí, krémů tinktur a v dalších letech se okruh dál rozšíří.
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
                    <blockquote className="komensky">"Umění, kterak vyučovat a učit se nesmí a nemůže se bráti odjinud, než od učitelky přírody"</blockquote>
                    <figcaption className=""> - J. Á. Komenský</figcaption>
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
                    <strong>Hospodaření je a bude naprosto jedinečné a teprve čas ukáže, jak vše bude fungovat.</strong> Zda se hojnost zahrady rozroste a bude plodit dary pro další potřebné.
                    Zda se časem zahrada stane soběstačnou, zvládne provoz a přitáhne další regionální donátory a filantropy.
                    </p>
                <p className="text">
                    <strong>Jedním ze zdrojů budou samosběry.</strong> Bude možné přijít na řez květin, sběr bylin, později i bobulovin a vše, co v hojnosti zahrada vydá. Při samosběru se nastaví minimální částka a bude na každém, zda plody přírody ocení klidně i sumou vyšší.
                    <strong> Finanční zdroje se vrátí zpět do hospodaření Nadačního fondu a budou použity na další kousky dobra</strong> v rámci projektů Nadačního fondu Kousek po kousku a pro další rozvoj zahrady.
                </p>
            </section>

            <section className="section paragraph">
                {/* //todo Fix image, responsive, etc */}
                <StaticImage className='img' src="../images/paprika_hor.png" alt='Ruka držící rostlinku papriky' layout='constrained' placeholder='blurred' />
                <p className="lone-paragraph">
                    <strong>Přejeme si dlouhodobě spolu vytvářet podmínky pro společnost, která žije v hojnosti autentických projevů,</strong> s vědomím svého odpovědného jednání, s uměním radovat se z každodenního žití a chutí tvořit v radosti, což je<strong> největší dar</strong>.
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
