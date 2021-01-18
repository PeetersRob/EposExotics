import Img from "gatsby-image"
import styled from "styled-components"

export const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background: #181819;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  margin-bottom: 1.45rem;
  z-index: 999;

  a {
    display: flex;
    width: 200px;
    height: 80%;
    font-size: 1.5rem;
    text-align: center;
    justify-content: center;
  }
`
export const Image = styled(Img)`
  margin: auto 0;
  margin-top: -4px;
`
export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #FFFFFF;
      font-size: 1.2rem;
      font-family: Oswald;
      text-transform: uppercase;
      white-space: nowrap;
      text-decoration: none;
      padding: 0.25rem 1rem;
    }

    a:hover {
      color: #c28b00;
    }
  }

  .nav-active {
    color: #c28b00;
  }
`
