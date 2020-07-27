import React from "react";
import { Link } from 'gatsby'
// import Link from 'gatsby-plugin-transition-link'

import {
  handleLinkClick,
  stripHashedLocation,
  handleStrippedLinkClick
} from "../utils";
import { anchorLinkTypes } from "../types";

export function AnchorLink({
  to,
  title,
  children,
  className,
  stripHash = false
}) {
  const linkProps = {
    to: stripHash ? stripHashedLocation(to) : to,
    onClick: e =>
      stripHash ? handleStrippedLinkClick(to, e) : handleLinkClick(to, e)
  };

  // const trigger = ({ e }) => stripHash ? handleStrippedLinkClick(to, e) : handleLinkClick(to, e)
  const trigger = ({ node, e, exit, entry }) => console.log('TRIGGER', node, e, exit, entry)
  /**
   * Optional props
   */
  if (title) linkProps.title = title;
  if (className) linkProps.className = className;

  return <Link {...linkProps} entry={ { trigger }}>{Boolean(children) ? children : title}</Link>;
}

AnchorLink.propTypes = anchorLinkTypes;
