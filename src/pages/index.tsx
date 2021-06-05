import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import LayerWrapper from "../components/layer-wrapper";
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Loadable from '@loadable/component';

// import AktualityCarousel from "../components/aktuality-carousel";
const AktualityCarousel = Loadable(() => import("../components/aktuality-carousel"))
// import Map from './../components/map';
const Map = Loadable(() => import('./../components/map'))

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
          <Link to="/zahrada-hojnosti" className="projekt-link zahrada">
            <StaticImage className='img' src="../images/jahoda.png" alt='' layout='constrained' placeholder='blurred' objectFit='contain' />
            <h2>Zahrada hojnosti</h2>
          </Link>
          <Link to="/projekty#klinika" className="projekt-link klinika">
            <StaticImage className='img' src="../images/handshake.png" alt='' layout='constrained' placeholder='blurred' objectFit='cover' />
            <h2>Sociální klinika</h2>
          </Link>
          <Link to="/projekty#intervence" className="projekt-link intervence">
            <StaticImage className='img' src="../images/puzzle.png" alt='' layout='constrained' placeholder='blurred' objectFit='contain' />
            <h2>Intervence autistů</h2>
          </Link>
        </div>
      </section>

      <section className="text-section section kouskovani">
        <h1 className="section-title">Kouskování</h1>
        <p className="subtitle">Dejte kouskům druhou šanci!</p>
        <p className="text">Udržitelnost je téma, kterému se dlouhodobě věnujeme. Ano, výroba oblečení má na životní prostředí svůj dopad. Pomůže už to, pokud naši osobní spotřebu redukujeme.</p>

        <p className="text">Do šatníku si pořizujme <strong>základní, kvalitní, nadčasové kousky, nejlépe z&nbsp;recyklovatelných materiálů.</strong> Zejména díky dobrým materiálům vydrží ve skvělé kondici a slouží dlouho, často i někomu druhému. Právě nákup z druhé ruky je jedním z principů zpomalení cyklu neboli <strong>slou módy</strong>.</p>

        <p className="text">V Nadačním fondu Kousek po kousku máme s dobročinným bazarem pod značkou <strong>Kouskování</strong> dlouholeté zkušenosti. Veškeré kousky, které stále vypadají skvěle a z mnoha důvodů je již nevyužijete, rádi přijmeme a <a className="link eshop-link" href="">na našem eshopu</a> nabídneme dál. Výtěžkem bude podpořen některý z dalších projektů.</p>

        <div className="button-row">
          <Link to="/kouskovani" className="button">Chci darovat kousek</Link>
          <a href="/" className="button section-button buy-button filled">
            Chci koupit kousek
          </a>
        </div>
      </section>

      <section className="text-section section galavecer">
        <h1 className="section-title">Slavnostní galavečer</h1>
        <p className="subtitle">Buďte u toho</p>
        <p className="text">
          Letošní rok je pro Nadační fond Kousek po kousku jubilejní. 10 let kousků dobra připomeneme 16. října tohoto roku v kostele sv. Josefa ve Fulneku na Slavnostním Galavečeru. Zrekapitulujeme dosavadní počiny, připomeneme některé z podpořených projektů, přivítáme řadu hostů  a prozradíme další plány.
        </p>

        <p className="text">Součástí Galavečera bude koncert popové houslistky <a className="inline" href="https://www.youtube.com/watch?v=-49HE-gAxok">Lucie Klasek &amp; The Stringz.</a></p>
        <a href="/" className="button section-button buy-button">
          koupit vstupenku
        </a>
      </section>

      <section className="aktuality">
        <h1 className="section-title">Aktuality</h1>
        <LayerWrapper>
          <div style={{ height: '400px' }}></div>
          <div>
            <AktualityCarousel />
          </div>
        </LayerWrapper>

      </section>

      <section className="section section-centered call-to-action">
        <h1 className="title">Připoj svůj kousek dobra</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fusce ultrices ac neque adipiscing. </p>
        <Link to="/eshop" className="button filled bigger">daruj</Link>
      </section>

      <section className="section section-text" id="o-nadaci">
        <h1 className="title">O nadaci</h1>
        <p className="text">Každý člověk může kdykoliv během svého života zažívat radost, zapálení, touhu objevovat nové možnosti, realizovat je tvořivou cestou a tím zlepšovat sám sebe i svět kolem nás, tady a teď. </p>
        <p className="text">Pomáháme chápat a přijímat nové životní pohledy, uchopit život do vlastních rukou a osvojit si skutečné životní hodnoty. Zároveň prožíváme radost a uspokojení z toho, co děláme. Každý v sobě máme něco jedinečného, a to pomáháme objevit. Všichni máme volbu. My jsme si zvolili dělat to, co nás naplňuje. Pomáhat lidem, sobě a světu kolem nás.
        <Link className="button" to="/mise-vize-poslani">Více o nadaci</Link>
        </p>
      </section>


      <section className="section sponzori">
        <h2 className="title text-center">Partneři</h2>
        <ul className="flex-row">
          <li>
            <StaticImage className='img' src="../images/logo_pars.png" alt='Pars Komponenty' layout='constrained' placeholder='blurred' />
          </li>
          <li>
            <StaticImage className='img' src="../images/logo_ksb.jpg" alt='Kocián Šolc Balaštík' layout='constrained' placeholder='blurred' />
          </li>
        </ul>
      </section>
      {/* <section className="section section-map">
        <Map />
      </section> */}

    </Layout>
  )
}

export default IndexPage
