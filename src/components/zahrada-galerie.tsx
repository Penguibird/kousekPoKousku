import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import TinySlider from 'tiny-slider-react';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ZahradaGalerieProps {

};
interface Image {
  src: any,
  alt: string,
}

const ZahradaGalerie: React.FC<ZahradaGalerieProps> = ({ }) => {
  // let slider: TinySlider | null;

  // const prev = () => slider != null && slider.slider.goTo('prev');
  // const next = () => slider != null && slider.slider.goTo('next');

  const data = useStaticQuery(graphql`query ObrazkyZahrada {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/obrazkyZahrada/"}}
        ) {
          edges {
            node {
              name
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }`);

  // @ts-ignore
  const images: Image[] = data.allFile.edges.map(({ node }) => ({ src: node.childrenImageSharp[0].gatsbyImageData, alt: node.name }))
  console.log(data)
  console.log(images);
  return <div className="gallery-wrapper">
    {/* <button onClick={prev} className="slider-button prev">
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
        </button>
        <button onClick={next} className="slider-button next">
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
        </button><TinySlider settings={{
            lazyload: false,
            items: 1,
            nav: false,
            controls: false,
            autoplay: false,
            arrowKeys: false,
        }}
            ref={ts => slider = ts}
        >
            {images.map((image: Image, i: number) => <div className="image-wrapper" key={i}>
                <GatsbyImage className="img" image={image.src} alt={image.alt} />
            </div>)}
        </TinySlider> */}
    {images.map((image: Image, i: number) => <div className="image-wrapper" key={i}>
      <GatsbyImage className="img" image={image.src} alt={image.alt} />
    </div>)}
  </div>
}

export default ZahradaGalerie;
