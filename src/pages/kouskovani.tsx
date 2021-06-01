import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import Layout from './../components/layout';
import { Link } from 'gatsby';

interface KouskovaniPageProps {

};

const KouskovaniPage: React.FC<KouskovaniPageProps> = ({ }) => {
    return <Layout>
        <main className="kouskovani-darovat">
            <p className="text">Děkujeme, že jste se rozhodli přispět kousky, kterým společně dáme další šanci a vrátíme je  do života.
             Oblečení v perfektním stavu, které na první pohled nejeví známky poškození, prosím, čisté a vyžehlené doručte osobně, poštou nebo prostřednictvím kurýra na adresu:</p>

            <div className="address">
                <p>Pars Komponenty</p>
                <p>Malá strana 451</p>
                <p>Butovice, 742 13</p>
            </div>

            {/* Ve Studénce, kde je sklad Kouskování si můžete po dohodě své vybrané kousky také vyzvednout, nebo Vám balíček zašleme na uvedenou adresu.
            Svým nákupem přispějete na další projekt. Všechny podpořené projekty najdete zde/ link na mappu. Ty, související s výtěžkem z Kouskování jsou označeny. */}

            <p className="text">Darováním svých kousků do Kouskování přispějete na další projekt. Všechny podpořené projekty najdete <Link to="/projekty" >zde</Link>. Ty, související s výtěžkem z Kouskování jsou označeny.</p>
            <p className="dekujeme">Děkujeme</p>
        </main>
    </Layout>
}

export default KouskovaniPage;
