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
                Podpořte záměr vytvořit celoroční zázemí na <strong>Zahradě HOJNOSTI ve Fulneku.</strong>
            </p>
            <p className="text"> Zahrada HOJNOSTI se stane celosezónním místem pro pořádání setkání, kurzů, cvičení, workshopů a výuky i dalších aktivit dětí, a to nejen z místních škol.  Přispět může každý jakoukoli částkou. Kousek po kousku dáme obnos dohromady. </p>
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
                {/* Jurta o průměru 9 m s výhledem do Zahrady HOJNOSTI poskytne přístřeší a díky tomu
                možnost pozorovat přírodu bez omezení, za každého počasí.
                Díky Jurtě bude Zahrada Hojnosti žít v každé roční době.
                Bude sloužit všem generacím, které spojuje aktivní, tvořivý způsob života. */}
                O záměru JURTY jsme informovali na oslavě 10. narozenin NF KPK, na podzim 2021.
                Od té doby se cena v rámci zdražování zvedla na 1 200 000,- Kč, včetně kamen, s garancí ceny do 1.7. 2022.
                Do konce června bychom se potřebovali přiblížit cílové částce.
            </p>
            <Counter green={green} />
            <p
                className={"subtitle " + (green && " green")}
                style={{ marginBottom: '1em', maxWidth: '50ch' }}
            >
                Přispět může každý. Kolik každý z nás daruje, přesně tolik vloží i Nadační fond Kousek po kousku.
            </p>
            <p className="text">
                Pokud se podaří navýšit o 150 000 Kč, NF dary zdvojnásobí a ve stejný okamžik zaplatí zálohu na výrobu JURTY.

                Pak bude čas do konce září shromáždit posledních 150 000 Kč. S podílem NF se tak JURTA doplatí a začátkem října je reálné,

                abychom se vídali v novém přístřeší u prvních akcí.

                Cílová částka je 1 200 000 Kč.
            </p>
            <p className="text">O kolik částka roste, přesně tolik vloží Nadační fond KPK.</p>
            {/* <p className="text">
                Pokud se nám tedy <strong>do konce června společně podaří získat 150&nbsp;000&nbsp;Kč,</strong> NF dary zdvojnásobí a ve stejný okamžik zaplatí zálohu na výrobu JURTY.
                Pak bude čas do konce září shromáždit posledních 150&nbsp;000&nbsp;Kč. S podílem NF se tak JURTA doplatí a začátkem října je reálné, abychom se vídali v novém přístřeší u prvních akcí. Prostor začnou využívat také děti z nejen místních škol.
                Cílová částka <strong>je 1&nbsp;200&nbsp;000&nbsp;Kč.</strong>
                <strong>O kolik částka roste, přesně tolik vloží Nadační fond KPK.</strong>
            </p> */}
            <p className="text">Dary na Jurtu je možné zaslat na speciální transparentní účet:
                <strong> JURTA pro Zahradu HOJNOSTI ve Fulneku – č. 301075890/0300</strong>. Platbu můžete provést také naskenováním QR kódu:
            </p>
            <StaticImage className='img' style={{ margin: '0 auto' }} src="../images/jurtaUcetQR.png" alt='' layout='constrained' placeholder='blurred' />
            <p className="text">Nebo přes odkaz <a href="https://podpora.kousekpokousku.cz/jurta-pro-zahradu-hojnosti-ve-fulneku/">zde</a>, kde najdete darovací šeky s obrazem Magdalény Feilhauerové.</p>
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
