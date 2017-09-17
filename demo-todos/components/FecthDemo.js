import React, { PropTypes } from 'react'

const FetchDemo = ({ msg, data, onClick }) => {
  return (
  	<div>
      <h1> Fetch Data Demo</h1>
      <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick('somekey')
       }}
    >
    Click to fetch data
    </a>
    <div>{msg}</div>
    <div>Result: {data.data}</div>
    </div>
  )
}

export default FetchDemo
