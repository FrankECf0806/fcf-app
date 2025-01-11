import React from 'react'
import Component1 from './Component1'
import { Car } from './Car'
import UseState from './UseState'
import UseStateExamples from './UseStateExamples'

export default function AllClasses() {
  return (
    <div>
        <div>
            <h1>AllClasses</h1>
        </div>
        <div className="App">
            {/* Function Component */}
            <Component1 name="Maria" number={3} />
            {/* Class Component */}
            <Car color="red"/>
            {/* Use State */}
            <UseState/>
            {/* Use Effect */}
            <UseStateExamples/>
        </div>
    </div>
  )
}
