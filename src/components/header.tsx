import * as React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ }) => {
    return <header>
        <StaticImage className="logo" src="../images/logo_placeholder.png" alt='Kousek po Kousku' width={120} aspectRatio={1} layout='constrained' />
        <nav>
            <ul>
                <li className="dropdown">
                    <label htmlFor="dropdown-expand" className="navbar-link">O nadaci</label>
                    <input type="checkbox" name="dropdown-expand" id="dropdown-expand" />
                    <ul className="dropdown-content">
                        <li>
                            <Link to="/nase-mise">Naše mise</Link>
                        </li>
                        <li>
                            <Link to="/nadace-v-cislech">Nadace v číslech</Link>
                        </li>
                        <li>
                            <Link to="/aktualne-podporujeme">Aktuálně podporujeme</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/projekty">projekty</Link>
                </li>
                <li>
                    <Link to="/zadat">žádat</Link>
                </li>
                <li>
                    <Link to="/zahrada-hojnosti">Zahrada hojnosti</Link>
                </li>
            </ul>
        </nav>
        <a href="google.cz" className="eshop-link button filled">E shop</a>
    </header>
}

export default Header;
