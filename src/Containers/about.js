import React from 'react'; 
import idPicture from '../assets/ID.jpg';
import git from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';


const about = () => {
  return (
  <div className="container">
    
    <div className="row">
      <div className="col-12">
        <img src={idPicture} className="mx-auto mt-5 d-block size30vh rounded-circle img-thumbnail" alt="idpic"/>
      </div>
      <div className="col-1 align-items-center">
      </div>
      <div className="col-10 align-items-center">
        <h1 className="my-4 py-0 text-center mb-4 mt-4 color-grey font30"> Hello, I'm Morgan.</h1>
        <h2 className="my-0 py-0 font24 text-center font24 fontregular linespace"> I'm a Full Stack JavaScript developer based in Nantes, France. Leaving a background of finance and consulting, I am now a self-taught full stack developer. I'm available for a full-time role as a junior full  stack developer. If you're hiring, please get in touch.</h2>
      </div>
      <div className="col-1 align-items-center">
      </div>
    </div>
      

      <div className="row mt-5">
        <div className="col-12 mb-2">
          <div className='text-center'>  
          <a href='https://github.com/morganbonhomme' target="_blank" className='imglink' > <img src={git} className='logo' alt="idpic"/> </a> 
          <a href='https://www.linkedin.com/in/morgan-bonhomme-0592738b/' className='imglink' target="_blank" > <img src={linkedin} className='logo' alt="idpic"/> </a> 
          <a href='mailto:bonhomme.morgan@gmail.com' className='imglink' target="_blank" > <img src={email} className='logo' alt="idpic"/> </a> 
          </div>
        </div>
        <div className="col-12 mt-5">
          <div className='text-center'>  
          <a href='/projects' className='viewprojects font24 font600 rounded' > VIEW PROJECTS </a> 
          </div>
        </div>

      </div>



  </div>

  


  )
}

export default about