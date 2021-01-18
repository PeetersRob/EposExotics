import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper, Image, Car} from "./pageStyles/pageStyles"
import { node } from "prop-types"

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
                slug
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
  console.log(homePageFeaturedCars)
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div className="banner">
          <Image fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid} alt={homePageHeaderPicture.altText} />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
          </div>
        </div>
        <div className="description">
          <p>{homePageHeaderDescription}</p>
          <div className="custom-shape-divider-bottom-1610989136">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        <div className="cars">
          <h2>Featured Cars</h2>
          <div className="car-items">
            {homePageFeaturedCars.map(({car, slug, makes}) => (
              <Car to={`/${slug}`}>
                <Image fluid={car.mainImage.imageFile.childImageSharp.fluid} altText={car.mainImage.altText} />
                <div className="car-info">
                  <p>{car.model}</p>
                  <p>{`€${car.price} ${car.mileage}Km`}</p>
                </div>
              </Car>
            ))}
          </div>
          <div className="custom-shape-divider-bottom-1610989788">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
