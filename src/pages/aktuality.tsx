import * as React from 'react';
import Layout from '../components/layout';
import useAktuality, { Aktualita } from '../functions/useAktuality';
//import {Fragment, useState, useEffect} from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
interface AktualityPageProps {

};

const AktualityPage: React.FC<AktualityPageProps> = ({ }) => {
    const aktuality = useAktuality();
    const breakpoints = useBreakpoint();
    // aktuality.sort((a: Aktualita, b: Aktualita) => a.date.getTime() - b.date.getTime()).forEach(a => console.log(a.date))
    const aktualityMap = (akt: Aktualita, i: number) =>
        <div className="aktualita aktualita-inner" key={i}>
            {/* maybe change to <img /> */}
            {/* <StaticImage loading="eager" className="img" src="../images/hero_placeholder.png" alt="" layout="constrained" /> */}
            <GatsbyImage className="img" image={akt.image.image} alt={akt.image.imageAlt}></GatsbyImage>
            <h3 className="title">{akt.title}</h3>
            <p className="text" dangerouslySetInnerHTML={{ __html: akt.body }}></p>
            {/* {akt.link && (akt.link[0] == "/" ? <Link to={akt.link} className="aktuality-link link">Více</Link>
                : <a className="aktuality-link link" href={akt.link}>Více</a>)} */}
        </div>

    return <Layout  title="Aktuality | Nadační fond Kousek po Kousku" >
        <main className="aktuality">
            <section className="section section-hero-title">
                <h1 className="hero-title">Aktuality</h1>
            </section>
            <section className="aktuality-grid">

                {breakpoints.sm
                    ? <div className="flex-column">{aktuality.map(aktualityMap)}</div>
                    : aktuality.reduce((acc: Aktualita[][], a: Aktualita, i: number) => {
                        acc[i % 3].push(a);
                        return acc;
                    }, [[], [], []])
                        .map((column: Aktualita[], i: number) =>
                            <div className="flex-column" key={i}>
                                {column.map(aktualityMap)}
                            </div>)
                }
            </section>
        </main>
    </Layout >
}

export default AktualityPage;
