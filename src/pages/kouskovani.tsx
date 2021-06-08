import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import { Link } from 'gatsby';

interface KouskovaniPageProps {

};

const KouskovaniPage: React.FC<KouskovaniPageProps> = ({ }) => {
    return <Layout  title="Kouskování | Nadační fond Kousek po Kousku" >
        <main className="kouskovani-darovat">
            <section className="section section-center">
                <p className="text" style={{ textAlign: 'justify' }}><strong>Děkujeme, že jste se rozhodli přispět kousky, kterým společně dáme další šanci a vrátíme je  do života. </strong>
                 Oblečení v perfektním stavu, které na první pohled nejeví známky poškození, prosíme, čisté a vyžehlené doručte osobně, poštou nebo prostřednictvím kurýra na adresu:</p>
                <p className="address">
                    <p>Nadační Fond Kousek po Kousku</p>
                    <p>Malá strana 297</p>
                    <p>742 13  Studénka-Butovice</p>
                </p>
                {/* Ve Studénce, kde je sklad Kouskování si můžete po dohodě své vybrané kousky také vyzvednout, nebo Vám balíček zašleme na uvedenou adresu.
                Svým nákupem přispějete na další projekt. Všechny podpořené projekty najdete zde/ link na mappu. Ty, související s výtěžkem z Kouskování jsou označeny. */}
                <p className="text " style={{ textAlign: 'justify' }}>Darováním svých kousků do Kouskování pomůžete dlouhodobě podporovanému projektu <Link to="/projekty#intervence"><strong>Intervence pro Autismus</strong></Link>. Všechny podpořené projekty najdete <Link to="/projekty" >zde</Link>. Ty, související s výtěžkem z Kouskování jsou označeny.</p>
                <p className="dekujeme subtitle">Děkujeme, že pomáháte</p>
            </section>
        </main>
    </Layout>
}

export default KouskovaniPage;
