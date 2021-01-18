import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homePageHeaderDescription
            homePageHeaderTitle
            homePageHeaderPicture {
              altText
            }
            homePageFeaturedCars {
              ... on WPGraphql_Car {
                id
                car {
                  model
                  mainImage {
                    altText
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
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
