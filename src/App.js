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
import Agere from "agere"


let useClickOutside=(handler)=>{
    let domNode = React.useRef()

    React.useEffect(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)){
                handler()
            }
        }
        document.addEventListener("mousedown",maybeHandler)

        return () =>{
            document.removeEventListener("mousedown",maybeHandler)
        }
    })  
    return domNode
}


export default function App(){
    function runSite(){
        document.querySelector('.intro').style.opacity='0'
        setTimeout(() => {
            document.querySelector('.intro').style.display='none'
            document.querySelector('.site').style.display='block'
        }, 400);
        setTimeout(() => {
            document.querySelector('header .logo').classList.add('showing')
        }, 500);
    }


    function setting(){
        document.querySelector('.theme-toggle .bar').classList.toggle('show')
    }
    let domNode = useClickOutside(()=>{
        document.querySelector('.theme-toggle .bar').classList.remove('show')
    })

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

    function activeCircle(e){
        if(e.target.id === 'active-circle'){
            e.target.id=''
        }else{
            e.target.id='active-circle'
        }
    }
    let length = [];
    for (let i = 0; i < 2700; i++) {
        length.push(i)
    }

    document.ondblclick=()=>{
        if(document.getElementById('mouse-effect').style.display==='none'){
            document.getElementById('mouse-effect').style.display='flex'
        }else{
            document.getElementById('mouse-effect').style.display='none'
        }
    }


    return(
        <div>
            <div id="mouse-effect">
                {length.map(i=>(
                    <span key={i} className={i} onClick={activeCircle} id="f"></span>
                ))}
            </div>
            <div className="reasure" onClick={()=>{document.querySelector('.reasure').style.display='none';}}></div>
            <div  className="theme-toggle">
                <div ref={domNode} className="bar">
                    <div id="default" className="active" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="purple" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="dark-bink" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="red" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="gold" onClick={setTheme}><MdDone className="done"/></div>
                    <div id="green" onClick={setTheme}><MdDone className="done"/></div>
                </div>
                <AiTwotoneSetting className="icon" onClick={setting}/>
            </div>
            <div className="intro" style={{zIndex:'-10'}}>
                <p id="mouse-hint">Click twice at screen to remove this mouse effect and twice again to show it</p>
                <div class="neon" onClick={runSite}>Show it</div>
            </div>
            <div className="site">
                <Header />
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