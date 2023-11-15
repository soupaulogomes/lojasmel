import React, { useEffect } from 'react'
import { canUseDOM, Helmet } from 'vtex.render-runtime'

const CustomHelmet = () => {

  useEffect(() => {
    if (!canUseDOM) return

    const metaViewports = document.querySelectorAll('meta[name="viewport"]')
    if (!metaViewports) return

    metaViewports.forEach(meta => {
      !meta.getAttribute('content').includes('user-scalable') && meta.remove()
    })
  }, [canUseDOM])

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
    </>
  )
}

export default CustomHelmet