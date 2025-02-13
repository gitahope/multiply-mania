import React from 'react'
import Header from './commons/header'

const Wrapper = ({ children }) => {
  return (
    <div className="sha-page d-flex flex-column vh-100 bg-light">
        <Header />
        {children}
    </div>
  )
}

export default Wrapper
