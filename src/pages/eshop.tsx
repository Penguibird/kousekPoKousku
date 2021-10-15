import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const EshopPage = () => {
    React.useEffect(() => {
        window && window.location.replace("http://podpora.kousekpokousku.cz");
    },[])
    return (
        <Layout title="eshop">
            {/* <h1 style={{margin: '3em auto'}}>Eshop</h1> */}
            <a href="http://podpora.kousekpokousku.cz">Pokud nejste přesměrování na eshop, klikněte zde.</a>
            {/* <p className="text">V budoucnu zde budete moct podpořit Nadační fond koupí kousků z klášterního kouskování, grantů granda nebo produktů ze samozběru ze <Link to="/zahrada-hojnosti">Zahrady hojnosti</Link>.</p> */}
        </Layout>
    )
}

export default EshopPage
