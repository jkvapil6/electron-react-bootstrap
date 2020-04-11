import React from 'react'

const Layout = (props) => {

  return (
    <div class="jumbotron">
      { props.children }
    </div>
  )
}

export default Layout;
