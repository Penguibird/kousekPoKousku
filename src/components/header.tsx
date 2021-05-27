import * as React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ }) => {
    return <header>
        <Link className="logo" to="/">
            <StaticImage src="../images/logo_placeholder.png" alt='Kousek po Kousku' width={120} aspectRatio={1} layout='constrained' />
        </Link>
        <nav>
            <ul>
                <li className="dropdown">
                    <label htmlFor="dropdown-expand" className="navbar-link">O&nbsp;nadaci</label>
                    <input type="checkbox" name="dropdown-expand" id="dropdown-expand" />
                    <ul className="dropdown-content">
                        <li className="navbar-link" >
                            <Link to="/#o-nadaci">Naše mise</Link>
                        </li>
                        <li className="navbar-link" >
                            <Link to="/nadace-v-cislech">Nadace v číslech</Link>
                        </li>
                        <li className="navbar-link" >
                            <Link to="/projekty">Aktuálně podporujeme</Link>
                        </li>
                        <li className="navbar-link" >
                            <Link to="/media">Média</Link>
                        </li>
                    </ul>
                </li>
                <li className="navbar-link" >
                    <Link to="/projekty">projekty</Link>
                </li>
                <li className="navbar-link" >
                    <Link to="/zadat">žádat</Link>
                </li>
                <li className="navbar-link" >
                    <Link to="/zahrada-hojnosti">Zahrada hojnosti</Link>
                </li>
            </ul>
        </nav>
        <a href="google.cz" className="eshop-link button filled">E&nbsp;shop</a>
    </header>
}

export default Header;
