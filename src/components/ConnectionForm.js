import React, { useState } from 'react'

const ConnectionForm = () => {
  
  const [reqPort, setReqPort] = useState("5555")
  const [pullPort, setPullPort] = useState("5556")

  const handleReqPortChange = (e) => {
    setReqPort(e.target.value)
  }

  const handlePullPortChange = (e) => {
    setPullPort(e.target.value)
  }

  const handleOnClickEvent = (e) => {
    alert("klikam")
  }

  return (
    <div>
        <h2>Connection Form</h2>
        <input value={reqPort} onChange={ handleReqPortChange }/>
        <input value={pullPort} onChange={ handlePullPortChange }/>
        <button onClick={ handleOnClickEvent }>Connect</button>
    </div>
  )
}

export default ConnectionForm
