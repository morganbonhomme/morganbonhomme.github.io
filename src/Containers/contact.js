import React from 'react';
import git from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import idPicture from '../assets/ID.jpg';


const contact = () => {
return (

  
  <div className="row mt-5 pt-5">

<div className="col-12 mb-4">
        <img src={idPicture} className="mx-auto mt-5 d-block size20vh rounded-circle img-thumbnail" alt="idpic"/>
      </div>
    <div className="col-1 col-md-4 align-items-center">
      </div>
    <div className="col-10 col-md-4 mb-2 bg-egg rounded">
      <h2 className="my-2 py-0 font24 text-center font24 fontregular linespace"> Morgan Bonhomme</h2>
      <ul className='nobullet my-4 ml-4 linespace '>
        <li>
          <img src={email} className='logo' alt="idpic"/> <span className='text-dark' > bonhomme.morgan@gmail.com </span>
        </li>
        <br></br>
        <li>
          <img src={git} className='logo' alt="idpic"/> <a href='https://github.com/morganbonhomme' className='text-dark' target="_blank" > github.com/morganbonhomme </a>
        </li>
        <br></br>
        <li>
          <img src={linkedin} className='logo' alt="idpic"/> <a href='https://www.linkedin.com/in/morgan-bonhomme-0592738b' className='text-dark' target="_blank" > morgan-bonhomme-0592738b </a>
        </li>
      </ul>
    </div>
    <div className="col-1 col-md-4 align-items-center">
    </div>
  </div>

)
}

export default contact;