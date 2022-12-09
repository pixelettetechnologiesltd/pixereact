import React from 'react'
const Button = ({ children }) => {
  return (
    <div><button className='btn btn-save'>{children ? children : "Click me"}</button></div>
  )
}

export default Button