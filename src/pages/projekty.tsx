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
    return <Layout>
        <LayerWrapper className="hero" >
            <StaticImage src="../images/hero_placeholder.png" alt='' layout='constrained' />
            <h1 className="title hero-title">Aktuálně podporujeme</h1>
        </LayerWrapper>
        <section className="section section-text" id="zahrada">
            <h2 className="section-title title">
                Zahrada
            </h2>
            <p className="section-text">
                Quibusdam eveniet error rerum cum. Aut et rerum debitis sapiente voluptatum. Quibusdam eveniet error rerum cum. Aut et rerum debitis sapiente voluptatum.
            </p>
            <p className="section-text">
                Quis quia quo nam quasi perspiciatis pariatur dolores. Voluptatem suscipit ratione adipisci ut debitis qui est tenetur minima. Et qui maxime fugit accusamus. Quis quia quo nam quasi perspiciatis pariatur dolores. Voluptatem suscipit ratione adipisci ut debitis qui est tenetur minima. Et qui maxime fugit accusamus.
            </p>
            <Link className="button link" to="/zahrada-hojnosti">
                Více
            </Link>
        </section>
        <section className="section section-text" id="klinika">
            <h2 className="section-title title">
                Sociální klinika
            </h2>
            <p className="subtitle">
                Podpora služeb rozvoje Sociální kliniky v Moravskoslezském kraji
            </p>
            <p className="section-text">
                Účelem je poskytování kvalitní terapeutické služby lidem, kteří se nacházejí v náročné životní situaci a nemohou si tyto služby z finančních důvodu dovolit. Přesto na sobě chtějí pracovat, hledají změnu a uvědomují si díl své zodpovědnosti.
            </p>
            <a className="button link" href="https://www.socialniklinika.cz/">
                sociálni klinika.cz
            </a>
        </section>
        <section className="section section-text" id="rodina">
            <h2 className="section-title title">
                Rodina
            </h2>
            <p className="subtitle">
                Dicta qui aliquam nihil harum nulla optio nisi modi sequi.
            </p>
            <p className="section-text">
                Účelem je poskytování kvalitní terapeutické služby lidem, kteří se nacházejí v náročné životní situaci a nemohou si tyto služby z finančních důvodu dovolit. Přesto na sobě chtějí pracovat, hledají změnu a uvědomují si díl své zodpovědnosti.
            </p>
            <a className="button link" href="https://google.com">
                {/* //add eshop link */}
                Koupit kousek
            </a>
        </section>

        <section className="map-section">
            <h1 className="title title-centered section-title">
                Mapa projektů
            </h1>
            <Map />
        </section>

    </Layout>
}

export default ProjektyPage;
