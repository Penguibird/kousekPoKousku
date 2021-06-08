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
        <section className="section-zahrada">
            <section className="section section-text right-align" id="zahrada">
                <h2 className="section-title title">
                    Zahrada
                    </h2>
                <p className="text">Na&nbsp;pozemku Nadačního fondu Kousek po&nbsp;kousku ve&nbsp;Fulneku, o&nbsp;rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupně rodí výjimečné <strong>místo pro tělo, mysl a&nbsp;duši, harmonizační
                            a&nbsp;inspirativní prostor pro psychickou i fyzickou relaxaci.</strong> Zázemí zahrady umožní<strong> dobrovolnické projekty, sociální a mezigenerační stmelování, edukační přesah</strong> pro&nbsp;všechny věkové skupiny i&nbsp;spoluúčast na&nbsp;výjimečném ekonomickém procesu.
                        Prostřednictvím samosběrů květin, bylin a&nbsp;plodů jedlé zahrady představí totiž NF naprosto <strong>unikátní způsob hospodaření pro dosažení soběstačnosti.</strong>
                </p>
                <Link className="button link" to="/zahrada-hojnosti">Více</Link>
            </section>
            <StaticImage className='img' src='../images/paprika_hor.png' alt='Ruce drzi rostlinku' layout='constrained' placeholder='blurred' />
        </section>
        <section className="section-klinika">
            <section className="section section-text " id="klinika">
                <h2 className="section-title title">
                    Sociální klinika
                    </h2>
                {/* <p className="subtitle">Podpora služeb rozvoje Sociální kliniky v Moravskoslezském kraji</p> */}

                <p>Nadační fond Kousek po kousku podporuje projekty, které souvisí s rovnováhou těla, mysli a duše.</p>
                <p className="-text">Jedním z nich je spolupráce se Sociální klinikou, která poskytuje dostupnou terapeutickou službu všem, kteří se nacházejí v náročné životní situaci a nemohou si tyto služby z finančních důvodů dovolit. Přesto na sobě chtějí pracovat, hledají změnu a uvědomují si díl své zodpovědnosti. Více najdete na <a href=""><strong>www.socialniklinika.cz</strong></a>, kde se i objednáte na konzultaci.</p>

                <p>Využijte možnosti, na kterou přispívá i NF Kousek po kousku.
                    Nemusíte mít obavy. Zaplatíte jen to, co můžete.</p>

                <p className="subtitle">Nadechnout se a jít dál. Držíme palce všem odhodlaným. </p>


                {/* <a className="button link" href="https://www.socialniklinika.cz/">
                    sociálni klinika.cz
                    </a> */}
            </section>
            <StaticImage className='img' src="../images/logo_socialni_klinika.png" alt='Logo sociální kliniky' layout='constrained' placeholder='blurred' />
        </section>
        <section className="section-intervence" id="intervence">
            <section className="section section-text" >
                <h2 className="section-title title">
                    Intervence autistů
                    </h2>
                {/* <p className="subtitle">
                    Dicta qui aliquam nihil harum nulla optio nisi modi sequi.
                    </p> */}
                <p className="text">
                    Intervence pro autismus sdružuje rodiny, které s autismem žijí a speciální pedagogy, kteří mají s touto problematikou dlouhodobé zkušenosti. Vyměňují si poznatky, sdílejí radosti i starosti, vzájemně se podporují. Důležitým posláním je také informovat společnost. Připravit okolí na setkání s těmi, kteří neměli tolik štěstí a trpí některou z poruch autismu.  Snaží se vysvětlit jejich počínání, přiblížit jejich emoce, strachy a vnímání.
                    </p>
                <p className="text">
                    Kromě toho iniciátor projektu Jan František Valů vede v Polance nad Odrou Bydlení s autisty, kde dohlíží na dospělé mladé muže, vede je k samostatnému životu, dodává jim jistotu a ukazuje, jak se dá dennodenní život zvládat.  Jezdí plavat, do kina, divadla, na výlety, denně se věnují lehké práci, cvičení, procházkám.
                    Rozhodli jsem se je dále podporovat. Morálně, komunitně a díky Vašim příspěvkům do Kouskování i finančně.
                     </p>
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
