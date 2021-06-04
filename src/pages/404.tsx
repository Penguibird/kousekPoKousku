import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 style={{marginTop: '2em'}}>Stránka nenalezena</h1>
      <Link to="/" className="button">Zpět na hlavní stránku</Link>
    </Layout>
  )
}

export default NotFoundPage
