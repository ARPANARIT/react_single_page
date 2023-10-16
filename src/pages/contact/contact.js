import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section id='contactPage'>
        <div className='contact'><h1>Contact Me</h1>
        <form className='contactForm'>
            <input className='name' placeholder=' Name' type='text'></input>
            <input className='email' placeholder=' Email' type='email'></input>
            <textarea name='message' rows='10' className='msg' placeholder='Message'></textarea>
            <button value='' type='submit'>SEND</button>
        </form>
        </div>
    </section>
  )
}

export default Contact