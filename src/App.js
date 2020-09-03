import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './Components/Layout'


function App() {
  return (
    <BrowserRouter basename='/'> 
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
