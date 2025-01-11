import React, { useState } from 'react'

export default function UseState() {
    // Initialise Time to 0 --> useState(0)
    const [time, setTime] = useState(1)

    const handleClick = () => {
        setTime(item => item+1)
    }
    return (
        <div>
            <h1>Use State</h1>
            <div>
                <h2>The time is { time } </h2>
                <button onClick={ handleClick }>Click me !</button>
            </div>
        </div>
    )
}
