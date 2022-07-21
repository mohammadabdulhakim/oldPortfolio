import React from "react"

import Header from './componets/Header'
import Nav from './componets/Nav'
import About from './componets/About'
import Experience from './componets/Experience'
import Services from './componets/Services'
import Portfolio from './componets/Portfolio'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import {AiTwotoneSetting} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'



export default function App(){
    const [started,setStarted] = React.useState(false)
    function runSite(){
        setStarted(s=>true)
        document.querySelector('.intro').style.opacity='0'
        setTimeout(() => {
            document.querySelector('.intro').style.display='none'
            document.querySelector('.site').style.display='block'
        }, 400);
        setTimeout(() => {
            document.querySelector('header .logo').classList.add('showing')
        }, 2000);
    }


    function setting(){
        document.querySelector('.theme-toggle .bar').classList.toggle('show')
    }

    const colors = document.querySelectorAll('.theme-toggle .bar div')
    const colorsArray = Array.from(colors)
    function setTheme(){
        colorsArray.forEach((color)=>{
            color.addEventListener('click',(e)=>{
                colorsArray.forEach(c=>{
                    c.classList.remove('active')
                })
                color.classList.add('active')
                document.body.className=''
                document.body.className=color.id
                document.querySelector('.theme-toggle .bar').classList.remove('show')
            })
        })
    }

    return(
        <div>
            <div className="reasure" onClick={()=>{document.querySelector('.reasure').style.display='none';}}></div>
            <div className="theme-toggle">
                <div className="bar">
                    <div id="default" className="active" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="purple" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="dark-bink" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="red" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="gold" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="green" onClick={setTheme}><MdDone className="done"/></div>
                </div>
                <AiTwotoneSetting className="icon" onClick={setting}/>
            </div>
            <div className="intro">
                <div class="neon" onClick={runSite}>Show it</div>
            </div>
            <div className="site">
                <Header started={started} />
                <Nav />
                <About />
                <Experience />
                {/* <Services /> */}
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}