import React from 'react'; 
import salarysimu from '../assets/salarysimu.svg';
import tictactoedemo from '../assets/tictactoedemo.gif';
import etchdemo from '../assets/etchdemo.gif';
import nytdemo from '../assets/nytdemo.png';
import responsivedesigndemo from '../assets/responsivedesigndemo.gif';
import weatherdemo from '../assets/weatherdemo.png';
import messagedemo from '../assets/messagedemo.png';
import secretblogdemo from '../assets/secretblogdemo.png'


const project = () => {
  return (
  <div className="container">
    <div className="row bg-egg mt-4 pl-3 rounded">
      <div className="col-md-6 col-12">
        <p className='font30 font600 mt-4 mb-2'> Basic Games </p>
        <span class="badge bg-orange text-white mr-2">NodeJS</span>
        <span class="badge bg-orange text-white mx-2">Express</span>
        <span class="badge bg-orange text-white mx-2">Firestore</span>
        <br></br>
        <span class="badge bg-darkblue text-white mr-2">React</span>
        <span class="badge bg-darkblue text-white mx-2">Redux</span>
        <span class="badge bg-darkblue text-white mx-2 mb-2">Bootstrap</span>
        <p className='font18 fontregular  mt-2 mb-4 text-justify'> BasicGames defines its employees' compensation following the Gitlab compensation model. They needed an internal tool to display this simulator to all employees and to allow managers to have an overview of their team compensation.
        </p>
        <a href='/projects/salarytool' className='viewproject font18 font600 rounded' > View full project → </a> 
      </div>
      <div className="col-md-6 col-12 text-center">
        <object type="image/svg+xml" className="height34vh my-5 img-fluid" data={salarysimu}>
          Your browser does not support SVG
        </object>
      </div>
    </div>
    
    <div className="row bg-egg mt-4 pl-3 rounded">
      <div className='col-12'>
        <p className='font30 font600 mt-4 mb-2'> The Odin Project </p>
        <span class="badge bg-orange text-white mr-2">NodeJS</span>
        <span class="badge bg-orange text-white mx-2">Express</span>
        <span class="badge bg-orange text-white mx-2">MongoDB</span>
        <br></br>
        <span class="badge bg-darkblue text-white mr-2">React</span>
        <span class="badge bg-darkblue text-white mx-2 mb-2">Bootstrap</span>
        <p className='font18 fontregular  mt-2  mb-4 text-justify'> The Odin Project is a full stack web development bootcamp where you create websites with JavaScript, React and NodeJS.
        </p>
      </div>

      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>SECRET BLOG </p>
        <img src={secretblogdemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://fatidique-croissant-99694.herokuapp.com/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Members-Only' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>

      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>SIMPLE MESSAGE BOARD </p>
        <img src={messagedemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://fast-plains-46479.herokuapp.com/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Message-Board' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>

      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>WEATHER APP </p>
        <img src={weatherdemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://morganbonhomme.github.io/Weather-App/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Weather-App' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>

      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>RESPONSIVE DESIGN </p>
        <img src={responsivedesigndemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://morganbonhomme.github.io/Responsive-Design/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Responsive-Design' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>

      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>TIC TAC TOE </p>
        <img src={tictactoedemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://morganbonhomme.github.io/Tic-Tac-Toe/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Tic-Tac-Toe' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>

      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>FLEXBOX PRACTICE </p>
        <img src={nytdemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://morganbonhomme.github.io/NYT-Article/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/NYT-Article' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>
      <div className='col-md-4 col-12 text-center mb-5'> 
        <p className='font600'>ETCH-A-SKETCH </p>
        <img src={etchdemo} className='img-fluid border mb-4 maxheight' alt="idpic"/>
        <br></br>
        <a href='https://morganbonhomme.github.io/Etch-A-Sketch/' target="_blank" className='viewprojecttop rounded mr-1 mb-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Etch-A-Sketch' target="_blank" className='viewrepo rounded ml-1 mt-2 mb-4' > Github Repo → </a> 
      </div>
    </div>
  </div>

  


  )
}

export default project