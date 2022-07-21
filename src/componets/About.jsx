import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-img">
            <img src={require('../images/me2.png')} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <div className="blur"></div>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            <article className='about-card'>
              <div className="blur"></div>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>

            <article className='about-card'>
              <div className="blur"></div>
              <VscFolderActive className='about-icon'/>
              <h5>Projects</h5>
              <small>40+ Projects</small>
            </article>
          </div>

          <p>Hello , I'm Mohamed abdelhakeem . i'm a Programmer (from : 2019 | till NOW) & Frontend Web Developer (from : 2021 | till NOW) & Graphic Designer (from : 2019 | to : 2022)</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about