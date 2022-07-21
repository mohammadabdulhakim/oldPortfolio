import React from 'react'
import {useState as UseState} from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

export default function experience() {
  let section =document.querySelector('#experience')

  let htmlPercent =document.querySelector('.html-percent')
  let htmlProgress =document.querySelector('.html')

  let cssPercent =document.querySelector('.css-percent')
  let cssProgress =document.querySelector('.css')

  let jsProgress =document.querySelector('.js')
  let jsPercent =document.querySelector('.js-percent')

  let reactPercent =document.querySelector('.react-percent')
  let reactProgress =document.querySelector('.react')

  let bootstrabPercent =document.querySelector('.bootstrab-percent')
  let bootstrabProgress =document.querySelector('.bootstrab')

  let reduxPercent =document.querySelector('.redux-percent')
  let reduxProgress =document.querySelector('.redux')

  let photoshopProgress =document.querySelector('.photoshop')
  let photoshopPercent =document.querySelector('.photoshop-percent')

  let illustratorPercent =document.querySelector('.illustrator-percent')
  let illustratorProgress =document.querySelector('.illustrator')

  let afterEffectsProgress =document.querySelector('.after-effects')
  let afterEffectsPercent =document.querySelector('.after-effects-percent')

  let camtasiaPercent =document.querySelector('.camtasia-percent')
  let camtasiaProgress =document.querySelector('.camtasia')


  const [finished,setFinished] = UseState(false);

  window.onscroll = function(){

      if(window.scrollY >= document.getElementById('portfolio').offsetTop - 200){
        document.querySelector('.js-package').style.display='flex'
      }else{
        document.querySelector('.js-package').style.display='none'
      }

      if(window.scrollY >= section.offsetTop - 100){
          if(!finished){
              let iHtml =0;
              let htmlPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  iHtml++
                  htmlPercent.innerHTML=`${iHtml}%`
                  if(iHtml === +htmlProgress.dataset.width){
                      clearInterval(htmlPercentTime)
                  }
              }, 10);
      
              let iCss =0;
              let cssPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  iCss++
                  cssPercent.innerHTML=`${iCss}%`
                  if(iCss === +cssProgress.dataset.width){
                      clearInterval(cssPercentTime)
                  }
              }, 10);
      
              let ijs =0;
              let jsPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  ijs++
                  jsPercent.innerHTML=`${ijs}%`
                  if(ijs === +jsProgress.dataset.width){
                      clearInterval(jsPercentTime)
                  }
              }, 10);
              
              let ireact =0;
              let reactPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  ireact++
                  reactPercent.innerHTML=`${ireact}%`
                  if(ireact === +reactProgress.dataset.width){
                      clearInterval(reactPercentTime)
                  }
              }, 10);
      
              let ibootstrab =0;
              let bootstrabPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  ibootstrab++
                  bootstrabPercent.innerHTML=`${ibootstrab}%`
                  if(ibootstrab === +bootstrabProgress.dataset.width){
                      clearInterval(bootstrabPercentTime)
                  }
              }, 10);
              
              let iredux =0;
              let reduxPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  iredux++
                  reduxPercent.innerHTML=`${iredux}%`
                  if(iredux === +reduxProgress.dataset.width){
                      clearInterval(reduxPercentTime)
                  }
              }, 10);

              let iphotoshop =0;
              let photoshopPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  iphotoshop++
                  photoshopPercent.innerHTML=`${iphotoshop}%`
                  if(iphotoshop === +photoshopProgress.dataset.width){
                      clearInterval(photoshopPercentTime)
                  }
              }, 10);

              let iillustrator =0;
              let illustratorPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  iillustrator++
                  illustratorPercent.innerHTML=`${iillustrator}%`
                  if(iillustrator === +illustratorProgress.dataset.width){
                      clearInterval(illustratorPercentTime)
                  }
              }, 10);

              let iafterEffects =0;
              let afterEffectsPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  iafterEffects++
                  afterEffectsPercent.innerHTML=`${iafterEffects}%`
                  if(iafterEffects === +afterEffectsProgress.dataset.width){
                      clearInterval(afterEffectsPercentTime)
                  }
              }, 10);

              let icamtasia =0;
              let camtasiaPercentTime =setInterval(() => {
                  setFinished(f=>true)
                  icamtasia++
                  camtasiaPercent.innerHTML=`${icamtasia}%`
                  if(icamtasia === +camtasiaProgress.dataset.width){
                      clearInterval(camtasiaPercentTime)
                  }
              }, 10);
          }

          htmlProgress.style.width=`${htmlProgress.dataset.width}%`
          cssProgress.style.width=`${cssProgress.dataset.width}%`
          jsProgress.style.width=`${jsProgress.dataset.width}%`
          reactProgress.style.width=`${reactProgress.dataset.width}%`
          bootstrabProgress.style.width=`${bootstrabProgress.dataset.width}%`
          reduxProgress.style.width=`${reduxProgress.dataset.width}%`
          photoshopProgress.style.width=`${photoshopProgress.dataset.width}%`
          illustratorProgress.style.width=`${illustratorProgress.dataset.width}%`
          afterEffectsProgress.style.width=`${afterEffectsProgress.dataset.width}%`
          camtasiaProgress.style.width=`${camtasiaProgress.dataset.width}%`
      }
      
      
      
      else{
          htmlPercent.textContent='0%'
          htmlProgress.style.width='0%'
          cssPercent.textContent='0%'
          cssProgress.style.width='0%'
          jsPercent.textContent='0%'
          jsProgress.style.width='0%'
          reactPercent.textContent='0%'
          reactProgress.style.width='0%'
          bootstrabPercent.textContent='0%'
          bootstrabProgress.style.width='0%'
          reduxPercent.textContent='0%'
          reduxProgress.style.width='0%'
          photoshopPercent.textContent='0%'
          photoshopProgress.style.width='0%'
          illustratorPercent.textContent='0%'
          illustratorProgress.style.width='0%'
          afterEffectsPercent.textContent='0%'
          afterEffectsProgress.style.width='0%'
          camtasiaPercent.textContent='0%'
          camtasiaProgress.style.width='0%'
          setFinished(f=>false)
      }
  }


  return (
    <section id='experience'>
      <h5>What skills I have ?</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="frontend-experience">
          <div className="blur"></div>
          <h3>FRONTEND-DEVELOPMENT</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>HTML</h4>
                <div className="progress">
                  <span className="html" data-width='80' ></span>
                  <p class="html-percent"></p>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>CSS</h4>
                <div className="progress">
                  <span className="css" data-width='75'></span>
                  <p className="css-percent"></p>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <dir>
                <h4>Java Script</h4>
                <div className="progress">
                  <span className="js" data-width='80'></span>
                  <p className="js-percent"></p>
                </div>
              </dir>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>React</h4>
                <div className="progress">
                  <span className="react" data-width='80'></span>
                  <p className="react-percent"></p>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Bootstrap</h4>
                <div className="progress">
                  <span className="bootstrab" data-width='10' ></span>
                  <p class="bootstrab-percent"></p>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Redux</h4>
                <div className="progress">
                  <span className="redux" data-width='10' ></span>
                  <p class="redux-percent"></p>
                </div>
              </div>
            </article>
          </div>
        </div>


        <div className="graphic-experience">
          <div className="blur"></div>
        <h3>GRAPHIC DESIGN</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Photoshop</h4>
                <div className="progress">
                    <span className="photoshop" data-width='50' ></span>
                    <p class="photoshop-percent"></p>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Illustrator</h4>
                <div className="progress">
                    <span className="illustrator" data-width='50' ></span>
                    <p class="illustrator-percent"></p>
                  </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>After Effects</h4>
                <div className="progress">
                  <span className="after-effects" data-width='65' ></span>
                  <p class="after-effects-percent"></p>
                </div>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Camtasia</h4>
                <div className="progress">
                  <span className="camtasia" data-width='85' ></span>
                  <p class="camtasia-percent"></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}