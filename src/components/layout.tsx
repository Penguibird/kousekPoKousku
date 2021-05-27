import * as React from 'react';
import { Fragment } from 'react';
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

import "../styles/style.scss";

interface Props {
    children: React.ReactNode,
    title?: string,
    
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <Fragment>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Pacifico&family=Rochester&family=Sacramento&display=swap" rel="stylesheet"></link>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout