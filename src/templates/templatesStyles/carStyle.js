import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  background-color: #181819;
  margin-top: 100px;

  .car-container {
    display: flex;
    margin: 3rem auto;
    width: 100%;
    background-color: #242124;

    @media (max-width: 980px) {
      flex-direction: column;
    }
    .car-image {
      position: relative;
      width: 50vw;
      height: 30vw;

      @media (max-width: 980px) {
        width: 100%;
        height: 30vh;
      }

      .makes {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: #c56183;
        font-family: Oswald;
        text-transform: uppercase;
        background-color: #242124;
        border-right: solid 15px #c56183;

        .make {
          padding: 1rem 1.5rem;
        }
      }
    }

    .car-info {
      display: flex;
      flex-direction: column;
      width: 60vw;
      padding: 1.5rem 2rem;
      
      @media (max-width: 980px) {
        width: 100%;
      }

      h2 {
        font-family: Oswald;
        text-transform: uppercase;
        font-size: 4rem;
        border-bottom: #FFF solid 6px;
        padding-bottom: 1rem;
        margin-left: auto;
        margin-bottom: 0.5rem;
      }

      h3 {
        font-family: Oswald;
        color: #c28b00;
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-left: auto;
        margin-top: 0.3rem;
      }

      .description {
        font-size: 1.2rem;
        color: #fadcaa;
        text-align: right;
        margin-bottom: auto;

        @media (max-width: 980px) {
          margin-bottom: 1.5rem;
        }
      }

      .info {
        font-family: 2rem;
        text-transform: uppercase;
      }
    }
  }

  .car-pictures {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 980px) {
      flex-direction: column;
    }

    .car-picture {
      width: 38vw;
      height: 25vw;
      margin: 0 1vw;

      @media (max-width: 980px) {
        width: 90vw;
        height: 60vw;
        margin: 2vw auto;
      }
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
