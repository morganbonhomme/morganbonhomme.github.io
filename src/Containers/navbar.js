import React from 'react'; 

const navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-darkblue navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-link text-white font-weight-bolder mx-3" href="/about"> ABOUT ME </a>
          <a className="nav-link text-white font-weight-bolder mx-3" href="/projects"> PROJECTS</a>
          <a className="nav-link text-white font-weight-bolder mx-3" href="contact"> CONTACT </a>
        </div>
      </div>
    </nav>
  )
};

export default navbar;