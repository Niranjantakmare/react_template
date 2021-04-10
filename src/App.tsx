import './styles.css'
import React from 'react'
import { Counter } from './Counter'

const App = () => {
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
