import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  .banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 580px;

    .inner-div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      padding: 1rem;
      background-color: #794c74;

      p {
        color: white;
        font-size: 1.3rem;
        text-align: center;
      }

      .header-title {
        font-family: Oswald;
        font-size: 3rem;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        margin: auto;
        border-bottom: solid 5px white;
        margin-bottom: 1rem;
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 3rem 0 10rem;
    background-color: #181819;

    h2 {
      font-family: Oswald;
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;
    }

    p {
      width: 70%;
      font-size: 1.3rem;
      color: #fadcaa;
      text-align: center;
      line-height: 2rem;
      margin: auto;
    }
  }

  .contact-info {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;

    div {
      width: 33.33%;
      padding: 1em;
      color: #fadcaa;
      p {
        margin-top: 1rem;
        color: white;

        a {
          color: #c56183;
        }
      }
    }
  }

  .cars {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 5%;
    background-color: #794c74;

    h2 {
      font-family: Oswald;
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      margin-bottom: 3rem;
    }

    .car-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;
    }
  }
`

export const Car = styled(Link)`
  display: flex;
  position: relative;
  width: 22vw;
  height: 22vw;
  margin: 2vw;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);

    .cars-info {
      height: 100%;
      background-color: #fadcaa;

      p {
        color: #181819;
      }
    }
  }

  .car-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #181819;
    transition: all 0.3s ease-in-out;

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 600;
      color: white;
      margin: 0;
    }

    p:nth-child(2) {
      color: #c56183;
      margin-top: 0.3rem;
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`