import { useState, useEffect } from 'react'
import { useOrderGroup } from 'vtex.order-placed/OrderGroupContext'
import { useOrder } from 'vtex.order-placed/OrderContext'

const OrderPlacedHandler = () => {
  const [bankSlipButton, setBankSlipButton] = useState(null)
  const orderGroup = useOrderGroup()
  const order = useOrder()

  useEffect(() => {
    if (!order) return
    const isBankSlip = order.paymentData.transactions.some(transaction => {
      return transaction.payments.some(payment => {
        return payment.group === 'bankInvoice'
      })
    })

    if (isBankSlip) {
      let btn = null
      const interval = setInterval(() => {
        btn = document.querySelector('a[data-testid="button-link"]')
  
        if (btn) {
          clearInterval(interval)
          setBankSlipButton(btn)
        }
      })
    }

  }, [order, orderGroup])

  useEffect(() => {
    if (!bankSlipButton) return

    bankSlipButton.setAttribute('target', '_blank')
    bankSlipButton.click()
  }, [bankSlipButton])

  return null
}

export default OrderPlacedHandler