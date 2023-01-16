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
import { useStaticQuery, graphql } from 'gatsby';
import { useEffect } from 'react';
import useAktuality from "../functions/useAktuality";
import JurtaSection from './../components/section-jurta';

const IndexPage = () => {
  const breakpoints = useBreakpoint();
  const placeholderImage = <StaticImage className='img' src='../images/hero_snapshot.png' alt='Fulnek - Tady jsme doma' layout='fullWidth' placeholder='none' />

  const aktuality = useAktuality()
    .slice(0, 20);

  // let pocetProjektu = 113;

  const data = useStaticQuery(graphql`query Cisla {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projekty\//"}}) {
      edges {
        node {
          frontmatter {
            price
          }
        }
      }
    }
  }
  `);

  let year = new Date().getFullYear() - 2011;
  if (typeof year != "number" || year > 99) {
    console.log("Error loading info from projekty db, using fallback value.", year);
    year = 10;
  }

  let pocetProjektu: number = data.allMarkdownRemark.edges.length;
  if (typeof pocetProjektu != "number" || pocetProjektu < 90 || pocetProjektu > 999) {
    console.log("Error loading info from projekty db, using fallback value.", pocetProjektu);
    pocetProjektu = 113;
  }

  const oneMillion = 1000000
  let cena: number = data.allMarkdownRemark.edges
    .map((edge: any) => edge.node.frontmatter.price)
    .reduce((acc: number, val: number) => acc + val, 0)
    ;
  cena = (cena / oneMillion);
  if (typeof cena != "number" || cena > 1000 || cena < 1) {
    console.log("Error loading info from projekty db, using fallback value.", cena);
    cena = 3.1;
  }
  let cenyText: string = cena.toFixed(1);

  const approxeq = (v1: number, v2: number): boolean => {
    const epsilon = 0.001;

    return Math.abs(v1 - v2) < epsilon;
  };

  const animateValue = (obj: Element | null, start: number, end: number, duration: number, decimal: number = 0): void => {
    if (window && obj) {
      const stepperValueBoundary = decimal === 0
        ? 1
        : 1 / (decimal * 10);
      const equal = decimal === 0
        ? (a: number, b: number) => a === b
        : approxeq;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;

        // Calculate how far along in the animation we are
        const progress = Math.min((timestamp - startTimestamp) / (duration), 1);

        // let t = (timestamp - startTimestamp);
        // let c = ;
        // let d = duration;
        // let b = start;

        // t = progress;

        // let val =  


        // From that calculate what number to show
        obj.innerHTML = (progress * (end - start) + start).toFixed(decimal).toString();
        // obj.innerHTML = (-(end - start) * progress * (progress - 2) + start).toFixed(decimal).toString();

        // If the animation isnt finished, queue up next animation
        // * uses approxeq to deal with floating points
        if (!equal(progress, 1)) {
          window.requestAnimationFrame(step);
        }
      };
      // Kick off the animation
      window.requestAnimationFrame(step);
    }
  }

  const startValue = 0;
  const animDuration = 1000;
  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateValue(document.getElementById('year'), startValue ?? 0, year, animDuration);
          animateValue(document.getElementById('pocetProjektu'), startValue ?? 0, pocetProjektu, animDuration);
          animateValue(document.getElementById('cenyText'), startValue ?? 0, Number.parseFloat(cenyText), animDuration, 1);
        }
      })
    }, {});

    const target = document.querySelector('section.cisla');
    if (target) observe.observe(target);
  }, [])

  // React.useLayoutEffect(() => {
  //   const video = document.querySelector('.hero-video');
  //   if (video) video.addEventListener('loadeddata', () => {
  //     const target = document.getElementById('placeholderImage');
  //     // console.log(target)
  //     if (target) target.style.display = 'none';
  //   }, false)
  // }, [breakpoints])

  return (
    <Layout >
      <LayerWrapper className="main-page-hero hero">
        {breakpoints.noVideo
          ? placeholderImage
          : breakpoints.xs
            ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto" playsInline>
              <source src={heroVideo360} type="video/mp4" />
            </video>

            : breakpoints.sm
              ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto" playsInline>
                <source src={heroVideo768} type="video/mp4" />
              </video>
              : breakpoints.md
                ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto" playsInline>
                  <source src={heroVideo1366} type="video/mp4" />
                </video>
                : breakpoints ? <video className="hero-video" width="1920" height="1080" muted autoPlay loop preload="auto" playsInline>
                  <source src={heroVideo} type="video/mp4" />
                </video>
                  : placeholderImage
        }

        {/* <StaticImage layout="fullWidth" className="hero-image" src="../images/hero_placeholder.png" alt="" />
        <h1 className="hero-title">Lorem ipsum dolor sit amet</h1> */}
      </LayerWrapper>



      <section className="text-section section intro-section">
        <h1 className="title" style={{ fontWeight: 500 }}>Kousek po&nbsp;kousku přispíváme k&nbsp;lepšímu životu v&nbsp;našem, Moravskoslezském kraji</h1>
        <ul className="claims">
          <li className="icon-wrapper">

            <p className="title blue top-text">Už dvanáctý&nbsp;rok podporujeme lokální projekty a aktivní, tvořivé lidi</p>
            <Link className="red link" to="/aktualne-podporujeme">Přečtěte&nbsp;si o&nbsp;nich</Link>
            <svg className="img svg" height="511pt" viewBox="0 -24 511.999 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="M50 262.598c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 0" /><path d="M459.617 297.273l-94.273 32.41c.418-2.32.652-4.687.652-7.09 0-22.054-17.941-40-40-40h-64.758c-1.718 0-3.414-.44-4.91-1.284l-52.832-29.715a70.059 70.059 0 00-34.328-9h-70.89C94.151 230.957 83.034 222.598 70 222.598H10c-5.523 0-10 4.476-10 10v179.996c0 5.523 4.477 10 10 10h60c12.738 0 23.66-8.004 27.996-19.246 11.32 1.406 24.418 4.754 32.649 9.691l52.296 31.379a127.509 127.509 0 0065.606 18.176c18.312 0 36.055-3.844 52.738-11.422l186.645-82.184c20.672-8.386 30.879-33.187 19.062-55.047-8.691-16.086-29.047-23.242-47.375-16.668zM80 392.641c-.023 5.492-4.504 9.953-10 9.953H20V242.598h50c5.512 0 10 4.484 10 10zm400.332-42.149c-.105.04-.21.086-.316.13l-186.957 82.32c-14.082 6.406-29.059 9.652-44.512 9.652-19.485 0-38.61-5.297-55.313-15.324l-52.3-31.38c-11.196-6.714-27.227-10.808-40.934-12.449V262.598h69.168a50.029 50.029 0 0124.52 6.425l52.832 29.715a30.045 30.045 0 0014.718 3.86h64.758c11.027 0 20 8.968 20 20 0 10.988-8.976 20-20 20H224.34c-5.524 0-10 4.476-10 10 0 5.52 4.476 9.996 10 9.996h101.656a39.922 39.922 0 0018.746-4.684l121.59-41.797c8.961-3.234 19.094-.015 23.066 7.336 5.957 11.02 1.032 23-9.066 27.043zm0 0M291.246 243.055c1.883 1.629 4.215 2.441 6.55 2.441s4.673-.812 6.552-2.441c81.59-70.711 132.058-106.496 132.058-162.106C436.406 36.957 405.262.5 361.508.5c-28.735 0-50.738 16.563-64.91 41.418C282.457 17.118 260.477.5 231.699.5c-33.496 0-61.5 21.707-71.344 55.297-1.554 5.3 1.485 10.855 6.786 12.41 5.3 1.555 10.855-1.484 12.406-6.785C186.832 36.562 207.3 20.5 231.699 20.5c28.528 0 48.54 25.332 55.262 48.918a9.999 9.999 0 0019.273 0c.137-.488 14.028-48.918 55.274-48.918 31.297 0 54.898 25.984 54.898 60.45 0 44.484-43.484 76.554-118.617 141.335-45.777-39.312-82.14-66.984-102.809-94.055-3.351-4.39-9.625-5.234-14.015-1.882-4.39 3.351-5.23 9.625-1.883 14.02 23.297 30.51 62.625 59.745 112.164 102.687zm0 0" /><path d="M169 88.598c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 0" /></svg>
          </li>
          <li className="icon-wrapper">

            <p className="title blue top-text">Budujeme vlastní nadační projekt, Zahradu Hojnosti </p>
            <Link className="red link" to="/zahrada-hojnosti">Zjistit více</Link>
            <svg className="img svg" viewBox="0 0 512 512" height="512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M71.858 408.115L120 432.181V486c0 5.523 4.478 10 10 10h106c5.522 0 10-4.477 10-10V355.45c0-30.637-22.983-56.045-53.391-59.093-.118-.033-42.3-6.619-61.87-26.189l-22.458-22.448C100.725 240.163 90.681 236 80 236v-80c0-22.056-17.944-40-40-40S0 133.944 0 156v135.84c0 24.158 6.714 47.791 19.415 68.342a129.925 129.925 0 0052.443 47.933zM20 156c0-11.028 8.972-20 20-20s20 8.972 20 20v85.361c-12.196 7.052-20 20.2-20 34.639 0 10.68 4.162 20.723 11.719 28.28l51.21 51.22c3.903 3.905 10.236 3.907 14.142.001 3.905-3.905 3.906-10.236.001-14.142l-51.21-51.221A19.863 19.863 0 0160 276c0-8.464 5.357-16.044 13.332-18.861l.009-.004h.001c6.896-2.444 15.077-.994 20.799 4.728l22.458 22.449c23.186 23.185 73.843 31.91 73.944 31.938A39.27 39.27 0 01226 355.45V476h-86v-50a10 10 0 00-5.528-8.944l-53.669-26.83C43.299 371.47 20 333.771 20 291.84zM246 246c0 5.523 4.478 10 10 10s10-4.477 10-10v-30h38.28C360.369 216 406 170.369 406 114.28V66a10 10 0 00-17.071-7.071C377.921 69.938 363.286 76 347.72 76c-33.445 0-63.169 16.227-81.72 41.219V26c0-5.523-4.478-10-10-10s-10 4.477-10 10v51.22C227.449 52.228 197.725 36 164.28 36c-15.566 0-30.201-6.062-41.209-17.071a9.998 9.998 0 00-10.898-2.168A10.003 10.003 0 00106 26v48.28C106 130.369 151.631 176 207.72 176H246zM347.72 96c13.625 0 26.72-3.458 38.28-9.959v28.239c0 45.061-36.659 81.72-81.72 81.72H286l56-42c4.418-3.313 5.313-9.582 2-14s-9.581-5.315-14-2l-64 48v-8.28C266 132.66 302.659 96 347.72 96zM126 74.28V46.041C137.561 52.542 150.655 56 164.28 56 209.341 56 246 92.66 246 137.72V146l-64-48c-4.418-3.313-10.686-2.418-14 2-3.313 4.418-2.418 10.687 2 14l56 42h-18.28C162.659 156 126 119.341 126 74.28z" /><circle cx="459" cy="384" r="10" /><path d="M472 116c-22.056 0-40 17.944-40 40v80c-10.681 0-20.725 4.162-28.279 11.717l-22.462 22.452c-19.137 19.139-61.695 26.152-61.796 26.181-30.48 3.056-53.463 28.463-53.463 59.101V486c0 5.523 4.478 10 10 10h106c5.522 0 10-4.477 10-10v-53.819l32.73-16.362c4.939-2.47 6.942-8.476 4.473-13.417-2.469-4.939-8.473-6.942-13.416-4.473l-38.259 19.125A10.006 10.006 0 00372 426v50h-86V355.45c0-20.321 15.243-37.174 35.529-39.208.101-.028 49.426-7.485 73.87-31.93l22.462-22.452c5.724-5.724 13.913-7.166 20.797-4.726h.001l.009.004C446.643 259.957 452 267.537 452 276c0 5.338-2.082 10.359-5.861 14.14l-51.21 51.22c-3.905 3.906-3.904 10.237.001 14.142 3.904 3.904 10.237 3.905 14.142-.001l51.21-51.22C467.838 296.724 472 286.68 472 276c0-14.439-7.804-27.587-20-34.639V156c0-11.028 8.972-20 20-20s20 8.972 20 20v135.84c0 18.296-4.617 36.46-13.353 52.528-2.639 4.852-.844 10.924 4.009 13.562 4.851 2.637 10.925.843 13.562-4.009C506.543 334.931 512 313.464 512 291.84V156c0-22.056-17.944-40-40-40z" /></svg>
          </li>
          <li className="icon-wrapper">
            <p className="title blue top-text">Umíme zprostředkovat podporu od&nbsp;firem i&nbsp;jednotlivců v&nbsp;našem kraji</p>
            <Link className="red link" to="/kontakt">Pomáhejte s námi</Link>
            <svg className="img svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M404.267 315.41c-10.048-20.949-45.995-50.027-80.725-78.123-19.371-15.659-37.675-30.464-49.344-42.133-2.923-2.944-7.296-3.883-11.157-2.496-7.189 2.603-11.627 4.608-15.125 6.165-5.333 2.389-7.125 3.2-14.315 3.925a10.663 10.663 0 00-7.808 4.672c-15.083 22.549-30.699 20.629-41.131 17.131-3.328-1.109-3.925-2.539-4.245-3.904-2.24-9.365 9.003-31.168 23.573-45.739 34.667-34.688 52.544-43.371 90.304-26.496 42.837 19.157 85.76 34.155 86.187 34.304a10.654 10.654 0 0013.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589-.427-.149-42.496-14.848-84.48-33.643-48.917-21.867-75.755-7.467-114.091 30.891-14.592 14.592-34.411 44.117-29.291 65.771 2.197 9.216 8.683 16.043 18.325 19.221 24.171 7.979 46.229.341 62.656-21.461 6.784-1.045 10.475-2.581 16.021-5.077a209.95 209.95 0 017.467-3.2c12.203 11.456 28.672 24.789 46.016 38.805 31.36 25.365 66.923 54.123 74.923 70.763 3.947 8.213-.299 13.568-3.179 16.021-4.224 3.627-10.005 4.779-13.141 2.581-3.456-2.368-7.957-2.517-11.52-.384a10.66 10.66 0 00-5.141 10.304c.725 6.784-5.483 10.667-8.171 12.011-6.827 3.456-13.952 2.859-16.619.384-2.987-2.773-7.275-3.584-11.072-2.176-3.797 1.429-6.443 4.928-6.827 8.981-.64 6.997-5.824 13.717-12.587 16.341-3.264 1.237-8 1.984-12.245-1.899a10.791 10.791 0 00-9.749-2.475 10.65 10.65 0 00-7.488 6.72c-.405 1.067-1.323 3.627-11.307 3.627-7.104 0-19.883-4.8-26.133-8.939-7.488-4.928-54.443-39.957-94.997-73.92-5.696-4.8-15.552-15.083-24.256-24.171-7.723-8.064-14.784-15.381-18.411-18.453-4.544-3.84-11.264-3.264-15.04 1.259-3.797 4.501-3.243 11.243 1.259 15.04 3.307 2.795 9.707 9.557 16.768 16.917 9.515 9.941 19.349 20.224 25.963 25.771 39.723 33.259 87.467 69.163 96.981 75.413 7.851 5.163 24.768 12.416 37.867 12.416 10.517 0 18.603-2.411 24.213-7.125 7.509 2.923 16.043 2.944 24.256-.256 9.707-3.755 17.685-11.328 22.208-20.501 8.405 1.792 18.027.533 26.773-3.861 8.555-4.309 14.741-10.901 17.813-18.603 8.491.448 17.237-2.56 24.469-8.768 12.247-10.474 15.617-26.772 8.535-41.471z" /><path d="M213.333 138.663h-96c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h96c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667zM435.52 292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189 20.949c-4.885 3.285-6.187 9.92-2.901 14.805a10.717 10.717 0 008.875 4.715c2.027 0 4.096-.576 5.931-1.813l31.189-20.949c4.884-3.286 6.185-9.92 2.9-14.806zM369.301 343.613c-7.637-6.016-41.792-40.981-62.912-62.997-4.075-4.267-10.837-4.416-15.083-.32-4.267 4.075-4.395 10.837-.32 15.083 5.483 5.717 53.845 56.128 65.088 65.003a10.623 10.623 0 006.592 2.283c3.136 0 6.272-1.408 8.405-4.075 3.649-4.609 2.86-11.329-1.77-14.977zM326.677 365.01c-12.779-10.219-44.885-44.331-52.139-52.224-4.011-4.352-10.731-4.608-15.083-.64-4.331 3.989-4.629 10.752-.64 15.083.384.405 38.699 41.771 54.528 54.443a10.72 10.72 0 006.656 2.325c3.115 0 6.229-1.387 8.341-3.989 3.671-4.609 2.924-11.329-1.663-14.998zM284.224 386.493c-15.211-12.821-46.336-45.952-52.416-52.459-4.032-4.309-10.795-4.544-15.083-.512-4.309 4.032-4.523 10.773-.512 15.083 8.747 9.365 38.528 40.939 54.251 54.208a10.638 10.638 0 006.869 2.517c3.029 0 6.059-1.301 8.171-3.797 3.797-4.523 3.221-11.243-1.28-15.04z" /><path d="M124.672 120.253C106.389 102.93 33.28 97.319 11.307 96.018c-3.029-.149-5.824.853-7.957 2.88A10.662 10.662 0 000 106.663v192c0 5.888 4.779 10.667 10.667 10.667h64c4.608 0 8.704-2.965 10.133-7.36 1.557-4.779 38.315-117.589 43.157-173.056.278-3.243-.917-6.443-3.285-8.661zM66.88 287.997H21.333V118.098c34.283 2.709 71.275 8.597 84.715 15.125-5.653 46.72-31.232 129.728-39.168 154.774zM501.333 117.33c-83.755 0-130.219 21.44-132.16 22.336-2.773 1.301-4.843 3.712-5.696 6.635s-.427 6.059 1.173 8.661c13.184 21.227 54.464 139.115 62.4 167.872a10.665 10.665 0 0010.283 7.829h64c5.888 0 10.667-4.779 10.667-10.667v-192a10.657 10.657 0 00-10.667-10.666zm-10.666 192h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325 16.277-5.525 51.243-15.019 101.995-16.213V309.33z" /></svg>
          </li>
          <li className="icon-wrapper">
            <p className="title blue top-text">Inspirujeme k&nbsp;dobrovolnictví a&nbsp;připomínáme, že&nbsp;nezištná pomoc patří k&nbsp;životu</p>
            <a className="red link" href="https://www.facebook.com/dobrovolniciprozahraduhojnosti.cz/">Zapojte se</a>
            <svg className="img svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M209.137 15.169c-14.507-11.731-33.508-11.826-45.041.102-13.676 14.175-13.679 37.264-.006 51.471a5.8 5.8 0 00.135.137l36.856 36.517c.193.192.397.373.61.542l.223.178c1.792 1.428 3.823 3.047 6.913 3.176a8.117 8.117 0 00.612 0c3.125-.125 5.164-1.75 6.963-3.185l.213-.169a7.68 7.68 0 00.611-.544l32.405-32.151 4.421-4.364.128-.13c13.71-14.21 13.708-37.306.002-51.476-11.52-11.947-30.533-11.851-45.045-.104zm34.307 41.103L209.15 90.275l-29.967-29.707-4.348-4.292c-8.083-8.469-8.066-22.172.05-30.584 7.153-7.4 18.761-4.393 26.065 2.207.535.481.967.889 1.322 1.225 1.488 1.406 3.526 3.333 6.866 3.333 3.37 0 5.386-1.918 6.857-3.319.354-.336.787-.75 1.345-1.251 7.298-6.593 18.906-9.604 26.052-2.192 8.139 8.413 8.155 22.113.052 30.577zM210.548 227.262c-10.016-3.842-21.288-2.244-30.925 4.382a41.932 41.932 0 00-4.443 3.521v-92.406c0-14.167-11.526-25.693-25.693-25.693-3.814 0-7.438.836-10.696 2.333-.201-14.011-11.648-25.345-25.69-25.345-10.944 0-20.313 6.887-24.008 16.559a25.533 25.533 0 00-12.377-3.183c-14.183 0-25.721 11.526-25.721 25.693v20.388a22.521 22.521 0 00-7.661-1.334c-12.667 0-23.369 10.391-23.369 22.691l.028 132.5c.13 20.356 6.417 31.749 12.878 38.734-4.204 1.988-7.126 6.258-7.126 11.208v57.726a7.5 7.5 0 0015 0v-55.128h142.189v136.951H40.745V452.5a7.5 7.5 0 00-15 0v46.957c0 6.839 5.563 12.403 12.402 12.403H185.56c6.823 0 12.374-5.564 12.374-12.403V357.31c0-4.85-2.798-9.047-6.856-11.085 5.151-8.508 8.564-17.368 10.171-26.464 4.604-26.108 11.122-43.253 15.881-55.771 3.463-9.11 5.751-15.129 5.79-20.681.051-7.473-4.11-12.871-12.372-16.047zm-7.438 31.397c-4.691 12.341-11.781 30.99-16.632 58.494-1.683 9.523-5.923 18.844-12.602 27.754H54.905c-1.228-1.095-2.595-2.083-4.002-3.099-6.652-4.8-15.762-11.374-15.91-34.489l-.028-132.452c0-4.024 3.989-7.689 8.369-7.689 4.224 0 7.661 3.449 7.661 7.689v41.374a7.5 7.5 0 0015 0v-83.117c0-5.896 4.809-10.693 10.721-10.693 5.896 0 10.693 4.797 10.693 10.693v84.59a7.5 7.5 0 0015 0v-97.938c0-5.912 4.797-10.722 10.693-10.722s10.693 4.81 10.693 10.722v91.618a7.5 7.5 0 0015 0v-68.636c0-5.896 4.797-10.693 10.693-10.693s10.693 4.797 10.693 10.693v123.223c-16.187 8.771-30.721 23.598-34.129 35.269a7.5 7.5 0 007.202 9.604 7.503 7.503 0 007.196-5.4c1.925-6.592 13.855-20.377 30.391-28.06 2.609-1.212 4.34-3.924 4.34-6.802 0-11.079 4.838-21.019 12.941-26.59 5.506-3.785 11.722-4.783 17.051-2.739 1.938.745 2.578 1.309 2.724 1.457.509 2.007-2.303 9.405-4.787 15.939zM478.468 357.567c-5.003-5.177-11.109-8.593-17.729-10.292v-59.962c0-5.356-3.238-9.965-7.853-11.975 5.836-9.461 9.682-19.306 11.451-29.398 5.055-28.605 12.197-47.392 17.412-61.109 3.762-9.896 6.248-16.435 6.291-22.38.057-7.854-4.34-13.536-13.073-16.89-10.724-4.115-22.808-2.396-33.149 4.714a45.248 45.248 0 00-5.96 4.898V52.53c0-15.105-12.289-27.394-27.393-27.394-4.458 0-8.669 1.07-12.393 2.967v-.71C396.072 12.289 383.783 0 368.679 0c-11.967 0-22.168 7.698-25.902 18.397a27.22 27.22 0 00-13.912-3.803c-15.104 0-27.393 12.289-27.393 27.394v23.323a23.952 23.952 0 00-9.078-1.776c-13.481 0-24.871 11.026-24.871 24.081l.057 144.879c.133 22.78 7.391 35.182 14.614 42.659-4.862 1.896-8.323 6.625-8.323 12.16v92.468a7.5 7.5 0 0015 0V289.26h12.526l.016.001.015-.001h144.311v57.038c-9.732 1.099-19.648 5.439-28.234 12.98-19.362-16.996-45.443-17.772-60.936-1.709-18.086 18.725-18.088 49.216-.004 67.972l.12.122 51.63 51.178c.192.19.394.37.605.539l.397.317c2.349 1.878 4.568 3.652 7.968 3.751a8.07 8.07 0 00.434 0c3.413-.098 5.677-1.911 7.867-3.666l.504-.403c.211-.168.414-.349.606-.539l19.043-18.877V497H288.87v-82.588a7.5 7.5 0 00-15 0v84.534c0 7.198 5.843 13.054 13.026 13.054h160.816c7.183 0 13.026-5.856 13.026-13.054v-55.852l17.603-17.419c.045-.044.089-.089.132-.134 18.085-18.756 18.083-49.248-.005-67.974zm-43.001-83.307H304.759c-1.369-1.248-2.911-2.37-4.507-3.522-7.395-5.338-17.523-12.649-17.673-38.29l-.057-144.835c0-4.751 4.705-9.078 9.871-9.078 5.005 0 9.078 4.072 9.078 9.078v45.285a7.5 7.5 0 0015 0v-90.91c0-6.834 5.56-12.394 12.393-12.394s12.393 5.56 12.393 12.394v92.497a7.5 7.5 0 0015 0V27.394c0-6.834 5.572-12.394 12.421-12.394 6.833 0 12.393 5.56 12.393 12.394V127.57a7.5 7.5 0 0015 0V52.53c0-6.834 5.56-12.394 12.393-12.394s12.393 5.56 12.393 12.394v135.137c-17.704 9.471-33.652 25.644-37.36 38.346a7.5 7.5 0 1014.399 4.203c2.142-7.338 15.346-22.642 33.617-31.118 2.612-1.211 4.344-3.924 4.344-6.804 0-12.347 5.405-23.435 14.458-29.659 6.208-4.268 13.237-5.388 19.276-3.07 3.458 1.328 3.454 1.968 3.448 2.777-.024 3.247-2.358 9.386-5.312 17.159-5.121 13.471-12.86 33.828-18.165 63.839-1.856 10.598-6.599 20.984-14.095 30.92zm32.271 140.805l-50.233 49.765-50.2-49.76c-12.486-13.015-12.47-34.117.056-47.084 11.292-11.709 29.386-7.222 40.687 2.955.791.709 1.421 1.31 1.935 1.799 1.787 1.7 3.998 3.803 7.474 3.803h.097c3.476 0 5.687-2.104 7.474-3.804.514-.489 1.144-1.09 1.945-1.808 6.95-6.259 16.484-10.357 25.427-9.855.196.022.396.031.597.038 5.365.427 10.491 2.537 14.684 6.876 12.52 12.962 12.538 34.06.057 47.075z" /></svg>            </li>
        </ul>
      </section>

      {/* <section className="section subtitle">
        <p className="subtitle bigger"> Kousek po&nbsp;kousku toho společně zvládneme hodně</p>
      </section> */}

      <section className="section section-center cisla">

        <ul className="cisla-infographic">
          <li className="cislo roky">
            <svg className="img calendar" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" /></svg>
            <p>
              <span className="cislo" id="year">11</span>
              <span className="popis">let</span>
            </p>
          </li>
          <li className="cislo people">
            <svg className="img people" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z" /></g></svg>            <p>
              <span className="cislo" id="pocetProjektu">115</span>
              <span className="popis">projektů</span>
            </p>
          </li>
          <li className="cislo penize">
            <svg className="img wallet" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 16V8c0-1.1.89-2 2-2h9V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-1h-9c-1.11 0-2-.9-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
            <p>
              <span className="cislo" id="cenyText">3.2</span>
              <span className="popis">miliónů Kč</span>
            </p>
          </li>
        </ul>
      </section>

      <JurtaSection green={false} />

      {/* <LayerWrapper>
        <StaticImage objectFit="cover" objectPosition="right" className="img" src="../images/sako_final.jpg" alt='Muž v obleku upravující si manžety' layout='fullWidth' />
        <div className="galavecer-overlay"></div>
        <section className="text-section section galavecer">
          <h1 className="section-title">Slavnostní galavečer</h1>
          <p className="subtitle">Buďte u&nbsp;toho!</p>
          <p className="text">
            Letošní rok je&nbsp;pro Nadační fond Kousek po&nbsp;kousku jubilejní. 10&nbsp;let kousků dobra připomeneme 16.&nbsp;října tohoto roku v&nbsp;kostele sv.&nbsp;Josefa ve&nbsp;Fulneku na&nbsp;Slavnostním Galavečeru. Zrekapitulujeme dosavadní počiny, připomeneme některé z&nbsp;podpořených projektů, přivítáme řadu hostů a&nbsp;prozradíme další plány.
          </p>
          <p className="text">Součástí Galavečera bude koncert popové houslistky <a className="inline" href="https://www.youtube.com/watch?v=-49HE-gAxok">Lucie Klasek &amp; The Stringz.</a><br />The Stringz zahrají pro Kousek ještě jednou, v&nbsp;neděli 17.&nbsp;října opět v kostele sv.&nbsp;Josefa ve&nbsp;Fulneku. Speciálním hostem nedělního Koncertu pro Kousek bude Tomáš Savka.</p>
          {/* <a href="/" className="button section-button buy-button">
            koupit vstupenku
          </a>
          <div className="button-row">
            <Link to="/program" className="button section-button buy-button ">
              Zobrazit program
            </Link>
            <a href="https://podpora.kousekpokousku.cz/vstupenky" className="button filled">Chci koupit vstupenku</a>
          </div>
        </section>
      </LayerWrapper> */}





      <section className="section-zahrada">
        <section className="section section-text right-align" id="zahrada">
          <h2 className="section-title title">
            Zahrada Hojnosti</h2>
          <p className="text">Na&nbsp;pozemku Nadačního fondu Kousek po&nbsp;kousku ve&nbsp;Fulneku, o&nbsp;rozloze 16&nbsp;000&nbsp;m<sup>2</sup>, se postupně rodí výjimečné <strong>místo pro tělo, mysl a&nbsp;duši, harmonizační
            a&nbsp;inspirativní prostor pro psychickou i fyzickou relaxaci.</strong> Zázemí zahrady umožní<strong> dobrovolnické projekty, sociální a mezigenerační stmelování, edukační přesah</strong> pro&nbsp;všechny věkové skupiny i&nbsp;spoluúčast na&nbsp;výjimečném ekonomickém procesu.
            Prostřednictvím samosběrů květin, bylin a&nbsp;plodů jedlé Zahrady představí totiž NF naprosto <strong>unikátní způsob hospodaření pro dosažení soběstačnosti.</strong>
          </p>
          <div className="button-row ">
            <a className="button filled link" href="https://podpora.kousekpokousku.cz/">Chci podpořit Zahradu</a>
            <Link className="button " to="/zahrada-hojnosti">Více</Link>
          </div>
        </section>
        <StaticImage className='img' src='../images/paprika_hor.png' alt='Ruce drzi rostlinku' layout='constrained' placeholder='blurred' />
      </section>
      <section className="section section-centered call-to-action">
        <h1 className="title">Připoj svůj kousek dobra</h1>
        <p>
          Věříme, že&nbsp;čemu je věnována pozornost, to&nbsp;se&nbsp;děje. Naše pozornost míří k&nbsp;podpoře lokálních projektů a&nbsp;míst, díky kterým je&nbsp;život lepší. K&nbsp;pomoci lidem, kteří tvoří v&nbsp;našem regionu.
        </p>
        <p>Jsme přesvědčeni, že prostředky, které vzejdou z&nbsp;regionu, mají znovu najít uplatnění v&nbsp;oblastních projektech.</p>

        {/* <p className="subtitle blue">Připojte se, ať&nbsp;už jakoukoli částkou, jakýmkoli způsobem. </p> */}
        <p className="subtitle bigger" style={{ color: 'white', fontSize: '1.7em' }}> Kousek po&nbsp;kousku toho společně zvládneme kus</p>

        <p className="subtitle blue"> Děkujeme, že&nbsp;se připojíte</p>
        <a href="https://podpora.kousekpokousku.cz/chci-prispet-jsem-grand/" className="button filled bigger">Chci přispět</a>


      </section>
      <section className="image-section">
        <section className="text-section section kouskovani">
          <h1 className="section-title">Kouskování</h1>
          <p className="subtitle">Dejme kouskům druhou šanci!</p>
          <p className="text">Udržitelnost je téma, ke kterému se dlouhodobě hlásíme. Dopady výroby oděvů nelze přehlížet. Už redukcí naší osobní spotřeby každý z nás významně pomůže.</p>
          <p className="text">Do&nbsp;šatníku si&nbsp;pořizujme <strong>základní, kvalitní, nadčasové kousky, nejlépe z&nbsp;recyklovatelných materiálů.</strong> Zejména díky dobrým materiálům vydrží ve&nbsp;skvělé kondici a&nbsp;slouží dlouho, často i&nbsp;někomu druhému. Právě nákup z&nbsp;druhé ruky je jedním z&nbsp;principů zpomalení cyklu neboli <strong>slou&nbsp;módy</strong>.</p>
          <p className="text">V Nadačním fondu Kousek po kousku máme s dobročinným bazarem pod značkou Kouskování dlouholeté zkušenosti. <strong>6 ročníků pořádání Klášterního kouskování vyneslo přes půl miliónu korun na další kousky pomoci</strong> a také stálý okruh desítek dobrovolníků.
            <strong> Děkujeme!</strong> <Link to="/kouskovani" className="link">Více o Klášterním kouskování</Link>

          </p>
          <p className="text">
            Kouskování, stejně jako sekci uměleckých děl Ze šuplíku, provozujeme na <a href="https://podpora.kousekpokousku.cz/kouskovani">podpora.kousekpokousku.cz/kouskovani</a>. Veškeré kousky, které stále vypadají krásně a z mnoha důvodů je už nevyužijete, rádi přijmeme a prostřednictvím e – shopu nabídneme dál. Výtěžek pomůže dlouhodobě podporovaným projektům <Link to="/aktualne-podporujeme#intervence"><strong>Intervence pro&nbsp;autismus</strong></Link> a <Link to="/zahrada-hojnosti"><strong>Zahrada hojnosti</strong></Link>.
          </p>
          <div className="button-row">
            <Link to="/daruj-kousek" className="button">Chci darovat kousek</Link>
            <a href="https://podpora.kousekpokousku.cz/kouskovani/" className="button section-button buy-button filled">
              Chci koupit kousek
            </a>
          </div>
        </section>
        <StaticImage style={{ filter: 'brightness(1.2)' }} className='section-image img' src="../images/kouskovani_saty.png" alt='Ruka podává šaty a boty' layout='constrained' placeholder='blurred' />
      </section>



      <section className="aktuality">
        <h1 className="section-title">Aktuality</h1>
        <LayerWrapper>
          <div style={{ height: '400px' }}></div>
          <div>
            <AktualityCarousel aktuality={aktuality} />
          </div>
        </LayerWrapper>
        <div className="flex-end">
          <Link to='/aktuality' className=" link">všechny aktuality</Link>
        </div>

      </section>


      <section className="section section-text" id="o-nadaci">
        <h1 className="title">O&nbsp;nadačním fondu</h1>
        <p className="text">Každý člověk může kdykoliv během svého života zažívat radost, zapálení, touhu objevovat nové možnosti, realizovat je tvořivou cestou a tím zlepšovat sám sebe i svět kolem nás, tady a teď. </p>
        <p className="text">Pomáháme chápat a přijímat nové životní pohledy, uchopit život do vlastních rukou a osvojit si skutečné životní hodnoty. Zároveň prožíváme radost a uspokojení z toho, co děláme. Každý v sobě máme něco jedinečného, a to pomáháme objevit. Všichni máme volbu. My jsme si zvolili dělat to, co nás naplňuje. Pomáhat lidem, sobě a světu kolem nás.
          <Link className="button" to="/mise-vize-poslani">Více o nadačním fondu</Link>
        </p>
      </section>

      <section className="section section-text section-projekty">
        <h1 className="title">Aktuálně podporujeme</h1>
        <p className="subtitle">... v souladu s tématem hledání rovnováhy těla, duše a mysli</p>
        <div className="projekty">
          {/* <Link to="/zahrada-hojnosti" className="projekt-link zahrada">
            <StaticImage className='img' src="../images/jahoda.png" alt='' layout='constrained' placeholder='blurred' objectFit='contain' />
            <h2>Zahrada hojnosti</h2>
          </Link> */}
          <Link to="/aktualne-podporujeme#klinika" className="projekt-link klinika">
            <div className="img-wrapper">
              <StaticImage className='img' src="../images/handshake.png" alt='' layout='constrained' placeholder='blurred' objectFit='cover' />
            </div>
            <h2>Sociální klinika</h2>
          </Link>
          <Link to="/aktualne-podporujeme#intervence" className="projekt-link intervence">
            <div className="img-wrapper">
              <StaticImage className='img' src="../images/puzzle.png" alt='' layout='constrained' placeholder='blurred' objectFit='contain' />
            </div>
            <h2>Intervence pro autismus</h2>
          </Link>
        </div>
      </section>


      {/* <section className="section sponzori">
        <h2 className="title text-center">Partneři</h2>
        <ul className="flex-row">
          <li>
            <StaticImage className='img' src="../images/logo_pars.png" alt='Pars Komponenty' layout='constrained' placeholder='blurred' />
          </li>
          // Dont include KSB 1
          {/* <li>
            <StaticImage className='img' src="../images/logo_ksb.jpg" alt='Kocián Šolc Balaštík' layout='constrained' placeholder='blurred' />
          // </li> 
        </ul>
      </section> */}
      {/* <section className="section section-map">
        <Map />
      </section> */}

    </Layout >
  )
}

export default IndexPage
