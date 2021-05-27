import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import LayerWrapper from './../components/layer-wrapper';
import { StaticImage } from 'gatsby-plugin-image';
import Loadable from '@loadable/component';
// import ZahradaCarousel from '../components/zahrada-carousel'
const ZahradaCarousel = Loadable(() => import('../components/zahrada-carousel'))
interface ZahradaPageProps {

};

const ZahradaPage: React.FC<ZahradaPageProps> = ({ }): JSX.Element => {
    return <Layout>
        <LayerWrapper className="hero">
            <StaticImage src="../images/hero_placeholder.png" alt='' layout='constrained' />
            <h1 className="title hero-title">Zahrada hojnosti</h1>
        </LayerWrapper>
        <main className="zahrada">
            {/* <section className="section section-text intro">

            </section> */}

            <section className="section section-text kde ">
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

            </section>


            <section className="section section-text co-nabizi">
                <h2 className="title">
                    Co nabízí?
                    </h2>
                <p className="subtitle text-center">Zahrada je bohatá od samého začátku. Hned ze startu <br /> nabízí <strong>půdu, prostor a zázemí</strong></p>
                <ul className="flex-row">
                    <li>
                        <h3>Půda</h3>
                        <p className="text">
                            Půda poskytuje péči semenům a kořenům rostlin, které jsou postupně vysévány a sazeny na pozemku o rozloze více než 14 000 m2.
                            Postupem času vznikne jedlý les, jedlá i okrasná zahrada, budou se pěstovat byliny i květiny k řezu, okrasné keře.
                            </p>
                    </li>
                    <li>
                        <h3>Prostor</h3>
                        <p className="text">
                            Prostor slouží ke sdílení, setkávání, tvoření jednotlivců i skupin. Všichni si mohou odzkoušet své limity při fyzické práci a zjistit, jaký díl radosti jim přináší.
                            Dobrovolnictví v zahradě nabude všední význam. Jde o skvělý způsob, jak pozitivně ovlivnit sebe a svět kolem nás.
                            </p>
                    </li>
                    <li>
                        <h3>Zázemí</h3>
                        <p className="text">
                            Zahrada také poskytne zázemí pro různé druhy vědomého cvičení, pro harmonizaci, odpočinek a duševní pohodu. Pro hledání sama sebe, ztišení své duše, pro řešení svých dilemat.
                            </p>
                    </li>
                </ul>
                <p className="bottom-text text subtitle">
                    <strong>Přejeme si dlouhodobě spoluvytvářet podmínky pro společnost, která žije v hojnosti autentických projevů,</strong> s vědomím svého odpovědného jednání, s uměním radovat se z každodenního žití a chutí tvořit v radosti,<br /> což je<strong> největší dar</strong>.
                    </p>
            </section>


            <section className="prinos">
                <h2 className="title">Přínos</h2>
                    <LayerWrapper>
                        <div style={{height: '400px'}}></div>
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
                    Hospodaření je a bude naprosto jedinečné a teprve čas ukáže, jak vše bude fungovat. Zda se hojnost zahrady rozroste a bude plodit dary pro další potřebné.
                    Zda se časem zahrada stane soběstačnou, zvládne provoz a přitáhne další regionální donátory a filantropy.
                    </p>
                <p className="text">
                    Jedním ze zdrojů budou samozběry. Bude možné přijít na řez květin, sběr bylin, později i bobulovin a vše, co v hojnosti zahrada vydá. Při samosběru se nastaví minimální částka a bude na každém, zda plody přírody ocení klidně i sumou vyšší.
                    Finanční zdroje se vrátí zpět do hospodaření Nadačního fondu a budou použity na další kousky DOBRA v rámci projektů Nadačního fondu Kousek po kousku.
                </p>
            </section>
            <section className="section section-text pravidla">
                <h2 className="title">
                    Pravidla fungování
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
                    <li>Odkup si květiny, byliny, plody. </li>
                    <li>Přijď a nasbírej si při samosběru a nechej příspěvek na další kousek DOBRA.</li>
                </ol>
            </section>
            <figure className="quote-wrapper">
                <figcaption className="">Odkaz J. Á. Komenského</figcaption>
                <blockquote className="komensky">"Jsou situace, kdy&nbsp;je potřeba zavřít oči, aby člověk viděl a&nbsp;ztišit&nbsp;se, aby&nbsp;se slyšel."</blockquote>
                <blockquote className="bottom">Kéž&nbsp;Vám bude Zahrada hojnosti k&nbsp;tomuto sloužit…</blockquote>
            </figure>
        </main>
    </Layout>
}

export default ZahradaPage;
