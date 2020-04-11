import React from 'react'

import Navbar from './components/Navbar'

import Modal from './components/Modal'

const App = (props) => {

  const popUp = () => {
    alert("Clicked!")
  }

  return (
    <div>
      <Navbar title={ "Main Page" }/>
      <div class="jumbotron">
        <h1 class="display-3">Welcome!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"/>
        <p>Select between these two options.</p>

          <button type="button" class="btn btn-primary" onClick={ popUp }>Create New Strategy</button>
          <button type="button" class="btn btn-secondary">Use Existing Strategy</button>
          
          <Modal />
          {/* <div class="containter">
            <div class="row">
              <div class="col">
                <div class="alert alert-success alert-dismissable" role="alert">
                <button type="button" class="close" data-dismiss="alert">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h2 class="alert-heading">Alert</h2>
                  <p> I am alertAlert! </p>
          
                </div>
              </div>
            </div>
          </div> */}

          
      </div>
    </div>
  )
}

export default App;
