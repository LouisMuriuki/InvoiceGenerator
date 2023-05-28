import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

const Notes = () => {
  return (
    <div className='flex items-center'>
        <TextArea
      showCount
      maxLength={300}
      style={{ height: 120, resize: 'none' }}
      onChange={onChange}
      placeholder="Notes- any relevant information not covered, addititonal terms and conditions"
    />
    </div>
  )
}

export default Notes