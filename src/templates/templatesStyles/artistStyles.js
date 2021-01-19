import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  background-color: #181819;
  margin-top: 100px;

  .car-container {
    display: flex;
    margin: 3rem auto;
    width: 100%;
    background-color: #242124;

    .car-image {
      position: relative;
      width: 50vw;
      height: 30vw;

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
        color: #c56183;
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-left: auto;
        margin-bottom: auto;

        span:first-child {
          color: #fadcaa;
        }
      }

      .description {
        font-size: 1.2rem;
        color: #fadcaa;
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

    .car-picture {
      width: 28.5vw;
      height: 57vw;
      margin: 0 1vw;
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
