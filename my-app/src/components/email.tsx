import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { send } from 'emailjs-com';
const Email=()=>{

    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e:any) => {
        e.preventDefault();
        send(
          'SERVICE ID',
          'TEMPLATE ID',
          toSend,
          'User ID'
        )
          .then((response:any) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err:any) => {
            console.log('FAILED...', err);
          });
      };
  
    const handleChange = (e:any) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <div className='App'>
       <form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form>
      </div>
    );
  }
  export default Email;