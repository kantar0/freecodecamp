import React from 'react'
import '../assets/styles/ClearButton.css'
const ClearButton = (props) => {
  return (
    <div
      className='button-clear'
      onClick={props.manejarClear}
    >
      {props.children}
    </div>
  )
}

export default ClearButton