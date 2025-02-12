import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import LayerWrapper from './../components/layer-wrapper';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Loadable from '@loadable/component';
// const Map = Loadable(() => import('./../components/map'))
import Map from './../components/map';

interface ProjektyPageProps {

};

const ProjektyPage: React.FC<ProjektyPageProps> = ({ }) => {
    return <Layout title="Projekty | Nadační fond Kousek po Kousku" >
        {/* <LayerWrapper className="hero" >
            <StaticImage src="../images/hero_placeholder.png" alt='' layout='constrained' />
        </LayerWrapper> */}
        <section className="hero-projekty section">
            <h1 className="title hero-title">Aktuálně podporujeme</h1>
        </section>

        {/* Tady byla zahrada */}
        
        <section className="section-mikulas section-klinika" style={{ justifyContent: 'center' }}>
            <section className="section section-text " id="mikulas" style={{ width: '100%' }}> 
               <h2 className="section-title title">Pomoc pro sedmiletého Mikuláše<br />z našeho regionu</h2>
                {/* <p className="subtitle">Podpora služeb rozvoje Sociální kliniky v Moravskoslezském kraji</p> */}

                <iframe
                    width="980"
                    height="551.25"
                    src="https://www.youtube.com/embed/fYQINmyC9Yc?si=Q2OHoaoeuHVsbyWR"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <p style={{ marginTop: '2rem' }}>
                    Mikuláš Adamčík, 7 let. Usměvavé, šťastné dítě, kterému se ve 2 letech začaly dít podivné věci. Jeho milující rodiče museli tehdy přijmout zprávu o Mikyho poruše autistického spektra. Přes smíření se aktivně zajímají o nové metody v léčbě a terapeutickou podporu.
                </p>
                <p>
                    Loni absolvovali v Brně laserovou terapii, která upravila Mikyho vnímání, vylepšila pozumění okolních vjemů a ustálila jeho pozornost.
                    Každý úspéch je obrovským motorem jít dál.
                </p>
                <p>
                    Momentálně má rodina novou zprávu. Miky prošel řadou kontrol a testování, po kterém lékaři doporučili aplikaci
                    kmenových buněk z pupečníkové krve. Jak případů přibývá, ukazuje se, že ty dokáží obnovit nervová zakončení v mozku a mnohé symptomy upozadit.
                </p>
                <p>
                    Ano, už tušíte, léčba v hodnotě 500 tis. korun není hrazena zdravotními pojišťovnami.
                    Zveřejňujeme po dohodě s rodiči Mikyho příběh a šíříme prosbu o pomoc pro chlapečka z&nbsp;našeho kraje, směrem k&nbsp;Vám.
                </p>
                <p>
                    Transparentní účet pro Mikyho je zřízen u ČSOB a má číslo: <strong>329868198/0300</strong>. Přispět můžete i naskenováním QR kódu
                </p>


                <StaticImage style={{ maxHeight: 200, maxWidth: 200 }} className='img' src="../images/qrkod_miky.png" formats={["png"]} alt='329868198/0300' layout='constrained' placeholder='blurred' />


          {/*  </section> */}
            {/* <StaticImage className='img' src="../images/mikulas_adamcik.jpg" alt='Fotka Mikuláše' layout='constrained' placeholder='blurred' /> */}
        </section><section className="section-klinika">
            <section className="section section-text " id="klinika">
                <h2 className="section-title title">
                    Sociální klinika
                </h2>
                {/* <p className="subtitle">Podpora služeb rozvoje Sociální kliniky v Moravskoslezském kraji</p> */}

                <p>Nadační fond Kousek po kousku podporuje projekty, které souvisí s&nbsp;rovnováhou těla, mysli a&nbsp;duše.</p>
                <p className="-text">Jedním z&nbsp;nich je spolupráce se&nbsp;Sociální klinikou, která poskytuje dostupnou terapeutickou službu všem, kteří se nacházejí v&nbsp;náročné životní situaci a&nbsp;nemohou si tyto služby z&nbsp;finančních důvodů dovolit.
                    Přesto na&nbsp;sobě chtějí pracovat, hledají změnu a&nbsp;uvědomují si&nbsp;díl své zodpovědnosti. Více najdete na&nbsp;<a href=""><strong>www.socialniklinika.cz</strong></a>, kde se&nbsp;i&nbsp;objednáte na&nbsp;konzultaci.</p>

                <p>I vz můžete využít pomoci Sociální klinikz, kterou podporuje i NF Kousek po kousku.
                    Bez obav. Zaplatíte jen to, co můžete.</p>

                <p className="subtitle">Nadechnout se a jít dál. Držíme palce všem odhodlaným. </p>


                {/* <a className="button link" href="https://www.socialniklinika.cz/">
                    sociálni klinika.cz
                    </a> */}
            </section>
            <StaticImage className='img' src="../images/logo_socialni_klinika.png" alt='Logo sociální kliniky' layout='constrained' placeholder='blurred' />
        </section>
        <section className="section-zahrada">
            <section className="section section-text right-align" id="zahrada">
                <h2 className="section-title title">
                    Zahrada Hojnosti</h2>
                <p className="text">Na&nbsp;pozemku Nadačního fondu Kousek po&nbsp;kousku ve&nbsp;Fulneku, o&nbsp;rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupně rodí výjimečné <strong>místo pro tělo, mysl a&nbsp;duši, harmonizační
                    a&nbsp;inspirativní prostor pro psychickou i fyzickou relaxaci.</strong> Zázemí zahrady umožní<strong> dobrovolnické projekty, sociální a mezigenerační stmelování, edukační přesah</strong> pro&nbsp;všechny věkové skupiny i&nbsp;spoluúčast na&nbsp;výjimečném ekonomickém procesu.
                    Prostřednictvím samosběrů květin, bylin a&nbsp;plodů jedlé Zahrady představí totiž NF naprosto <strong>unikátní způsob hospodaření pro dosažení soběstačnosti.</strong>
                </p>
                <div className="button-row ">
                    <a className="button filled link" href="https://podpora.kousekpokousku.cz/">Chci podpořit Zahradu</a>
                    <Link className="button " to="/zahrada-hojnosti">Více</Link>
                </div>
            </section>
            <StaticImage className='img' src='../images/paprika_hor.png' alt='Ruce drzi rostlinku' layout='constrained' placeholder='blurred' />
        </section>
        <section className="section-intervence" id="intervence">
            <section className="section section-text" >
                <h2 className="section-title title">
                    Intervence pro autismus
                </h2>
                {/* <p className="subtitle">
                    Dicta qui aliquam nihil harum nulla optio nisi modi sequi.
                    </p> */}
                <p className="text">
                    Posláním Intervence pro autismus je vytváření systematického procesu k pomoci řešení sociálních, vzdělávacích a adaptačních potíží osob s poruchou autistického spektra.
                    Spolek nabízí pomoc rodinám, které s autismem žijí a pedagogům, kteří mají s touto problematikou nějaké zkušenosti.
                    Vyměňují si poznatky, sdílejí radosti i starosti, radí se, vzájemně se podporují.  Intervence pro autismus pořádá aktivity, které přispívají ke zkvalitnění života lidí s autismem, spolupracuje s podobnými organizacemi nejen v Česku, organizuje semináře a přednášky pro veřejnost, chystá se vydávat brožury a publikace.
                </p>
                <p className="text">
                    Intervenci pro autismus budeme nadále podporovat. Morálně, komunitně a díky Vašim příspěvkům do Kouskování i finančně.
                    Proč? Lidí s některou z forem autismu, bohužel, přibývá. Největším problémem je, že se stávají terčem útoků na veřejnosti. Neznalost budí strach. Pojďme to kousek společně změnit.
                    Pokud bude společnost informována, bude lépe připravena na setkání s těmi, kteří neměli tolik štěstí.
                </p>
                <p className="subtitle">Děkujeme, že pomáháte.</p>

            </section>
            <StaticImage className='img' src="../images/puzzle.png" alt='Ruka držící puzzle' layout='constrained' placeholder='blurred' />
        </section>
        <section className="map-section" id="mapSection">
            <h1 className="title title-centered section-title">
                Mapa projektů
            </h1>
            <Map />
        </section>

    </Layout>
}

export default ProjektyPage;
