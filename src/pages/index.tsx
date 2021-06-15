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
// const Map = Loadable(() => import('./../components/map'))
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const IndexPage = () => {
  const breakpoints = useBreakpoint();
  const placeholderImage = <StaticImage className='img' src='../images/hero_snapshot.png' alt='Fulnek - Tady jsme doma' layout='fullWidth' placeholder='none' />
  return (
    <Layout >
      <LayerWrapper className="main-page-hero hero">
        {breakpoints.noVideo
          ? placeholderImage
          : breakpoints.xs
            ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto">
              <source src={heroVideo360} type="video/mp4" />
            </video>

            : breakpoints.sm
              ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto">
                <source src={heroVideo768} type="video/mp4" />
              </video>
              : breakpoints.md
                ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto">
                  <source src={heroVideo1366} type="video/mp4" />
                </video>
                : breakpoints ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto">
                  <source src={heroVideo} type="video/mp4" />
                </video>
                  : placeholderImage
        }

        {/* <StaticImage layout="fullWidth" className="hero-image" src="../images/hero_placeholder.png" alt="" />
        <h1 className="hero-title">Lorem ipsum dolor sit amet</h1> */}
      </LayerWrapper>

      {/* <section className="aktualne-podporujeme">
        <h1 className="title">Aktuálně podporujeme</h1>

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
      </section> */}

      <section className="text-section section intro-section">
          <h1 className="title">Kousek po&nbsp;kousku přispíváme k&nbsp;lepšímu životu v&nbsp;Moravskoslezském kraji</h1>
        <ul className="claims">
          <li className="icon-wrapper">
            <p className="title blue">Už 10.&nbsp;rok podporujeme aktivní a&nbsp;tvořivé lidi.</p>
            <Link className="red" to="/projekty">Přečtěte&nbsp;si o&nbsp;nich.</Link>
            {/* <StaticImage className='img photo' src="../images/puzzle 2.png" alt='' layout='constrained' placeholder='blurred' objectFit="c" /> */}
            <svg className="img svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M16,13c3.09-2.81,6-5.44,6-7.7C22,3.45,20.55,2,18.7,2c-1.04,0-2.05,0.49-2.7,1.25C15.34,2.49,14.34,2,13.3,2 C11.45,2,10,3.45,10,5.3C10,7.56,12.91,10.19,16,13z M13.3,4c0.44,0,0.89,0.21,1.18,0.55L16,6.34l1.52-1.79 C17.81,4.21,18.26,4,18.7,4C19.44,4,20,4.56,20,5.3c0,1.12-2.04,3.17-4,4.99c-1.96-1.82-4-3.88-4-4.99C12,4.56,12.56,4,13.3,4z"/><path d="M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M3,20v-7h2v7H3z M13.97,20.41L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79 c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z"/></g></g></g></g></svg>
          </li>
          <li className="icon-wrapper">
            <p className="title blue">Budujeme vlastní nadační projekt –&nbsp;Zahrada Hojnosti. </p>
            <Link className="red" to="/zahrada-hojnosti">Zjistit více.</Link>
            {/* <StaticImage className='img photo' src="../images/jahoda.png" alt='' layout='constrained' placeholder='blurred' objectFit="c" /> */}
            <svg className="img svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/></svg>
          </li>
          <li className="icon-wrapper">
            <p className="title blue">Jsme připraveni zprostředkovávat podporu i&nbsp;pro další firmy v&nbsp;Moravskoslezském kraji.</p>
            <Link className="red" to="/eshop">Chcete se&nbsp;zapojit? Kousek po&nbsp;kousku se&nbsp;toho dá&nbsp;zvládnout hodně.</Link>
            <svg className="img svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M404.267 315.41c-10.048-20.949-45.995-50.027-80.725-78.123-19.371-15.659-37.675-30.464-49.344-42.133-2.923-2.944-7.296-3.883-11.157-2.496-7.189 2.603-11.627 4.608-15.125 6.165-5.333 2.389-7.125 3.2-14.315 3.925a10.663 10.663 0 00-7.808 4.672c-15.083 22.549-30.699 20.629-41.131 17.131-3.328-1.109-3.925-2.539-4.245-3.904-2.24-9.365 9.003-31.168 23.573-45.739 34.667-34.688 52.544-43.371 90.304-26.496 42.837 19.157 85.76 34.155 86.187 34.304a10.654 10.654 0 0013.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589-.427-.149-42.496-14.848-84.48-33.643-48.917-21.867-75.755-7.467-114.091 30.891-14.592 14.592-34.411 44.117-29.291 65.771 2.197 9.216 8.683 16.043 18.325 19.221 24.171 7.979 46.229.341 62.656-21.461 6.784-1.045 10.475-2.581 16.021-5.077a209.95 209.95 0 017.467-3.2c12.203 11.456 28.672 24.789 46.016 38.805 31.36 25.365 66.923 54.123 74.923 70.763 3.947 8.213-.299 13.568-3.179 16.021-4.224 3.627-10.005 4.779-13.141 2.581-3.456-2.368-7.957-2.517-11.52-.384a10.66 10.66 0 00-5.141 10.304c.725 6.784-5.483 10.667-8.171 12.011-6.827 3.456-13.952 2.859-16.619.384-2.987-2.773-7.275-3.584-11.072-2.176-3.797 1.429-6.443 4.928-6.827 8.981-.64 6.997-5.824 13.717-12.587 16.341-3.264 1.237-8 1.984-12.245-1.899a10.791 10.791 0 00-9.749-2.475 10.65 10.65 0 00-7.488 6.72c-.405 1.067-1.323 3.627-11.307 3.627-7.104 0-19.883-4.8-26.133-8.939-7.488-4.928-54.443-39.957-94.997-73.92-5.696-4.8-15.552-15.083-24.256-24.171-7.723-8.064-14.784-15.381-18.411-18.453-4.544-3.84-11.264-3.264-15.04 1.259-3.797 4.501-3.243 11.243 1.259 15.04 3.307 2.795 9.707 9.557 16.768 16.917 9.515 9.941 19.349 20.224 25.963 25.771 39.723 33.259 87.467 69.163 96.981 75.413 7.851 5.163 24.768 12.416 37.867 12.416 10.517 0 18.603-2.411 24.213-7.125 7.509 2.923 16.043 2.944 24.256-.256 9.707-3.755 17.685-11.328 22.208-20.501 8.405 1.792 18.027.533 26.773-3.861 8.555-4.309 14.741-10.901 17.813-18.603 8.491.448 17.237-2.56 24.469-8.768 12.247-10.474 15.617-26.772 8.535-41.471z"/><path d="M213.333 138.663h-96c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h96c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667zM435.52 292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189 20.949c-4.885 3.285-6.187 9.92-2.901 14.805a10.717 10.717 0 008.875 4.715c2.027 0 4.096-.576 5.931-1.813l31.189-20.949c4.884-3.286 6.185-9.92 2.9-14.806zM369.301 343.613c-7.637-6.016-41.792-40.981-62.912-62.997-4.075-4.267-10.837-4.416-15.083-.32-4.267 4.075-4.395 10.837-.32 15.083 5.483 5.717 53.845 56.128 65.088 65.003a10.623 10.623 0 006.592 2.283c3.136 0 6.272-1.408 8.405-4.075 3.649-4.609 2.86-11.329-1.77-14.977zM326.677 365.01c-12.779-10.219-44.885-44.331-52.139-52.224-4.011-4.352-10.731-4.608-15.083-.64-4.331 3.989-4.629 10.752-.64 15.083.384.405 38.699 41.771 54.528 54.443a10.72 10.72 0 006.656 2.325c3.115 0 6.229-1.387 8.341-3.989 3.671-4.609 2.924-11.329-1.663-14.998zM284.224 386.493c-15.211-12.821-46.336-45.952-52.416-52.459-4.032-4.309-10.795-4.544-15.083-.512-4.309 4.032-4.523 10.773-.512 15.083 8.747 9.365 38.528 40.939 54.251 54.208a10.638 10.638 0 006.869 2.517c3.029 0 6.059-1.301 8.171-3.797 3.797-4.523 3.221-11.243-1.28-15.04z"/><path d="M124.672 120.253C106.389 102.93 33.28 97.319 11.307 96.018c-3.029-.149-5.824.853-7.957 2.88A10.662 10.662 0 000 106.663v192c0 5.888 4.779 10.667 10.667 10.667h64c4.608 0 8.704-2.965 10.133-7.36 1.557-4.779 38.315-117.589 43.157-173.056.278-3.243-.917-6.443-3.285-8.661zM66.88 287.997H21.333V118.098c34.283 2.709 71.275 8.597 84.715 15.125-5.653 46.72-31.232 129.728-39.168 154.774zM501.333 117.33c-83.755 0-130.219 21.44-132.16 22.336-2.773 1.301-4.843 3.712-5.696 6.635s-.427 6.059 1.173 8.661c13.184 21.227 54.464 139.115 62.4 167.872a10.665 10.665 0 0010.283 7.829h64c5.888 0 10.667-4.779 10.667-10.667v-192a10.657 10.657 0 00-10.667-10.666zm-10.666 192h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325 16.277-5.525 51.243-15.019 101.995-16.213V309.33z"/></svg>
            {/* <StaticImage className='img photo' src="../images/handshake.png" alt='' layout='constrained' placeholder='blurred' objectFit="c" /> */}
          </li>
        </ul>
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
