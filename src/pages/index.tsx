import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import LayerWrapper from "../components/layer-wrapper";
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Loadable from '@loadable/component';

// @ts-ignore
import heroVideo from "../images/videos/hero_final.mp4"
// @ts-ignore
import heroVideo1366 from "../images/videos/homepage_1366_4Mb.mp4"
// @ts-ignore
import heroVideo768 from "../images/videos/homepage_768_4Mb.mp4"
// @ts-ignore
import heroVideo360 from "../images/videos/homepage_360_4Mb.mp4"
// @ts-ignore
import heroSnapshot from '../images/hero_snapshot.png'
// import AktualityCarousel from "../components/aktuality-carousel";
const AktualityCarousel = Loadable(() => import("../components/aktuality-carousel"))
// import Map from './../components/map';
const Map = Loadable(() => import('./../components/map'))

const IndexPage = () => {

  return (
    <Layout >
      <LayerWrapper className="main-page-hero hero">
        <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto">
          {/* <source media="(max-width: 360px)" src={heroVideo360} type="video/mp4" /> */}
          <source media="(max-width: 768px)" src={heroVideo768} type="video/mp4" />
          <source media="(max-width: 1366px)" src={heroVideo1366} type="video/mp4" />
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* <StaticImage layout="fullWidth" className="hero-image" src="../images/hero_placeholder.png" alt="" />
        <h1 className="hero-title">Lorem ipsum dolor sit amet</h1> */}
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
            <StaticImage className='img' src="../images/puzzle 2.png" alt='' layout='constrained' placeholder='blurred' objectFit='contain' />
            <h2>Intervence pro autismus</h2>
          </Link>
        </div>
      </section>

      <section className="image-section">
        <section className="text-section section kouskovani">
          <h1 className="section-title">Kouskování</h1>
          <p className="subtitle">Dejte kouskům druhou šanci!</p>
          <p className="text">Udržitelnost je&nbsp;téma, kterému se&nbsp;dlouhodobě věnujeme. Ano, výroba oblečení má&nbsp;na životní prostředí svůj dopad. Pomůžeme, pokud naši osobní spotřebu redukujeme.</p>
          <p className="text">Do&nbsp;šatníku si&nbsp;pořizujme <strong>základní, kvalitní, nadčasové kousky, nejlépe z&nbsp;recyklovatelných materiálů.</strong> Zejména díky dobrým materiálům vydrží ve&nbsp;skvělé kondici a&nbsp;slouží dlouho, často i&nbsp;někomu druhému. Právě nákup z&nbsp;druhé ruky je jedním z&nbsp;principů zpomalení cyklu neboli <strong>slou&nbsp;módy</strong>.</p>
          <p className="text">V Nadačním fondu Kousek po&nbsp;kousku máme s&nbsp;dobročinným bazarem pod&nbsp;značkou <strong>Kouskování</strong> dlouholeté zkušenosti. Veškeré kousky, které stále vypadají luxusně a&nbsp;z&nbsp;mnoha důvodů je&nbsp;již nevyužijete, rádi přijmeme a na&nbsp;našem eshopu nabídneme dál. Výtěžek pomůže dlouhodobě podporovanému projektu <Link to="/projekty#intervence"><strong>Intervence pro&nbsp;Autismus</strong></Link></p>
          <div className="button-row">
            <Link to="/kouskovani" className="button">Chci darovat kousek</Link>
            <Link to="/eshop" className="button section-button buy-button filled">
              Chci koupit kousek
            </Link>
          </div>
        </section>
        <StaticImage style={{ filter: 'brightness(1.2)' }} className='section-image img' src="../images/kouskovani_saty.png" alt='Ruka podává šaty a boty' layout='constrained' placeholder='blurred' />
      </section>

      <section className="text-section section galavecer">
        <h1 className="section-title">Slavnostní galavečer</h1>
        <p className="subtitle">Buďte u&nbsp;toho</p>
        <p className="text">
          Letošní rok je&nbsp;pro Nadační fond Kousek po&nbsp;kousku jubilejní. 10&nbsp;let kousků dobra připomeneme 16.&nbsp;října tohoto roku v&nbsp;kostele sv.&nbsp;Josefa ve&nbsp;Fulneku na&nbsp;Slavnostním Galavečeru. Zrekapitulujeme dosavadní počiny, připomeneme některé z&nbsp;podpořených projektů, přivítáme řadu hostů a&nbsp;prozradíme další plány.
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
        <p>Nadační fond Kousek po&nbsp;kousku rozdělil za&nbsp;10&nbsp;let přes 3&nbsp;mil.&nbsp;korun mezi 112&nbsp;projektů. Zapsal se do&nbsp;života mnoha jednotlivců, spolků a&nbsp;organizací. Připojil se&nbsp;k&nbsp;projektům, za&nbsp;kterými stojí šikovní a&nbsp;aktivní lidé nebo ti, kteří zrovna nejvíce pomoc potřebují.
        </p>
        <p>Věříme, že&nbsp;pokud část prostředků, které vzejdou z&nbsp;regionu, vrátíme zpět do&nbsp;místních projektů, přibude míst, kde se&nbsp;žije lépe a&nbsp;radostněji.</p>

        {/* <p className="subtitle blue">Připojte se, ať&nbsp;už jakoukoli částkou, jakýmkoli způsobem. </p> */}
        <p className="subtitle blue"> Děkujeme, že&nbsp;se přidáte.</p>
        <Link to="/eshop" className="button filled bigger">daruj</Link>

      </section>
      <section className="section section-center cisla">
        <ul className="cisla-infographic">
          <li className="cislo roky">
            <svg className="img calendar" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" /></svg>
            <p>
              <span className="cislo">10</span>
              <span className="popis">let</span>
            </p>
          </li>
          <li className="cislo people">
            <svg className="img people" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z" /></g></svg>            <p>
              <span className="cislo">112</span>
              <span className="popis">projektů</span>
            </p>
          </li>
          <li className="cislo penize">
            <svg className="img wallet" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 16V8c0-1.1.89-2 2-2h9V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-1h-9c-1.11 0-2-.9-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
            <p>
              <span className="cislo">3.1</span>
              <span className="popis">miliónů Kč</span>
            </p>
          </li>
        </ul>
      </section>

      <section className="section section-text" id="o-nadaci">
        <h1 className="title">O&nbsp;nadačním fondu</h1>
        <p className="text" style={{ textAlign: 'justify' }}>Každý člověk může kdykoliv během svého života zažívat radost, zapálení, touhu objevovat nové možnosti, realizovat je tvořivou cestou a tím zlepšovat sám sebe i svět kolem nás, tady a teď. </p>
        <p className="text">Pomáháme chápat a přijímat nové životní pohledy, uchopit život do vlastních rukou a osvojit si skutečné životní hodnoty. Zároveň prožíváme radost a uspokojení z toho, co děláme. Každý v sobě máme něco jedinečného, a to pomáháme objevit. Všichni máme volbu. My jsme si zvolili dělat to, co nás naplňuje. Pomáhat lidem, sobě a světu kolem nás.
        <Link className="button" to="/mise-vize-poslani">Více o nadačním fondu</Link>
        </p>
      </section>


      <section className="section sponzori">
        <h2 className="title text-center">Partneři</h2>
        <ul className="flex-row">
          <li>
            <StaticImage className='img' src="../images/logo_pars.png" alt='Pars Komponenty' layout='constrained' placeholder='blurred' />
          </li>
          {/* <li>
            <StaticImage className='img' src="../images/logo_ksb.jpg" alt='Kocián Šolc Balaštík' layout='constrained' placeholder='blurred' />
          </li> */}
        </ul>
      </section>
      {/* <section className="section section-map">
        <Map />
      </section> */}

    </Layout>
  )
}

export default IndexPage
