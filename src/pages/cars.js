import React from 'react'
import {useStaticQuery, graphql} from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper, Image, Car} from "./pageStyles/pageStyles"

export const CarsPage = () => {
    const {wpcontent: {
        page: {
            carsMeta: {
                carsPageDescription,
                carsPageHeaderPicture
            }
        },
        cars: {edges: cars}
    }} = useStaticQuery(graphql`
        query {
            wpcontent {
                page(id: "cars", idType: URI) {
                    carsMeta {
                        carsPageDescription
                        carsPageHeaderPicture {
                            sourceUrl
                            imageFile{
                                childImageSharp {
                                    fluid(quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            altText
                        }
                    }
                }
                cars {
                    edges {
                        node {
                            car {
                                model
                                description
                                price
                                year
                                transmission
                                mileage
                                exteriorColor
                                interiorColor
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
                            }
                            makes {
                                nodes {
                                    name
                                } 
                            }
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title="Cars"/>
            <Wrapper>
                <div className="banner">
                    <Image fluid={carsPageHeaderPicture.imageFile.childImageSharp.fluid} alt={carsPageHeaderPicture.altText}/>
                    <div className="custom-shape-divider-bottom-1610995967">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className="description">
                    <p>{carsPageDescription}</p>
                    <div className="custom-shape-divider-bottom-1610989136">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className="cars">
                    <h2>Our cars for sale</h2>
                    <div className="car-items">
                        {cars.map(({node: {car, makes, slug}}) => (
                            <Car to={`/${slug}`} key={slug}>
                                <Image fluid={car.mainImage.imageFile.childImageSharp.fluid} altText={car.mainImage.altText} />
                                <div className="car-info">
                                    {makes.nodes.map((name) => (
                                        <p key={slug}>{name.name}</p>
                                    ))}
                                    <p>{car.model}</p>
                                    <p>{`€${car.price} ${car.mileage}Km`}</p>
                                </div>
                            </Car>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default CarsPage
