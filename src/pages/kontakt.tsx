import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';

interface KontaktPageProps {

};

const KontaktPage: React.FC<KontaktPageProps> = ({ }) => {
    return <Layout>
        <main className="kontakt">
            <div className="adresa-wrapper">
                <p className="adresa">Malá strana 297, PSČ 742 13 Studénka Butovice</p>
                <a href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>
                <a href="tel:+420702022975">+420 702 022 975</a>
            </div>

            <ul className="lidi">
                <li className="clovek">
                    <h2 className="jmeno">Martina Mazancová</h2>
                    <p className="popis">ředitelka</p>
                    <a href="mailto:martina.mazancova@ikousekpokousku.cz">martina.mazancova@kousekpokousku.cz</a>
                    <a href="tel:+420724328651">+420 724 328 651</a>
                </li>
                <li className="clovek">
                    <h2 className="jmeno">Eva Loskotová</h2>
                    <p className="popis">public relations &amp; komunikace</p>
                    <a href="mailto:eva.loskotova@kousekpokousku.cz">eva.loskotova@kousekpokousku.cz</a>
                    <a href="tel:+420776003455">+420 776 003 455</a>
                </li>
                <li className="clovek">
                    <h2 className="jmeno">Iva Ježová</h2>
                    <p className="popis">asistentka</p>
                    <a href="mailto:iva.jezova@kousekpokousku.cz">iva.jezova@kousekpokousku.cz</a>
                    <a href="tel:+420736426683">+420 736 426 683</a>
                </li>
            </ul>

            <ul className="rady">
                <li className="spravni-rada">
                    <h2 className="title">Členové správní rady</h2>
                    <ul className="|">
                        <li className="jmeno"><span className="titul">Ing.</span> Martina Mazancová</li>
                        <li className="jmeno">Ladislav Mazanec</li>
                        <li className="jmeno"><span className="titul">Ing.</span> Vladimír Vyhlídal, MBA</li>
                    </ul>
                </li>
                <li className="dozorci-rada">
                    <h2 className="title">Členové dozorčí rady</h2>
                    <ul className="|">
                        <li className="jmeno"><span className="titul">Mgr.</span> Darina Dvořáková</li>
                        <li className="jmeno"><span className="titul">JUDr.</span> Karla Návedlová</li>
                        <li className="jmeno"><span className="titul">Mgr.</span> Romana Řezníčková</li>
                    </ul>
                </li>
            </ul>

        </main>
    </Layout>
}

export default KontaktPage;
