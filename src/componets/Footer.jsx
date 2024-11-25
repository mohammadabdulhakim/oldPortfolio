import React from 'react'
import {ImTwitter} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {GrGithub, GrLinkedin} from 'react-icons/gr'


export default  function footer() {
  return (
    <footer id="footer">
      <h1 className="logo">
          <span>D</span>
          <span>U</span>
          <span>X </span>
          <span>P</span>
          <span>I</span>
          <span>X</span>
          <span>E</span>
          <span>L</span>
          <span>S</span>
      </h1>
      <div className="social">
      <div className="wrapper">
          <a className="button" target='_blank' href='https://www.linkedin.com/in/mohammadabdulhakim/'>
              <div className="iconn"><GrLinkedin className='i'/></div>
              <span>Linkedin</span>
          </a>
          <a className="button" target='_blank' href='#'>
              <div className="iconn"><ImTwitter className='i'/></div>
              <span>Twitter</span>
          </a>
          <a className="button" target='_blank' href='https://github.com/mohammadabdulhakim'>
              <div className="iconn"><BsGithub className='i'/></div>
              <span>Github</span>
          </a>
        </div>
      </div>
      <small>&copy; DUX PIXELS. All rights reserved.</small>
    </footer>
  )
}

