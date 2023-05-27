import React from 'react'
import Top from '../components/top/Top'
import ReceiptientandSender from '../components/ReceiptientAnd Sender/ReceiptientandSender'
import InvoiceDetails from '../components/InvoiceDetails/InvoiceDetails'
import Notes from '../components/Notes/Notes'

const InvoiceEdit = () => {
  return (
    <div className='flex flex-col '>
     <Top/>
     <ReceiptientandSender/>
     <InvoiceDetails/>
     <Notes/>
    </div>
  )
}

export default InvoiceEdit