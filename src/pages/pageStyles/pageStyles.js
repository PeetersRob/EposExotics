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
      background-color: #c28b00eb;
      border-radius: 5px;

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

    .custom-shape-divider-bottom-1610995967 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }
  
    .custom-shape-divider-bottom-1610995967 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 76px;
    }
    
    .custom-shape-divider-bottom-1610995967 .shape-fill {
        fill: #181819;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 4rem 0 9rem;
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

    .custom-shape-divider-bottom-1610989136 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
    }
  
    .custom-shape-divider-bottom-1610989136 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 64px;
    }
  
    .custom-shape-divider-bottom-1610989136 .shape-fill {
        fill: #FFFFFF;
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 5%;
    background-color: #ffffff;

    h2 {
      font-family: Oswald;
      font-size: 3rem;
      color: #181819;
      text-transform: uppercase;
      margin-bottom: 3rem;
      margin-top: 2.8rem;
    }

    .car-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding-bottom: 10vh
    }

    .custom-shape-divider-bottom-1610989788 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }
  
    .custom-shape-divider-bottom-1610989788 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 76px;
    }
    
    .custom-shape-divider-bottom-1610989788 .shape-fill {
        fill: #181819;
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

    .car-info {
      height: 100%;
      background-color: #ffffffd1;

      p {
        color: #181819;
      }

      p:nth-child(1) {
        color: #424242
      }
    }
  }

  .car-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #181819d1;
    transition: all 0.3s ease-in-out;

    p {
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
      margin: 0;
    }

    p:nth-child(1) {
      text-transform: uppercase;
      font-size: 1.1rem;
      color: #808080
    }

    p:nth-child(2) {
      margin-top: 0.3rem;
    }

    p:nth-child(3) {
      color: #c28b00;
      margin-top: 0.3rem;
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`