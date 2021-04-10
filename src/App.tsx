import './styles.css'
import React from 'react'
import { Counter } from './Counter'

const App = () => {
  const num = "ds";
  
  return (
    <>
      <h1>
        React EDITED Typescript Webpack Start-up Template -{' '}
        {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <Counter></Counter>
    </>
  )
}

export default App
