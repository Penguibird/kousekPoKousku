import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

type Image = {
    url: string,
    alt: string,
}

interface Props {
    color?: 'red' | 'green',
    logo?: 'default' | 'zahrada' | Image,
    children?: React.ReactNode,
}

const Header: React.FC<Props> = ({ color, logo }) => {
    function onetime(node: Document | HTMLElement, type: string, callback: EventListener) {
        node.addEventListener(type, function (e) {
            // @ts-ignore
            e.target.removeEventListener(e.type, callback);
            return callback(e);
        });
    }
    useEffect(() => {
        onetime(document, 'scroll', (e) => {
            document.querySelector('header')?.classList.add('filled')
        });
    }, [])


    return <header className=""  >
        <Link className="logo" to="/">
            {logo == 'zahrada'
                ? <StaticImage src="../images/logo-zahrada3.jpg" alt='Kousek po Kousku' width={150} aspectRatio={1} layout='constrained' />
                : <StaticImage src="../images/logo_placeholder.png" alt='Kousek po Kousku' width={150} aspectRatio={1} layout='constrained' />
            }
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
        <a href="google.cz" className={"eshop-link button filled" + color ?? ''}>E&nbsp;shop</a>
    </header>
}

export default Header;
