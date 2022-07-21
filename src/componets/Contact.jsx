import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef as UseRef } from "react";
import emailjs from 'emailjs-com';

export default function contact() {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_azo6lvf', 'template_gtotug4', form.current, 'F8w6HcAu1YjtwtKfB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
      function online(){
        e.target.reset();
        document.querySelector('.reasure').textContent='The message sent successfully'
        document.querySelector('.reasure').style='display:flex;color:green;'
      }
      function offline(){
        document.querySelector('.reasure').textContent='Check your internet and try again'
        document.querySelector('.reasure').style='display:flex;color:red;'
      }
      if(window.navigator.onLine){
        online()
      }else{
        offline()
      }

  };
  
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option' style={{position:'relative'}}>
            <div className="blur"></div>
            <MdOutlineEmail className='icon'/>
            <h4>Email</h4>
            <h5>duxwork0@gmail.com</h5>
            <a href="mailto:duxwork0@gmail.com" target="_blank">Send a message</a>
          </article>

        </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="name">
              <input type="text" name="name" placeholder=' ' className='form-input' required/>
              <label htmlFor="">Your Full Name</label>
            </div>
            <div className="email">
              <input type="email" name="email" placeholder=' ' className='form-input' required/>
              <label htmlFor="">Your Email</label>
            </div>
            <div className="message">
              <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
            </div>
            <button className="btn btn-primary">Send</button>
          </form>
      </div>
    </section>
  )
}

