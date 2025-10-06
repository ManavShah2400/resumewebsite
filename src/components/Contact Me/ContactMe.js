import React, { useRef} from 'react';
import './ContactMe.css';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3apohsk', 'template_6yt5oj3', form.current, {
        publicKey: '0-7CW9qHLAa1bJ5Fd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email.');
        },
      );
  };
  return (
    <section id='contactmeSection'>
      <div className='contactme'>
        <span className='contactmeHead'>Contact Me</span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
          <input className='name' type='text' placeholder='Enter your Name' name='from_name' ></input>  
          <input className='email' type='email' placeholder='Enter your E-mail' name='from_email' ></input>
          <textarea className='msg' rows='5' name='message' placeholder='Enter your Message' ></textarea>
          <button className='SubmitBtn' value='send' type='submit'>Submit</button>
          {/* <div className='contactmelink'>
                    <img src='' alt='' className='links'/>
                </div> */}
        </form>
      </div>
    </section>
  )
}

export default ContactMe
