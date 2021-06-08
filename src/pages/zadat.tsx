import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';

interface ZadatPageProps {

};

const ZadatPage: React.FC<ZadatPageProps> = ({ }) => {
    return <Layout title="Žádat | Nadační fond Kousek po Kousku" >
        <main className="zadat">
            <section className="main-section section section-text">
                <h1 className="title">Aktuální informace pro rok 2021</h1>
                <p>
                    <p className="text">V roce 2021 máme již stěžejní podporované projekty vybrány, nic ale není definitivní. Pokud máte důvody, proč o podporu žádat, napište na <a href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>, uveďte své údaje a popište důvody. Budeme Vás kontaktovat.</p>

                    <p className="text">Pokud by byly vyhlášeny mimořádné granty, budou informace řádně zveřejněny.</p>
                </p>
                <a href="mailto:info@kousekpokousku.cz" className="button bigger button-filled mail">Napište nám</a>
                <p className="subtitle strong">Děkujeme za důvěru.</p>
            </section>
            <section className="dalsi-info section">

                <div className="ochrana-udaju" style={{ margin: '0 auto', width: 'max-content' }}>
                    <h2 className="title">Ochrana osobních údajů</h2>
                    <p>Společnost Nadační fond Kousek po kousku chrání poskytnuté osobní údaje v souladu s předpisy ČR a EU (GDPR)</p>
                    <p><a href="./Kousek po Kousku - GDPR prohlášení o ochraně osobních údajů.pdf" className="pdf">Ochrana osobních údajů - Dokument PDF (112 kB)</a></p>
                </div>
            </section>
        </main>
    </Layout>
}





export default ZadatPage;
