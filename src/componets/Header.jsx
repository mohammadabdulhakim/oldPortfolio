import React from 'react'
import ReactPlayer from 'react-player'
import CTA from './CTA'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'



export default function Header(props) {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm </h5>
        
        <h1 className='logo'>
          <span>M</span>
          <span>O</span>
          <span>H </span>
          <span>A</span>
          <span>M</span>
          <span>M</span>
          <span>E</span>
          <span>D</span>
        </h1>
        <h5 id='job' className='text-light'>Frontend Web Developer</h5>
        <CTA />
        <div className="header-social">
          <a href="https://www.linkedin.com/in/duxpixels/" target='_blank'><BsLinkedin /></a>
          <a href="https://github.com/duxpixels" target='_blank'><BsGithub /></a>
          <a href="https://twitter.com/dux_pixels" target='_blank'><BsTwitter /></a>
        </div>
        <div className="me">
          { props.started && <img className="video" url={require("../images/dux-video-alternative.png")} />}
        </div>
        <a href="#footer" className='scroll-down'>SCROLL DOWN <span style={{letterSpacing:'-2px'}}>————▷</span></a>
      </div>
    </header>
  )
}
