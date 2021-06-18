import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment'

export interface Aktualita {
  title: string,
  body: string,
  image: {
    image: React.ComponentProps<typeof GatsbyImage>['image'],

    imageAlt: string,
  },
  date: Date,
  link?: string,
}

const useAktualityZahrada = () => {

  const {
    allMarkdownRemark: {
      edges
    }
  } = useStaticQuery(graphql`query AktualityZahrada {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/aktualityZahrada\//"}}) {
          edges {
            node {
              rawMarkdownBody
              html
              frontmatter {
                name
                date
                link
                image {
                  image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  imageAlt
                }
              }
            }
          }
        }
      }
      `)

  const getLink = (link: string) => {
    if (/kousekpokousku\.cz/.test(link)) {
      let arr: string[] = link.split('.cz')
      return arr[arr.length - 1];
    }
    return link
  }
  const aktuality: Aktualita[] = edges
    .map((edge: any) => edge.node)
    .map((node: any) => ({
      title: node.frontmatter.name,
      body: (node.html as string).replace('/n', ''),
      //@ts-ignore
      date: moment(node.frontmatter.date, 'DD-MM-YYYY').toDate(),
      link: node.frontmatter.link
        ? getLink(node.frontmatter.link)
        : undefined,
      image: {
        image: node.frontmatter?.image?.image?.childImageSharp?.gatsbyImageData,
        imageAlt: node.frontmatter.image.imageAlt
      }
    }))
    .sort((a: Aktualita, b: Aktualita) => a.date.getTime()- b.date.getTime())
    .reverse();
  return aktuality;
}

export default useAktualityZahrada;