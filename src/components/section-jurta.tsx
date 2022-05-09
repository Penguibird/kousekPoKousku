import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Counter from './numberCounter';

interface JurtaSectionProps extends Partial<React.PropsWithChildren<React.ReactHTMLElement<HTMLDivElement>>> {
    green?: boolean
};

const JurtaSection: React.FC<JurtaSectionProps> = ({ children, green = true, ...props }) => {
    return <section className="text-section section section-jurta" {...props}>
        <div className="grid-top">
            <h1 className="section-title title">
                Jurta pro Zahradu HOJNOSTI
            </h1>
            <p className="text">
                <strong>Zahrada Hojnosti potřebuje celoroční zázemí.</strong> Pro setkávání, workshopy, cvičení i pro děti ze škol, které by mohly trávit nějaký čas mimo
                lavice.
            </p>
        </div>
        <StaticImage className='grid-img img section-image' src="../images/jurta_white.jpg" alt='Jurta - Magdaléna Feilhauerová' layout='constrained' placeholder='blurred' />
        <div
            className="grid-bottom"
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <p className="text">
                Jurta o průměru 9 m s výhledem do Zahrady HOJNOSTI poskytne přístřeší a díky tomu
                možnost pozorovat přírodu bez omezení, za každého počasí.
                Díky Jurtě bude Zahrada Hojnosti žít v každé roční době.
                Bude sloužit všem generacím, které spojuje aktivní, tvořivý způsob života.
            </p>
            <Counter green={false} />
            <p
                className={"subtitle " + (green && " green")}
                style={{ marginBottom: '1em', maxWidth: '50ch' }}
            >
                Přispět může každý. Kolik každý z nás daruje, přesně tolik vloží i Nadační fond Kousek po kousku.
            </p>
            <p className="small">Dary na Jurtu je možné zaslat na speciální transparentní účet:
                <strong> JURTA pro Zahradu HOJNOSTI ve Fulneku – č. 301075890/0300</strong>. Platbu můžete provést také naskenováním QR kódu:
            </p>
            <StaticImage className='img' src="../images/jurtaUcetQR.png" alt='' layout='constrained' placeholder='blurred' />
            <p className="small">Nebo přes odkaz <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/">zde</a>, kde najdete darovací šeky s obrazem Magdalény Feilhauerové.</p>
            <div className="button-row">
                <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/" className={"button filled " + (green && " green")}>Přispět</a>
                {green
                    ? null
                    : <Link to="/zahrada-hojnosti" className={"button  outlined " + (green && " green")}>Více o Zahradě</Link>
                }
            </div>
        </div>
    </section >

}

export default JurtaSection;
