import * as React from 'react';
import { Fragment } from 'react';
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

import "../styles/style.scss";


interface Props {
    children: React.ReactNode,
    title?: string,
    description?: string,
    headerProps?: React.ComponentProps<typeof Header>,
}

const Layout: React.FC<Props> = ({ children, title, description, headerProps }) => {
    const defaultDescription: string = "" as const;
    return (
        <Fragment>
            <Helmet>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Pacifico&family=Rochester&family=Sacramento&display=swap" rel="stylesheet" />

                <title>{title ?? "Nadační fond Kousek po Kousku"}</title>
                <meta property="og:title" content={title ?? "Nadační fond Kousek po Kousku"} />
                <meta property="twitter:title" content={title ?? "Nadační fond Kousek po Kousku"} />

                <meta name="description" content={description ?? defaultDescription}></meta>
                <meta property="og:description" content={description ?? defaultDescription} />
                <meta property="twitter:description" content={description ?? defaultDescription} />

                <meta property="og:site_name" content="Kousek po kousku" />
                <meta property="twitter:site" content="Kousek po kousku" />

                <meta name="viewport" content="width=device-width,initial-scale=1.0" />


            </Helmet>
            <Header {...headerProps} />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout