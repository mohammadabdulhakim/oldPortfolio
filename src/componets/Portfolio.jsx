import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

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

export default function Portfolio() {
  const projectsData=[
    {
      id:10,
      img:'portfolio10.png',
      title:'Share photos with others around the world',
      github:'https://github.com/mohammadabdulhakim/TouchShare',
      demo:'https://touchshare.netlify.app/',
    },
    {
      id:11,
      img:'portfolio11.png',
      title:'Dashboard with group of Apps and Charts',
      github:'https://github.com/mohammadabdulhakim/Apps-Charts-dashboard',
      demo:'https://appsandcharts.netlify.app/',
    },
    {
      id:1,
      img:'portfolio1.png',
      title:'Check your typing Speed',
      github:'https://github.com/mohammadabdulhakim/Typing-Speed-Test',
      demo:'https://duxtypingspeedtest.netlify.app/',
    },
    {
      id:3,
      img:'portfolio3.png',
      title:'Admin dashboard design',
      github:'https://github.com/mohammadabdulhakim/Admin-dashboard-design',
      demo:'https://duxadmindashboard.netlify.app/',
    },
    {
      id:9,
      img:'portfolio9.png',
      title:'CRUDS operations',
      github:'https://github.com/mohammadabdulhakim/CRUDS',
      demo:'https://duxcruds.netlify.app/',
    },
    {
      id:2,
      img:'portfolio2.png',
      title:'FRESH COFEE',
      github:'https://github.com/mohammadabdulhakim/Coffee-shop',
      demo:'https://duxcoffeeshop.netlify.app/',
    },
    {
      id:8,
      img:'portfolio8.png',
      title:'Draw a brilliant photo with boxes',
      github:'https://github.com/mohammadabdulhakim/Draw-with-boxes',
      demo:'https://drawwithboxes.netlify.app/',
    },
  ]

  const graphicData =[
    {
      id:8,
      img:'portfolioG8.png',
      title:'',
      view:'https://drive.google.com/file/d/1OBwvZqyrMKWqi3TREOwrORk1KGAJKtny/view?usp=sharing',
    },
    {
      id:1,
      img:'portfolioG1.png',
      title:'',
      view:'https://drive.google.com/file/d/1-oopD9oc45guYHY-T-5ZkXFD9RvgNLsY/view?usp=sharing',
    },
    {
      id:2,
      img:'portfolioG2.png',
      title:'',
      view:'https://drive.google.com/file/d/11rQe9UtzloaPVUba7bLlxF2jYQ64tt3C/view?usp=sharing',
    },
    {
      id:3,
      img:'portfolioG3.png',
      title:'',
      view:'https://drive.google.com/file/d/1kcq0QBXZWfRFtWggGqqtgiMvGGeyCO-K/view?usp=sharing',
    },
  ]

  const [imgSrc,setImgSrc]=React.useState('')
  const [isOpen,setIsOpen]=React.useState(false)

  function getImg(imgSrc){
    setIsOpen(true)
    setImgSrc(imgSrc)
  }
  let domNode = useClickOutside(()=>{
    setIsOpen(false)
  })

  return (
    <section id='portfolio'>
      <h5>My recent works</h5>
      <h2>Protfolio</h2>

      <h2>In web Development</h2>
        <div className="js-package">
            <h1>Agere (JS package)</h1>
            <h5 className='hint'>To install package</h5>
            <h5 className='iPackage'>
              <span>n</span><span>p</span><span>m</span> <span>i</span> <span>a</span><span>g</span><span>e</span><span>r</span><span>e</span></h5>
            <div className="cta">
              <a href="https://www.npmjs.com/package/agere" className="btn btn-primary" target="_blank">Show in npm</a>
              <a href="https://github.com/mohammadabdulhakim/agere" className="btn" target="_blank">Show in Github</a>
            </div>
        </div>
      <div className="container protfolio-container">
        {projectsData.map(project=>{
          return(
            <article key={project.id} className='protfolio-item'>
              <div className="blur"></div>
              <div className="protfolio-img">
                <img src={require(`../images/${project.img}`)} alt={project.title} style={{height:"200px"}} />
              </div>
              <h3>{project.title}</h3>
              <div className="cta">
                <a href={project.github} className="btn" target="_blank">Github</a>
                <a href={project.demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
          })}
      </div>
      <h2 style={{marginTop:'3rem'}}>In graphic</h2>
      <div className="container protfolio-container">
        {isOpen 
        &&
          <div id='img-view'>
            <img ref={domNode} src={imgSrc} alt="" />
            <span id="view-bg" onClick={()=>setIsOpen(false)}></span>
            <AiOutlineClose id='close-img-view' onClick={()=>{setIsOpen(false)}}/>
          </div>
        }
          {graphicData.map(photo=>{
            return(
              <article key={photo.id}  className='protfolio-item'>
                <div className="blur"></div>
                <div className="portfolio-img">
                  <img src={require(`../images/${photo.img}`)} alt={photo.title} style={{height:'200px'}} />
                </div>
                <h3>{photo.title}</h3>
                <div className="cta">
                  <button className="btn btn-primary" target="_blank" style={{width:'90%',margin:'0 auto',textAlign:'center',fontWeight:"bold"}} onClick={()=>{getImg(require(`../images/${photo.img}`))}}>View</button>
                </div>
              </article>
            )
          })}
      </div>
    </section>
  )
}