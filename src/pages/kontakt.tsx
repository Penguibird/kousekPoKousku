import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';

import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";
import { API_KEY, getIcon } from '../components/map.tsx'
// @ts-ignore
import markerIcon from "../images/map_marker.svg";

import Layout from './../components/layout';

interface KontaktPageProps {

};

const KontaktPage: React.FC<KontaktPageProps> = ({ }) => {

    useEffect(() => {
        // console.log(projekty)
        //#region loading map
        const loader = new Loader({
            apiKey: API_KEY,
            version: "weekly",
        });
        let map;

        loader.load().then(() => {
            map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
                // center: { lat: 49.71198812010327, lng: 17.914118207168002 }, //fulneke
                center: { lat: 49.7074383573142, lng: 18.04993013680738 }, //zahrada
                // center: { lat: 49.85967567710321, lng: 17.914118207168002 }, // MSK center

                zoom: 16,
                // styles: grayStyle,
                mapTypeControl: false,
                streetViewControl: false,
            });



            const marker = new window.google.maps.Marker({

                position: { lat: 49.7074383573142, lng: 18.04993013680738 },
                icon: getIcon(45),
                map,
            })
        })
    }, [])
    return <Layout title="Kontakt | Nadační fond Kousek po Kousku" >
        <main className="kontakt">
            <section className="text">
                <p className="text">Umíme připravit a zrealizovat podporu na míru.
                    Pokud máte záměr, který je v souladu s Vaší životní filozofií nebo firemní kulturou, připravíme ho ve spolupráci s Vámi, dle Vašich představ.
                </p>
                <p className="text">Chcete podporovat nadané studenty? Osoby se zdravotním handicapem? Sportovní talenty nebo kluby? Zájmová sdružení? Znevýhodněné děti? Kontaktujte nás.
                </p>
            </section>
            <ul className="lidi">
                <li className="clovek">
                    <h2 className="jmeno">Ing. Martina Mazancová</h2>
                    <p className="popis">předsedkyně správní rady</p>
                    <a href="mailto:martina.mazancova@kousekpokousku.cz">martina.mazancova@kousekpokousku.cz</a>
                    <a href="tel:+420724328651">+420 724 328 651</a>
                </li>
                {/* <li className="clovek">
                    <h2 className="jmeno">Eva Loskotová</h2>
                    <p className="popis">PR &amp; komunikace</p>
                    <a href="mailto:eva.loskotova@kousekpokousku.cz">eva.loskotova@kousekpokousku.cz</a>
                    <a href="tel:+420776003455">+420 776 003 455</a>
                </li> */}
                <li className="clovek">
                    <h2 className="jmeno">MgA. Magdaléna Feilhauerová</h2>
                    <p className="popis">koordinátorka</p>
                    <a href="mailto:magdalena@kousekpokousku.cz">magdalena@kousekpokousku.cz</a>
                    <a href="tel:+420720768038">+420 720 768 038</a>
                </li>
            </ul>
            <div className="kontakt">
                <div className="flex-row">
                    <div id="map"></div>
                    <div className="adresa-wrapper">
                        {/* <h1>Kontakt</h1> */}
                        {/* <p className="left">Adresa:</p> */}
                        <p className="adresa">Malá strana 297<br /> PSČ  742 13 <br /> Studénka Butovice</p>

                        <p className="left">
                            <strong>IČO</strong>
                        </p>
                        <p>29393248</p>
                        {/* <p className="left">
                            <strong>DIČ</strong>
                        </p>
                        <p>CZ-29393248</p> */}

                        <p className="left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" /></svg>
                        </p>
                        <a href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>
                        <p className="left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                        </p>
                      {/*  <a href="tel:+420702022975">+420 702 022 975</a>
                      */}
                    </div>
                </div>
            </div>
 {/*
            <div className="zakladatel">
                <h2 className="title">Zakladatel</h2>
                <p className="jmeno"><span className="titul">Ing.</span> Vladimír Vyhlídal<span className="titul">, MBA</span></p>
            </div>

            <ul className="rady">
                <li className="spravni-rada">
                    <h2 className="title">Členové správní rady</h2>
                    <ul className="">
                        <li className="jmeno"><span className="titul">Ing.</span> Martina Mazancová</li>
                        <li className="jmeno">Ladislav Mazanec</li>
                    </ul>
                </li>
                <li className="dozorci-rada">
                    <h2 className="title">Členové dozorčí rady</h2>
                    <ul className="">
                        <li className="jmeno"><span className="titul">JUDr.</span> Karla Návedlová</li>
                        <li className="jmeno"><span className="titul">Mgr.</span> Darina Dvořáková</li>
                        <li className="jmeno"><span className="titul">Mgr.</span> Romana Řezníčková</li>
                    </ul>
                </li>
            </ul>
            */}



        </main>
    </Layout>
}

export default KontaktPage;
