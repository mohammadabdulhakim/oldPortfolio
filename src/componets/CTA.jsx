import React from 'react'
import cv from'../images/cv.pdf'

export default function CTA(){
  return (
    <div className="cta">
        <a href={cv} download className="cv btn">DOWNLOAD CV</a>
        <a href="#contact" className="talk btn btn-primary">let's talk</a>
    </div>
  )
}

