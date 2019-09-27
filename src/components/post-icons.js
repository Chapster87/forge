import { graphql } from "gatsby"
import React from "react"
import { FaRegClock, FaTag, FaFolderOpen } from "react-icons/fa"

export default ({ node, className = `` }) => (
  <div className={className}>
    <span>
      <FaRegClock size={14} style={{ position: `relative`, bottom: 1 }} />
      {` `}
      {node.date}
    </span>
    {node.categories &&
      node.categories.map(category => (
        <span key={category.name}>
          <FaFolderOpen size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {category.name}
        </span>
      ))}
    {node.tags &&
      node.tags.map(tag => (
        <span key={tag.name}>
          <FaTag size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {tag.name}
        </span>
      ))}
  </div>
)

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
    tags {
      name
    }
    categories {
      name
    }
  }
`