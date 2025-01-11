import React from 'react'

export default function Component1({ name, number }) {
  return (
    <div>
      Hello from Component1 Page
      <h2> My name is my prop[name]:  { name} </h2>
      <h2> The number we passed is my prop[number]:  { number} </h2>
    </div>
  )
}
