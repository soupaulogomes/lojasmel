import React, { useState, useEffect } from 'react'
import { canUseDOM } from 'vtex.render-runtime'

import CloseButton from './components/CloseButton'

const MegaMenuCloseButton = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (!canUseDOM) return

    const asyncFunc = async () => {
      const trigger = await waitForElement('.vtex-mega-menu-2-x-triggerContainer')
      if (!trigger) return

      trigger.addEventListener('click', () => setOpen(true))
    }

    asyncFunc()
  }, [])

  const waitForElement = async (element) => {
    return new Promise((resolve) => {
      let target = null
  
      const interval = setInterval(() => {
        target = document.querySelector(element)
        if (target) {
          clearInterval(interval)
          resolve(target)
        }
      }, 500)

    })
  }

  return isOpen && <CloseButton setOpen={setOpen} />
}

export default MegaMenuCloseButton