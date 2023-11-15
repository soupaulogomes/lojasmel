import React, { useState, useEffect } from 'react'
import s from './styles'
import { createPortal } from 'react-dom'
import { IconClose } from 'vtex.styleguide'

const CloseButton = ({ setOpen }) => {
  const container = document.querySelector('.vtex-mega-menu-2-x-menuContainerNav')

  useEffect(() => {
    if (!container) return

    container.addEventListener('mouseleave', () => {
      document.body.click()
      setOpen(false)
    })
  }, [])

  const handleClose = () => {
    document.body.click()
    setOpen(false)
  }

  return container && createPortal(
    <span className={s.close} onClick={handleClose}>
      <IconClose color="#bd1d1d" size={30} />
    </span>,
    container
  )
}

export default CloseButton