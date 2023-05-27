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
      maxLength={100}
      style={{ height: 120, resize: 'none' }}
      onChange={onChange}
      placeholder="disable resize"
    />
    </div>
  )
}

export default Notes