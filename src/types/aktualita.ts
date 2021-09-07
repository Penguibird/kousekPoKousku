
import { GatsbyImage } from 'gatsby-plugin-image';
export default interface Aktualita {
    title: string,
    body: string,
    image: {
      image: React.ComponentProps<typeof GatsbyImage>['image'],
  
      imageAlt: string,
    },
    date: Date,
    link?: string,
  }