import * as React from 'react';

const Footer = ({ }) => {
    return <footer>
        <ul className="items">
            <li className="adresa">
                <h5>Naše adresa</h5>
                <p>Malá Strana 297</p>
                <p>742 13  Studénka – Butovice</p>
                {/* <p>742 13</p> */}
            </li>
            <li className="kontakt">
                <h5>Kontakt</h5>
                {/* <p className="name">Iva Ježová</p> */}
                <a href="mailto:info@kousekpokousku.cz">info@kousekpokousku.cz</a>
                <p className="phone">telefon: <a href="tel:+420702022975">+420 702 022 975</a></p>
            </li>
            {/* <li className="partneri">
                <h5>Naši partneři</h5>
                <a href="https://www.parskomponenty.cz" className="company">Pars Komponenty s.r.o</a>
                <a href="http://www.ksb.cz/" className="company">Kocián Šolc Balaštík</a>
            </li> */}
        </ul>
        <p className="signature">© {(new Date()).getFullYear()} - Vojtěch Loskot, <a href="https://softwarovereznictvi.cz">Softwarové řeznictví</a> </p>
    </footer>
}

export default Footer;
