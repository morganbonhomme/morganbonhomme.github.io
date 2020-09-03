import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';

import Aux from '../Containers/UI/hoc';
import Navbar from '../Containers/navbar';
import About from '../Containers/about';
import Projects from '../Containers/projects';
import SalaryTool from '../Containers/salarytool';
import Contact from '../Containers/contact';


class Layout extends Component {

  render () {
    let links = 
      <Switch>
        <Route path="/about" exact component={About}/>
        <Route path="/projects/salarytool" exact component={SalaryTool}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>

        <Route path="/" component={About}/>


      </Switch>
    return (
      <Aux>
        <Navbar />
        { links }
      </Aux>
    )
  }
}

export default Layout;