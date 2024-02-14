import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
//import {Fragment, useState, useEffect} from 'react';

interface VyrocniZpravyPageProps {

};

const VyrocniZpravyPage: React.FC<VyrocniZpravyPageProps> = ({ }) => {
    return <Layout title="Ke stažení | Nadační fond Kousek po Kousku" >
        <main className="ke-stazeni">
            <section className="vyrocni-zpravy">
                <h2>Výroční zprávy</h2>
                <ul style={{ listStyleType: 'none' }} >
                    <li className="zprava">
                        <a href={`/ke-stazeni/VÝROČNÍ ZPRÁVA 2022.pdf`}>Výroční zpráva 2022 (PDF)</a>
                    </li>
                    <li className="zprava">
                        <a href={`/ke-stazeni/VÝROČNÍ ZPRÁVA 2021.pdf`}>Výroční zpráva 2021 (PDF)</a>
                    </li>
                    <li className="zprava">
                        <a href={`/ke-stazeni/VÝROČNÍ ZPRÁVA 2020.pdf`}>Výroční zpráva 2020 (PDF)</a>
                    </li>
                    <li className="zprava">
                        <a href={`/ke-stazeni/VÝROČNÍ ZPRÁVA 2019.pdf`}>Výroční zpráva 2019 (PDF)</a>
                    </li>
                    <li className="zprava">
                        <a href={`/ke-stazeni/VÝROČNÍ ZPRÁVA 2018.pdf`}>Výroční zpráva 2018 (PDF)</a>
                    </li>
                    {[2, 3, 4, 5, 6, 7].reverse().map((n: number) => <li className="zprava" key="n">
                        <a href={`/ke-stazeni/vyrocni-zprava-nfkpk-201${n}.pdf`}>Výroční zpráva 201{n} (PDF)</a>
                    </li>)}
                </ul>
            </section>

            <section className="status">
                <h2>Statut</h2>
                <a href="/ke-stazeni/statut-nadacniho-fondu-kousek-po-kousku.pdf"> Statut nadačního fondu (PDF) </a>
            </section>

            <section className="listina">
                <h2>Zakládací listina</h2>
                <a href="/ke-stazeni/zakladaci-listina.zip"> Zakládací listina (ZIP) </a>
            </section>

            <section className="projekty">
                <h2>Pořízení vybavení do Zahrady Hojnosti</h2>
                <a style={{ textDecoration: 'none' }}>Cílem projektu je rozšířit spolkové zařízení a zázemí Zahrady Hojnosti ve Fulneku, kterou spravuje Nadační fond Kousek po kousku.
Jedná se především o pořízení technického vybavení a vybavení pro venkovní výuku, dále zakoupení ekologických WC a venkovního mobiliáře do zahrady.
Celkové náklady na projekt činily 497.150 Kč, dotace činí 80 %.
</a>
                <a href="/ke-stazeni/publicita.pdf">Publicita PDF </a>
            </section>

            {/* <section id="milostive-leto">
                <h2>Milostivé Léto</h2>
                <StaticImage className='img' src="../images/Milostivé léto-1.png" alt='' layout='constrained' placeholder='blurred'/>
                <a href="/ke-stazeni/Dopis exekutorovi - vzor.docx">Dopis exekutorovi - vzor</a>
                <a href="/ke-stazeni/dopis krajského ředitele.pdf">Dopis krajského ředitele</a>
                <a href="/ke-stazeni/Milostivé léto.pdf.pdf">Milostivé léto - PDF s informacemi</a>

            </section> */}
        </main>
    </Layout>
}

export default VyrocniZpravyPage;
