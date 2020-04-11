import React from 'react'

import { HashRouter as Router, Route } from "react-router-dom"

import Welcome from './pages/Welcome'
import About from './pages/About'

import Navbar from './components/Navbar'
import Layout from './components/Layout'

const App = (props) => {

  const popUp = () => {
    alert("Clicked!")
  }

  return (
    <Router>
      <Navbar title={ "Main Page" }/>
      <Layout>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
      </Layout>
    </Router> 
  )
}

export default App;
