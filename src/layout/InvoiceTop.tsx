import React from 'react'
import { Segmented ,Button} from 'antd';

const InvoiceTop = () => {
    
  return (
    <div className='flex flex-row ite justify-between'>
        <div>
            <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
        </div>
        <Button type="primary">Primary Button</Button>
        
    </div>
  )
}

export default InvoiceTop