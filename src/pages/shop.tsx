import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ShopPage = () => {
    React.useEffect(() => {
        window && window.location.replace("http://eshop.kousekpokousku.cz");
    },[])
    return (
        <Layout title="Eshop | Nadační fond Kousek po Kousku">
            {/* <h1 style={{margin: '3em auto'}}>Eshop</h1> */}
            <a href="http://eshop.kousekpokousku.cz">Pokud nejste přesměrování na eshop, klikněte zde.</a>
            {/* <p className="text">V budoucnu zde budete moct podpořit Nadační fond koupí kousků z klášterního kouskování, grantů granda nebo produktů ze samozběru ze <Link to="/zahrada-hojnosti">Zahrady hojnosti</Link>.</p> */}
        </Layout>
    )
}

export default ShopPage
