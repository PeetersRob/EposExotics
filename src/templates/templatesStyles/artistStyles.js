import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  background-color: #181819;
  margin-top: 100px;

  .artist-container {
    display: flex;
    margin: 3rem auto;
    width: 90%;
    background-color: #242124;

    .artist-image {
      position: relative;
      width: 40vw;
      height: 40vw;

      .roles {
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

        .role {
          padding: 1rem 1.5rem;
        }
      }
    }

    .artist-info {
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

  .artist-pictures {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    .artist-picture {
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
