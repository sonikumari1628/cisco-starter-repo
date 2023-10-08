import React from 'react'

const Child = ({name, children}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{children}</h2>
    </div>
  )
}

export default Child;