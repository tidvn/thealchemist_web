import React from 'react'
import { Link as RouteLink, NavLink } from 'react-router-dom'

import { getSiteUrl } from '../../libs/links.js'

const Link = ({
  href,
  isNavLink = false,
  forceRefresh = false,
  ...props
}) => {
  const isExternal = href && href.startsWith('http')
  const isAnchorLink = href && href.startsWith('#')

  if (isAnchorLink) {
    return <a href={href} {...props} />
  }

  if (isExternal) {
    return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
  }

  if (forceRefresh) {
    return <a href={getSiteUrl(href)} {...props} />
  }

  let Component = isNavLink ? NavLink : RouteLink

  return <Component to={getSiteUrl(href)} {...props} />
}

export default Link
