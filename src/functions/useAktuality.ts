import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment'
import type Aktualita from '../types/aktualita'

const useAktuality = () => {

  const {
    allMarkdownRemark: {
      edges
    }
  } = useStaticQuery(graphql`query Aktuality {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/aktuality\//"}}) {
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
        imageAlt: node.frontmatter.image?.imageAlt
      }
    }))
    .sort((a: Aktualita, b: Aktualita) => a.date.getTime()- b.date.getTime())
    .reverse();
  return aktuality;
}

export default useAktuality;