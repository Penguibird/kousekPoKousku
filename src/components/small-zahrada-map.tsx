import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';

import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";
import { API_KEY, getIcon } from './map.tsx'
// @ts-ignore
import markerIcon from "../images/map_marker.svg";



type SmallMapProps = {

}
export default function SmallMap(props: SmallMapProps) {
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
                center: { lat: 49.718729357197944, lng:  17.90409554493908 }, //zahrada
                // center: { lat: 49.85967567710321, lng: 17.914118207168002 }, // MSK center

                zoom: 14,
                // styles: grayStyle,
                mapTypeControl: false,
                streetViewControl: false,
            });


            // highlight Fulnek
            // const fulnekMarker = new window.google.maps.Marker({
            //     position: { lat: 49.71198812010327, lng: 17.914118207168002 },
            //     label: {
            //         fontSize: '20px',
            //         text: 'Fulnek',
            //     },
            //     icon: getIcon(1),
            //     map,
            // });
            // google.maps.event.addListener(map, 'zoom_changed', () => {
            //     const zoom = map.getZoom();
            //     const visible: boolean = zoom == undefined ? false : zoom < 10;
            //     fulnekMarker.setVisible(visible);
            // });
            const marker = new window.google.maps.Marker({
                
                position: { lat: 49.718729357197944, lng:  17.90409554493908 },
                icon: getIcon(40),
                map,
            })
        })
    }, [])


    return <section className="small-map">
        {/* <h1 className="title-centered title title-center"></h1> */}
        <div className="flex-row">
            <div className="map-wrapper">
                <div id="map"></div>
            </div>
            <div className="adresa">
                <p className="title green">Zahrada Hojnosti</p>
                <p>Palackého 298</p>
                <p>Fulnek</p>
                <p>742 45</p>
            </div>
        </div>
    </section>
}