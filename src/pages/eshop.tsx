import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const EshopPage = () => {
    return (
        <Layout>
            <h1 style={{marginTop: '2em'}}>Připravujeme</h1>
            <p className="text">V budoucnu zde budete moct podpořit Nadační fond koupí kousků z klášterního kouskování, grantů granda nebo produktů ze samozběru ze <Link to="/zahrada-hojnosti">Zahrady hojnosti</Link>.</p>
        </Layout>
    )
}

export default EshopPage
