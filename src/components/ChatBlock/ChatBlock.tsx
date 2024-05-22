import React from 'react'
import {Form} from 'react-bootstrap'

import './chatBlock.sass'


const ChatBlock = () => {
  return (
    <div className='chat'>
      <Form.Control as='textarea'
        className="chat__input"
        // value={text}
        // onChange={e => setText(e.target.value)}
        placeholder={"Набирите сообщение"}
    />      
    </div>
  )
}

export default ChatBlock;