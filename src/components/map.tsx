import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
const API_KEY = "AIzaSyAY2Tat - yTfQzZbsSXkAMajLb8qsYsrXDU";
import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

import LayerWrapper from './layer-wrapper';

// @ts-ignore
import markerIcon from "../images/map_marker.svg";
// @ts-ignore
import mapOutline from '../images/map_outline_yellow.svg';
import { useStaticQuery, graphql } from 'gatsby';

interface MapProps {

}

export type Year = 2000 | 2001 | 2002 | 2003 | 2004 | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 | 2037 | 2038 | 2039 | 2040 | 2041 | 2042 | 2043 | 2044 | 2045 | 2046 | 2047 | 2048 | 2049 | 2050

export interface Projekt {
    id: string,
    position: google.maps.LatLng | google.maps.LatLngLiteral,
    marker?: google.maps.Marker,

    name: string,
    price: number,
    description: string,
    year: Year,
    image?: {
        url: string,
        altText: string,
    }
    locationName?: string,
    kouskovani?: boolean,
}

const projekty: Projekt[] = [
    {
        id: 'a',
        position: { lat: 49.85967567710321, lng: 17.914118207168002 },

        name: 'Sample Projekt',
        price: 10000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2013,
        locationName: 'Vesnice'
    },
    {
        id: 'b',
        position: { lat: 49.85967567710321, lng: 17.834118207168002 },

        name: 'Sample Projekt 2',
        price: 30000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2013,
        locationName: 'Dira'
    },
    {
        id: 'c',
        position: { lat: 49.85967567710321, lng: 17.5165634118207168002 },

        name: 'Sample Projekt 2',
        price: 30000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2013,
        locationName: 'Dira'
    },
    {
        id: 'd',
        position: { lat: 49.5324167567710321, lng: 17.834118207168002 },

        name: 'Sample Projekt 2',
        price: 30000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2013,
        locationName: 'Dira'
    },
    {
        id: 'e',
        position: { lat: 49.85967567710321, lng: 17.866642118207168002 },

        name: 'Sample Projekt 2',
        price: 30000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2014,
        locationName: 'Dira'
    },
    {
        id: 'f',
        position: { lat: 49.6577567710321, lng: 18.834118207168002 },

        name: 'Sample Projekt 2',
        price: 30000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2014,
        locationName: 'Dira'
    },
    {
        id: 'g',
        position: { lat: 49.684567710321, lng: 17.54618207168002 },

        name: 'Sample Projekt 2',
        price: 30000,
        description: 'Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima. Dolorum et atque et incidunt dolorem est minima.',
        year: 2014,
        locationName: 'Dira'
    },
]

