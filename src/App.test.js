import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it('runs the application', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
