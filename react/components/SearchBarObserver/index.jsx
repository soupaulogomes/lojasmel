import { useState, useEffect } from 'react'
import { useRuntime } from 'vtex.render-runtime'

const SearchBarObserver = () => {
  const { deviceInfo } = useRuntime()
  const [isOpen, setOpen] = useState(false)
  const [searchBar, setSearchBar] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      let element = document.querySelector('.vtex-store-components-3-x-searchBarInnerContainer')
      if (element) {
        setSearchBar(element)
        clearInterval(interval)
      }
    }, 500)
  }, [])

  useEffect(() => {
    if (!searchBar) return

    const observer = new MutationObserver(mutations => {
      setOpen(mutations.some(mutation => {
        return mutation.attributeName === 'class' && mutation.target.classList.contains('vtex-store-components-3-x-searchBarInnerContainer--opened')
      }))
    })

    observer.observe(searchBar, { attributes: true })

    const headerLastRow = deviceInfo.type !== 'phone' ?
      document.querySelector('.vtex-flex-layout-0-x-flexRow--headerLine2') :
      document.querySelector('.vtex-flex-layout-0-x-flexRow--mobileHeaderLineBottom')
    
    if (headerLastRow) {
      const headerHeight = headerLastRow.offsetTop + headerLastRow.offsetHeight
      searchBar.style.setProperty('--offsetTop', `${headerHeight}px`)
    }
  }, [searchBar])

  useEffect(() => document.body.style.overflow = isOpen ? 'hidden' : 'auto', [isOpen])

  return null
}

export default SearchBarObserver