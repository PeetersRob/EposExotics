import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import {Wrapper, Image} from './templatesStyles/artistStyles'

const Artist = ({data}) => {
    
    return (
        <div>
            Hello
        </div>
    )
}

export default Artist

export const pageQuery = graphql`
query ($id: ID!) {
    wpcontent {
        car(id: "$id", idType: ID) {
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