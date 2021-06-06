import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';

interface ZadatPageProps {

};

const ZadatPage: React.FC<ZadatPageProps> = ({ }) => {
    return <Layout>
        <main className="zadat">
            <section className="main-section section section-text">
                <h1 className="title">Aktuální informace pro rok 2021</h1>
                <p>
                    <p className="text">V roce 2021 máme již stěžejní podporované projekty vybrány, nic ale není definitivní. </p>
                    <p className="text">Své žádosti nám posílejte formou dopisu nebo emailem přes tlačítko žádat, uveďte své údaje a popište důvody, které Vás vedou k prosbě o příspěvek. V krátké době Vás budeme kontaktovat zpět. </p>

                    <p className="text">Pokud by byly vyhlášeny mimořádné granty, budou informace řádně zveřejněny.</p>
                </p>
                <a href="mailto:info@kousekpokousku.cz" className="button bigger button-filled mail">Napište nám</a>
                <p className="subtitle strong">Děkujeme za důvěru.</p>
            </section>
            <section className="dalsi-info section">
                <ul className="flex-row">
                    <li className="kontaktni-osoba">
                        <h2 className="title">Kontaktní osoba pro případné dotazy:</h2>
                        <p className="name">Iva Ježová</p>
                        <p className="job">hlavní koordinátorka Nadačního fondu Kousek po kousku</p>
                        <a href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>
                        <p className="phone">Telefon: <a href="tel:+420702022975">702 022 975</a></p>
                    </li>
                    <li className="ochrana-udaju">
                        <h2 className="title">Ochrana osobních údajů</h2>
                        <p>Společnost Nadační fond Kousek po kousku chrání poskytnuté osobní údaje v souladu s předpisy ČR a EU (GDPR)</p>
                        <p><a href="./Kousek po Kousku - GDPR prohlášení o ochraně osobních údajů.pdf" className="pdf">Ochrana osobních údajů</a> - Dokument PDF (112 kB)</p>
                    </li>
                </ul>
            </section>
        </main>
    </Layout>
}





export default ZadatPage;
