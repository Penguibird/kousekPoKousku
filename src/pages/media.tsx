import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';

interface MediaPageProps {

};

const MediaPage: React.FC<MediaPageProps> = ({ }) => {
    return <Layout  title="Média | Nadační fond Kousek po Kousku" >
        {/* Popisek melting pot videa */}
        <main className="media">
            <section className=" section hero yellow">
                <h1 className="title hero-title">Média</h1>
            </section>
            <section className="section section-center">
                <h2 className="title">Klášterní kouskování 2019</h2>
                <p>A máme za sebou další úspěšný, letos už 6 ročník Klášterního kouskování ve Fulneku, kde se díky Vám podařilo vybrat neuvěřitelných 91 495 korun!</p>
                <iframe width="500" height="380" src="https://www.youtube.com/embed/2eI66_Pu9ZA" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </section>

            <section className="section section-center">
                <h2 className="title">Klášterní kouskování 2018</h2>
                <p>A máme za sebou další úspěšný, letos už 5 ročník Klášterního kouskování ve Fulneku, kde se díky Vám podařilo vybrat neuvěřitelných 108 981 korun!</p>
                <iframe width="500" height="380" src="https://www.youtube.com/embed/gacnR3W1Q58" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>

            <section className="section section-center">
                <h2 className="title">Klášterní kouskování 2017</h2>
                <p>V roce 2017 proběhl 4. ročník Klášterního kouskování, kde se podpořilo mnoho projektů a poprvé se zde i objevila "Výstava ze Šuplíku"</p>
                <iframe width="500" height="380" src="https://www.youtube.com/embed/cYGaZhGqShs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>

            <section className="section section-center">
                <h2 className="title">Příběh písmene "M"</h2>
                <p>Melting Pot - myšlenky bez hranic, mezinárodní diskuzní fórum, které probíhá v době konání festivalu Colors of Ostrava, prezentuje písmeno M, které vzniklo v PARS Komponenty s.r.o</p>
                <iframe width="500" height="380" src="https://www.youtube.com/embed/glahpcWhJhE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </section>

            <section className="section section-center">
                <h2 className="title">Klášterní kouskování 2016</h2>
                <p>V roce 2016 proběhl 3. ročník Klášterního kouskování.</p>
                <iframe width="500" height="380" src="https://www.youtube.com/embed/HQWmKwQ_ico" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>

        </main>
    </Layout>
}

export default MediaPage;
