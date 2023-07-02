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
                Pomozte našemu záměru!
            </p>
            <p className="text">Cílem je využívat <strong>Zahradu HOJNOSTI ve Fulneku celoročně, bez ohledu na počasí. </strong>Snažíme se, aby vzniklo výjimečné místo pro pořádání akcí, kurzů, cvičení, workshopů, setkávání, výuky i dalších aktivit pro dospělé i dětí, a to nejen z místních škol. </p>
        </div>
        <StaticImage className='grid-img img section-image' src="../images/jurta_white.jpg" alt='Jurta - Magdaléna Feilhauerová' layout='constrained' placeholder='blurred' />
        <div
            className="grid-bottom"
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <p className="text">Cílová suma, za&nbsp;kterou se dá kvalitní Jurta pořídit, se po zdražování vyšplhala na&nbsp;1&nbsp;200&nbsp;000 Kč.
                Kousek po&nbsp;kousku <strong>dáváme společně obnos dohromady</strong> už&nbsp;od&nbsp;podzimu 2021, kdy Nadační fond Kousek po&nbsp;kousku slavil 10. narozeniny a&nbsp;projekt zveřejnil. </p>
            <p className="text">Od&nbsp;té doby byla <strong>začátkem léta 2022 z&nbsp;transparentního účtu zaslána polovina částky výrobci a&nbsp;proces realizace odstartoval. </strong></p>
            <p className="text"><strong>Na&nbsp;doplatek Jurty můžete stale své příspěvky zasílat. </strong>
                Pro&nbsp;tento účel je zřízen speciální transparentní účet Jurta pro&nbsp;Zahradu&nbsp;HOJNOSTI ve Fulneku, s&nbsp;číslem 301075890/0300. Kolik na&nbsp;účet pošlete, stejnou částku přidá i&nbsp;NF KPK. Částka, ať už jakákoli, se&nbsp;ihned znásobí.</p>
            <p className="text">
                Velice děkujeme všem, kteří jste se nadchli a&nbsp;rozhodli tento odvážný počin podpořit. Těšíme se na&nbsp;setkávání v&nbsp;9m Jurtě v&nbsp;Zahradě HOJNOSTI ve&nbsp;Fulneku. Protože život je třeba žít a&nbsp;užívat.
            </p>
            <Counter green={green} />
            <p
                className={"subtitle " + (green && " green")}
                style={{ marginBottom: '1em', maxWidth: '50ch' }}
            >
                Přispět může každý. Kolik každý z&nbsp;nás daruje, přesně tolik vloží i&nbsp;Nadační fond Kousek po kousku.
            </p>
            <p className="text">Dary na Jurtu je možné zaslat na speciální transparentní účet:
                <strong> JURTA pro Zahradu HOJNOSTI ve Fulneku – č.&nbsp;301075890/0300</strong>. Platbu můžete provést také naskenováním QR kódu:
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
