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
        </main>
    </Layout>
}

export default VyrocniZpravyPage;
