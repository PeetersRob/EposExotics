import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageHeaderDescription,
          homePageHeaderTitle,
          homePageHeaderPicture,
          homePageFeaturedCars,
        }
      }
    }
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homePageHeaderDescription
            homePageHeaderTitle
            homePageHeaderPicture {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            homePageFeaturedCars {
              ... on WPGraphql_Car {
                id
                car {
                  model
                  mainImage {
                    altText
                    sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 100){
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  price
                  mileage
                  year
                }
                makes {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
