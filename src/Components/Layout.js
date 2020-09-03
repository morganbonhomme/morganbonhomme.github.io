import React, { Component } from 'react'; 
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Aux from '../Containers/UI/hoc';
import Navbar from '../Containers/navbar';
import About from '../Containers/about';
import Projects from '../Containers/projects';
import SalaryTool from '../Containers/salarytool';
import Contact from '../Containers/contact';

const history = createBrowserHistory();


class Layout extends Component {
  

  render () {
    let links = 
    <Router history={history}>
      <Switch>
        <Route path="/about" exact component={About}/>
        <Route path="/projects/salarytool" exact component={SalaryTool}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>

        <Route path="/" component={About}/>


      </Switch>
    </Router>
    return (
      <Aux>
        <Navbar />
        { links }
      </Aux>
    )
  }
}

export default Layout;