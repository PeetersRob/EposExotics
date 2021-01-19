import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import {Wrapper, Image} from './templatesStyles/artistStyles'

const Artist = ({data: {wpcontent: {car: {car, makes: {edges: makes}}}}}) => {
    const {picture1, picture2, picture3} = car.detailPictures
    const images = [picture1, picture2, picture3];
    console.log(images)
    return (<Layout>
        <SEO title={car.model}/>
        <Wrapper>
            <div className="car-container">
                <div className="car-image">
                    <Image fluid={car.mainImage.imageFile.childImageSharp.fluid} alt={car.mainImage.altText}/>
                </div>
                <div className="car-info">
                    <h2>{car.model}</h2>
                    {makes.map(({node: make}) => (
                        <h3 key={make.name}>{make.name}</h3>
                    ))}
                    <p className="description">{car.description}</p>
                    <p className="info">
                        <strong>Price: </strong>€{car.price}
                    </p>
                    <p className="info">
                        <strong>Mileage: </strong>{car.mileage}km
                    </p>
                    <p className="info">
                        <strong>Year: </strong>{car.year}
                    </p>
                    <p className="info">
                        <strong>Transmission: </strong>{car.transmission}
                    </p>
                    <p className="info">
                        <strong>Interior color: </strong>{car.interiorColor}
                    </p>
                    <p className="info">
                        <strong>Exterior color: </strong>{car.exteriorColor}
                    </p>
                </div>
            </div>
            <div className="car-pictures">
                {images.map(image => (
                    <div className="car-picture" key={image.sourceUrl}>
                        <Image fluid={image.imageFile.childImageSharp.fluid} altText={image.altText}/>
                    </div>
                ))}
            </div>
        </Wrapper>
    </Layout>
)}

export default Artist

export const pageQuery = graphql`
query ($id: ID!) {
    wpcontent {
        car(id: $id, idType: ID) {
            makes {
                edges {
                    node {
                        name
                    }
                }
            }
            car {
                model
                mileage
                price
                transmission
                year
                description
                interiorColor
                exteriorColor
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
                detailPictures {
                    picture1 {
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
                    picture2 {
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
                    picture3 {
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
            }
        }
    }
}`