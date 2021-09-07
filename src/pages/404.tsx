import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout title="404 - Stránka nenalezena | Nadační fond Kousek po Kousku" >
      <div style={{margin: '1em', marginBottom: "2em"}}>
        <h1 style={{marginTop: '3em'}}>Stránka nenalezena</h1>
        <Link to="/" className="button">Zpět na hlavní stránku</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
