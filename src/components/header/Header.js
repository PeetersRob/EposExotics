import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const {
    wpcontent: {
      menuItems
    }
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        menuItems {
          edges {
            node {
              label
              path
            }
          }
        }
      }
    }
  `)
  return <div>Header</div>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
