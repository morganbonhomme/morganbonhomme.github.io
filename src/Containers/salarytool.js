import React from 'react';
import salarygif from '../assets/salary1.gif';
import salary1 from '../assets/salary2.png';
import salary2 from '../assets/salary3.png';

const salarytool = () => {
  return (
    <div className='container'> 
      <div className='row mt-5 bg-egg rounded p-2'>
        <h1 className="mx-auto my-2 color-darkblue"> SALARY SIMULATOR </h1>
        <div className='col-12 mb-4'>
          <h2 className="my-2 py-0 titleprojectpage"> CONTEXT : </h2>
          <h3 className="m-0 p-0 font24 text-justify font18 fontregular"> BasicGames is an hyper-casual mobile gaming company, creating and publishing its own games worldwide. They define their employees' compensation following the Gitlab compensation model. </h3>
        </div>
        <div className='col-12 mb-4'>
          <h2 className="my-2 py-0 titleprojectpage"> OBJECTIVE : </h2>
          <h3 className="m-0 p-0 font24 text-justify font18 fontregular"> They needed an internal tool to display this simulator to all employees and to allow managers to have an overview of their team compensation.
          </h3>
        </div>
        <div className='col-12 mb-4'>
          <h2 className="my-2 py-0 titleprojectpage"> RESULT : </h2>
          <h3 className="m-0 mb-3 p-0 font24 text-justify font18 fontregular linespace"> You can log in with these fake accounts : 
          <br></br>
          <br></br>

          <span className='font-weight-bold'>ADMIN: </span> Mail : dofafav143@rika0525.com // Password : Password2020!
          <br></br>
          
          Admin have access to every features (create, edit & delete user, edit salary)
          <br></br>
          <br></br>

          <span className='font-weight-bold'>TEAM: </span> Mail : hepevo9311@chclzq.com // Password : Password2020!
          <br></br>
          
          Team members have access only to their personal information and the simulator.
          </h3>

          <a href='https://modular-source-287611.nw.r.appspot.com/salary-calculator' target="_blank" className='viewprojecttop rounded mr-1 my-4' > Live demo → </a> 
        <a href='https://github.com/morganbonhomme/Salary-Simulator' target="_blank" className='viewrepo rounded ml-1 my-4' > Github Repo → </a> 
        <img src={salarygif} className="img-fluid border my-4" alt="idpic"/>

        <img src={salary1} className="img-fluid border my-4" alt="idpic"/>
        <img src={salary2} className="img-fluid border my-4" alt="idpic"/>


        </div>

      </div>
    </div>
  )
};

export default salarytool;