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

    const scrollCallback = (e: Event) => {
        setTimeout(() => document.querySelector('header')?.classList.add('filled'), 100);
        document.removeEventListener('scroll', scrollCallback)
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollCallback);
    }, [])


    return <header className=""  >
        <Link className="logo" to="/">
            {logo == 'zahrada'
                ? <StaticImage src="../images/logo_zahrada_wbg.png" alt='Kousek po Kousku - zahrada hojnosti' width={150} aspectRatio={2135 / 2318} layout='constrained' />
                : <StaticImage src="../images/logo.svg" alt='Kousek po Kousku' width={150} aspectRatio={228 / 237} layout='constrained' />
            }
        </Link>
        {/* <span className="empty"></span> */}
        <input className="sm " type="checkbox" name="menu-expand" id="menu-expand" />
        <label className="sm navbar-link" htmlFor="menu-expand" >
            <svg className="menu closed" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            <svg className="menu open" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
        </label>
        <nav>
            <ul>
                <li className="dropdown">
                    <label htmlFor="dropdown-expand" className="navbar-link">O&nbsp;nás</label>
                    <input className="" type="checkbox" name="dropdown-expand" id="dropdown-expand" />
                    <ul className="dropdown-content">
                        <li className="navbar-link" >
                            <Link to="/mise-vize-poslani">Mise, vize, poslání</Link>
                        </li>
                        {/* <li className="navbar-link" >
                            <Link to="/nadace-v-cislech">Nadace v číslech</Link>
                        </li> */}
                        <li className="navbar-link" >
                            <Link to="/projekty">Aktuálně podporujeme</Link>
                        </li>
                        <li className="navbar-link" >
                            <Link to="/media">Média</Link>
                        </li>
                        <li className="navbar-link">
                            <Link to="/ke-stazeni">Ke stažení</Link>
                        </li>
                    </ul>
                </li>
                <li className="navbar-link" >
                    <Link to="/aktuality">aktuality</Link>
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
                <li className="navbar-link" >
                    <Link to="/kontakt">kontakt</Link>
                </li>
            </ul>
        </nav>
        <Link to="/eshop" className={"eshop-link button bigger filled " + color ?? ''}>Chci přispět</Link>
    </header>
}

export default Header;
