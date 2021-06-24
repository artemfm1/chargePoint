import React from 'react'
//import {Link} from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>chargePoint</h1>
        
        </header>
      {props.children}
    </div>
  )
}
