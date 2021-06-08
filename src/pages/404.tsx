import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout title="404 - Stránka nenalezena | Nadační fond Kousek po Kousku" >
      <h1 style={{marginTop: '2em'}}>Stránka nenalezena</h1>
      <Link to="/" className="button">Zpět na hlavní stránku</Link>
    </Layout>
  )
}

export default NotFoundPage