const Map: React.FC<MapProps> = ({ }) => {
    const additionalOptions: Partial<LoaderOptions> = {};
    let map: google.maps.Map;
    let markers: google.maps.Marker[] = [];

    const getIcon = (length: number): google.maps.Icon => {
        const size = new window.google.maps.Size(length, length);
        return {
            size,
            scaledSize: size,
            url: markerIcon,
        }
    }

    const data = useStaticQuery(graphql`query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    rawMarkdownBody
                    frontmatter {
                        id
                        description
                        
                        locationName
                        position {
                            lat
                            lng
                        }
                        price
                        title
                        year
                    }
                }
                }
            }
    }`); 
    const projekty: Projekt[] = data.allMarkdownRemark.edges
        .map((edge: any) => ({ name: edge.node.frontmatter.title, ...edge.node.frontmatter }))
        .sort((a: Projekt, b: Projekt) => (b.year - a.year))
        .reverse();


    useEffect(() => {
        console.log(projekty)
        //#region loading map
        const loader = new Loader({
            apiKey: API_KEY,
            version: "weekly",

            ...additionalOptions,
        });

        loader.load().then(() => {
            map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
                // center: { lat: 49.71198812010327, lng: 17.914118207168002 }, //fulnek
                center: { lat: 49.85967567710321, lng: 17.914118207168002 }, // MSK center

                zoom: 9,
                styles: grayStyle,
                mapTypeControl: false,
                streetViewControl: false,
            });


            // highlight Fulnek
            const fulnekMarker = new window.google.maps.Marker({
                position: { lat: 49.71198812010327, lng: 17.914118207168002 },
                label: {
                    fontSize: '20px',
                    text: 'Fulnek',
                },
                icon: getIcon(1),
                map,
            });
            google.maps.event.addListener(map, 'zoom_changed', () => {
                const zoom = map.getZoom();
                const visible: boolean = zoom == undefined ? false : zoom < 10;
                fulnekMarker.setVisible(visible);
            });

            markers = projekty.map((projekt, i: number) => {
                const marker = new window.google.maps.Marker({
                    position: projekt.position,
                    // icon: '../images/map_marker.svg',
                    icon: getIcon(35),
                    map: map,
                })
                marker.addListener('click', highlightProjekt(i))
                return marker;
            })

            // , 18.436931
            // , 17.686974
            // 49.880670, 17.146264
            // 49.550606, 18.859233

            // const imageBounds = {
            //     north: 50.327999,
            //     south: 49.392601,
            //     east: 18.859233,
            //     west: 17.146264,
            // };

            // const regionOverlay = new google.maps.GroundOverlay(
            //     mapOutline,
            //     imageBounds
            // );
            // regionOverlay.setMap(map);


        });
        //#endregion loading map
    }, [])


    const selectYear = (year: number) => () => {
        document.getElementById(year.toString() + "-anchor")?.scrollIntoView({ behavior: 'smooth' });
        setHighlighter(years.indexOf(year));
    }
    const years: number[] = projekty.reduce((acc: number[], p) => {
        if (p.year && !acc.includes(p.year)) acc.push(p.year);
        return acc;
    }, [])
    let lastSelectedMarker: google.maps.Marker | null = null;

    const highlightProjekt = (i: number) => () => {
        // todo highlighting of projekts
        const marker = markers[i]
        map.setCenter(marker.getPosition() as google.maps.LatLng);
        map.setZoom(11); // todo test how small

        lastSelectedMarker?.setIcon(getIcon(35))
        marker.setIcon(getIcon(45));
        lastSelectedMarker = marker;

        setTimeout(() => {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(() => { marker.setAnimation(null); }, 750);
        }, 500);

        const projekt = projekty[i];
        // document.getElementById(projekt.id)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        var target = document.getElementById(projekt.id);
        // console.log({ target })
        var targetParent = target?.parentElement;
        if (targetParent && targetParent.scrollTop && target) {
            targetParent.scrollTo({
                top: (target.offsetTop - targetParent.offsetTop - 40),
                behavior: 'smooth',
            });
        }


    }

    const scrollHandler = (e: React.SyntheticEvent) => {
        const projekty = e.target as HTMLElement;
        let selectedYear;
        years.forEach((year, i) => {
            let _ = document.getElementById(year.toString())?.offsetTop;
            if (_ && (projekty.scrollTop + projekty.offsetTop + 1) >= _) selectedYear = i;
            // console.log(_)
        })
        setHighlighter(selectedYear ?? '0');
    }

    const setHighlighter = (n: string | number) => {
        document.getElementById("highlight")?.style.setProperty("--offset", n + '')
    }
    // const [selectedYear, setSelectedYear] = useState();

    return <div className="map-wrapper">
        <LayerWrapper className="map">
            <div style={{ height: '498px' }}></div>
            <div className="mapp" id="map" ></div>
        </LayerWrapper>
        <LayerWrapper className="year-wrapper">
            <div className="year-highlight">
                <div className="highlight" id="highlight"></div>
            </div>
            <div className="year-list">
                {years.reverse().map((year) => <button onClick={selectYear(year)} key={year} id={"year-selector-" + year.toString()}>
                    {year}
                </button>)}
            </div>
        </LayerWrapper>
        <div className="map-projekty" onScroll={scrollHandler}>
            {projekty.reduce((acc: JSX.Element[], p: Projekt, i: number, arr: Projekt[]) => {



                //add things
                acc.push(<div className="Projekt" key={p.id} id={p.id}>
                    <button className="projekt-title-button" onClick={highlightProjekt(i)}>
                        <h3 style={{ textAlign: 'left' }} className="projekt-title">{p.name}</h3>
                    </button>
                    <p className="money">{p.price} Kč</p>
                    <p className="description">{p.description}</p>
                </div>)


                // Add Year seperator yellow stripes if needed
                const isLast = i == (arr.length - 1);
                const yearDoesntMatchNext = !isLast && p.year && arr[i + 1].year && p.year !== arr[i + 1].year;
                if (isLast || (yearDoesntMatchNext)) {
                    // const p = arr[i - 1];
                    acc.push(
                        <div className="year-seperator" style={{ marginTop: 0 }} key={p.year} id={p.year?.toString()}>{p.year}</div>
                    )
                    acc.push(
                        <div style={{ height: 0, visibility: 'collapse', margin: 0 }} className="year-anchor" id={p.year?.toString() + "-anchor"}></div>
                    )
                }
                return acc;
            }, []).reverse()}
        </div>
    </div>
}

export default Map;


const grayStyle = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#737373"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "0.16"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#696969"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#b7b7b7"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "off"
        },
        {
            "color": "#d6d6d6"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    }
]