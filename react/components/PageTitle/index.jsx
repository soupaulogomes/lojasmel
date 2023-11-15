import React from 'react'

const PageTitle = ({ title }) => {
  return (
    <div className="vtex-rich-text-0-x-wrapper--section-common-title dn">
      <p className="vtex-rich-text-0-x-heading">{ title }</p>
    </div>
  )
}

PageTitle.schema = {
  title: "Texto SEO Topo - Titulo",
  type: "object",
  properties: {
    title: {
      title: "Título",
      type: "string",
      default: null
    }
  }
}

export default PageTitle