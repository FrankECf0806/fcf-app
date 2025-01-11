import React, { useEffect, useState } from 'react'

export default function UseStateExamples(props) {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [op, setOp] = useState()
    const [result, setResult] = useState()

    function handleOperation(){
        if(op === "+") setResult(num1+num2)
        else if(op === "-") setResult(num1-num2)
        else if(op === "*") setResult(num1*num2)
        else if(op === "/") setResult(num1/num2)
        else setResult("Not valid")
    }
    useEffect(() => {
        console.log({ num1 });
        console.log({ num2 });
        console.log({ op });
        console.log({ result });
    })
    return (
        <div>
            <h1>UseEffect</h1>
            <div>
                <input onChange={(e)=> { setNum1(parseInt(e.target.value)) }}/>
                <select onChange={(e) => { setOp(e.target.value) }}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input onChange={(e) => { setNum2(parseInt(e.target.value)) }}/>
            </div>
            <div>
                <button onClick={ handleOperation }>Calculate</button>
            </div>
            <div>
                <input value={ result } />
            </div>
        </div>
    )
}
