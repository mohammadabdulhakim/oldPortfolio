import React from 'react'


export default function Portfolio() {
  const projectsData=[
    {
      id:1,
      img:'portfolio1.png',
      title:'Check your typing Speed',
      github:'https://github.com/duxpixels/Typing-Speed-Test',
      demo:'https://duxtypingspeedtest.netlify.app/',
    },
    {
      id:3,
      img:'portfolio3.png',
      title:'Admin dashboard design',
      github:'https://github.com/duxpixels/Admin-dashboard-design',
      demo:'https://duxadmindashboard.netlify.app/',
    },
    {
      id:9,
      img:'portfolio9.png',
      title:'CRUDS operations',
      github:'https://github.com/duxpixels/CRUDS',
      demo:'https://duxcruds.netlify.app/',
    },
    {
      id:2,
      img:'portfolio2.png',
      title:'FRESH COFEE',
      github:'https://github.com/duxpixels/Coffee-shop',
      demo:'https://duxcoffeeshop.netlify.app/',
    },
    {
      id:4,
      img:'portfolio4.png',
      title:'Play blackjack with your friend',
      github:'https://github.com/duxpixels/Blackjack-with-friend',
      demo:'https://duxblackjack.netlify.app/',
    },
    {
      id:5,
      img:'portfolio5.png',
      title:'Get the winner among you and your friends',
      github:'https://github.com/duxpixels/Get-the-winner',
      demo:'https://getthewinner.netlify.app/',
    },
    {
      id:6,
      img:'portfolio6.png',
      title:'Tenzies | collect numbers',
      github:'https://github.com/duxpixels/Tenzies',
      demo:'https://duxtenzies.netlify.app/',
    },
    {
      id:7,
      img:'portfolio7.png',
      title:'Generate memes quickly',
      github:'https://github.com/duxpixels/memes-generator',
      demo:'https://meme2generate.netlify.app/',
    },
    {
      id:8,
      img:'portfolio8.png',
      title:'Draw a brilliant photo with boxes',
      github:'https://github.com/duxpixels/Draw-with-boxes',
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
      id:7,
      img:'portfolioG7.png',
      title:'',
      view:'https://drive.google.com/file/d/1MDXFjktXxqiLBdgNudBG6FzbIOYPLoXO/view?usp=sharing',
    },
    {
      id:6,
      img:'portfolioG6.png',
      title:'',
      view:'https://drive.google.com/file/d/13FtSJoPGJBe73q-xW7TMHW4GFqVoPBle/view?usp=sharing',
    },
    {
      id:4,
      img:'portfolioG4.png',
      title:'',
      view:'https://drive.google.com/file/d/1E3BQOEvKgNw3poiy0WFiiIQyw9jKl6hY/view?usp=sharing',
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
    {
      id:5,
      img:'portfolioG5.png',
      title:'',
      view:'https://drive.google.com/file/d/1sH-B4vKKS1B8Ss_1LNaHewfwXVXzHbT8/view?usp=sharing',
    },
  ]
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
              <a href="https://github.com/duxpixels/agere" className="btn" target="_blank">Show in Github</a>
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
          {graphicData.map(photo=>{
            return(
              <article key={photo.id}  className='protfolio-item'>
                <div className="blur"></div>
                <div className="portfolio-img">
                  <img src={require(`../images/${photo.img}`)} alt={photo.title} style={{height:'200px'}} />
                </div>
                <h3>{photo.title}</h3>
                <div className="cta">
                  <a href={photo.view} className="btn btn-primary" target="_blank" style={{width:'90%',margin:'0 auto',textAlign:'center'}}>View</a>
                </div>
              </article>
            )
          })}
      </div>
    </section>
  )
}