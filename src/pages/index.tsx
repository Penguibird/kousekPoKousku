import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import LayerWrapper from "../components/layer-wrapper";
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Loadable from '@loadable/component';

// import AktualityCarousel from "../components/aktuality-carousel";
const AktualityCarousel = Loadable(() => import("../components/aktuality-carousel"))
import Map from './../components/map';

const IndexPage = () => {

  return (
    <Layout>
      <LayerWrapper className="main-page-hero hero">
        <StaticImage layout="fullWidth" className="hero-image" src="../images/hero_placeholder.png" alt="" />
        <h1 className="hero-title">Lorem ipsum dolor sit amet</h1>
      </LayerWrapper>

      <section className="aktualne-podporujeme">
        <h1 className="title">Aktuálně podporujeme</h1>

        {/* Projekty using GatsbyImage, harder to do */}
        {/* <div className="projekty">
          <Link to="/zahrada-hojnosti" className="projekt">
            <LayerWrapper >
              <StaticImage src="../images/hero_placeholder.png" alt='' layout='constrained' />
              <h2>Zahrada hojnosti</h2>
            </LayerWrapper>
          </Link>
          <Link to="/zahrada-hojnosti" className="projekt">
            <LayerWrapper >
              <StaticImage src="../images/hero_placeholder.png" alt='' layout='constrained' />
              <h2>Zahrada hojnosti</h2>
            </LayerWrapper>
          </Link>
          <Link to="/zahrada-hojnosti" className="projekt">
            <LayerWrapper >
              <StaticImage src="../images/hero_placeholder.png" alt='' layout='constrained' />
              <h2>Zahrada hojnosti</h2>
            </LayerWrapper>
          </Link>
        </div> */}

        <div className="projekty">
          <Link to="/zahrada-hojnosti" className="projekt zahrada">
            <h2>Zahrada hojnosti</h2>
          </Link>
          <Link to="/socialni-klinika" className="projekt klinika">
            <h2>Sociální klinika</h2>
          </Link>
          <Link to="/rodina" className="projekt rodina">
            <h2>Rodina</h2>
          </Link>
        </div>
      </section>

      <section className="text-section section kouskovani">
        <h1 className="section-title">Kouskování</h1>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Risus fusce ultrices ac neque adipiscing. Malesuada erat risus duis massa a vestibulum sit arcu volutpat. Pharetra ante cursus sodales tristique adipiscing vitae ac amet id.
        </p>
        <a href="/" className="button section-button buy-button">
          koupit
        </a>
      </section>

      <section className="text-section section galavecer">
        <h1 className="section-title">Slavnostní galavečer</h1>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Risus fusce ultrices ac neque adipiscing. Malesuada erat risus duis massa a vestibulum sit arcu volutpat. Pharetra ante cursus sodales tristique adipiscing vitae ac amet id.
        </p>
        <a href="/" className="button section-button buy-button">
          koupit vstupenku
        </a>
      </section>

      <section className="aktuality">
        <h1 className="section-title">Aktuality</h1>
        <AktualityCarousel />
      </section>

      <section className="section section-centered call-to-action">
        <h1 className="title">Připoj svůj kousek dobra</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fusce ultrices ac neque adipiscing. </p>
        <a href="/" className="button filled">daruj</a>
      </section>

      <section className="section section-text">
        <h1>O nadaci</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fusce ultrices ac neque adipiscing. Malesuada erat risus duis massa a vestibulum sit arcu volutpat. Pharetra ante cursus sodales tristique adipiscing vitae ac amet id. . </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fusce ultrices ac neque adipiscing. Malesuada erat risus duis massa a vestibulum sit arcu volutpat. Pharetra ante cursus sodales tristique adipiscing vitae ac amet id. . </p>
        <Link to="/">Více o nadace</Link>
      </section>

      <section className="section section-map">
        <Map />
      </section>

    </Layout>
  )
}

export default IndexPage
