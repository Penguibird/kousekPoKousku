import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';

interface KouskovaniProps {

};
interface Vyrocka {
    src: IGatsbyImageData,
    year: string,
}


const Kouskovani: React.FC<KouskovaniProps> = ({ }) => {
    const data = useStaticQuery(graphql`query vyrockyKouskovani {
        allFile(
            filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/vyrockyKouskovani/"}}
        ) {
            edges {
                node {
                    name
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }`)

    const vyrocky: Vyrocka[] = data.allFile.edges
        .map(({ node }) => ({ src: node.childrenImageSharp[0].gatsbyImageData, year: node.name }))
        .sort((a: Vyrocka, b: Vyrocka) => Number.parseInt(a.year) - Number.parseInt(b.year))
        .reverse()
        ;


    return <Layout>
        <main className="kouskovani">
            <section className="title section section-title yellow section-centered">
                <h1 className="title">Klášterní Kouskování</h1>
            </section>
            <section className="kouskovani-column section section-centered">
                {vyrocky.map(({ src, year }, i) => <div className="vyrocka" key={i} style={{ marginTop: '5em' }}>
                    <h2 className="title text-center" style={{ margin: '1em' }}>{year}</h2>
                    <GatsbyImage objectFit="contain" className="img" alt={`Vyrocni zprava za rok ${year}`} image={src} />
                </div>
                )}
            </section>
        </main>
    </Layout>
}

export default Kouskovani;
