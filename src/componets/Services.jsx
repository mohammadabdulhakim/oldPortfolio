import React from 'react'
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I offer ? </h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="services-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services-list">
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services-head">
            <h3>Web development</h3>
          </div>

          <ul className="services-list">
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services-head">
            <h3>Content Creation</h3>
          </div>

          <ul className="services-list">
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

