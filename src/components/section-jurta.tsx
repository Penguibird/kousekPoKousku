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
            <StaticImage className='img' style={{ margin: '0 auto' }} src="../images/jurtaUcetQR.png" alt='' layout='constrained' placeholder='blurred' />
            <p className="small">Nebo přes odkaz <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/">zde</a>, kde najdete darovací šeky s obrazem Magdalény Feilhauerové.</p>
            <div className="button-row">
                <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/" className={"button filled " + (green && " green")}>Přispět</a>
                {green
                    ? null
                    : <Link to="/zahrada-hojnosti" className={"button  outlined " + (green && " green")}>Více o Zahradě</Link>
                }
            </div>
            <p  className="small">
                Cena Jurty se, bohužel, od podzimu, kdy jsme výzvu na JURTU vyhlásili a vybrali výrobce,  zvedla v rámci zdražování na 1&nbsp;200&nbsp;000,-&nbsp;Kč.

                Je to cena včetně kamen a je garantovaná do 1.7.&nbsp;2022.
            </p>
            <p className="small">
                Pokud se nám tedy <strong>do konce června společně podaří získat 150&nbsp;000&nbsp;Kč,</strong> NF dary zdvojnásobí a ve stejný okamžik zaplatí zálohu na výrobu JURTY.
                Pak bude čas do konce září shromáždit posledních 150&nbsp;000&nbsp;Kč. S podílem NF se tak JURTA doplatí a začátkem října je reálné, abychom se vídali v novém přístřeší u prvních akcí. Prostor začnou využívat také děti z nejen místních škol.
                Cílová částka <strong>je 1&nbsp;200&nbsp;000&nbsp;Kč.</strong>
                <strong>O kolik částka roste, přesně tolik vloží Nadační fond KPK.</strong>
            </p>
        </div>
    </section >

}

export default JurtaSection;
