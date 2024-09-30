import { useState } from 'react'

import './App.css'

function App() {
  const [number1, setNumber1] = useState(8);
  const [number2, setNumber2] = useState(3);
  const [result, setResult] = useState("")

  const operation = (param) => {
    if (param == "add") {
      setResult(number1 + number2);
    } else if (param == "subtract") {
      setResult(number1 - number2);
    } else if (param == "multiply") {
      setResult(number1 * number2);
    } else if (param == "divide") {
      setResult(number1 / number2);
    } else if (param == "mod") {
      setResult(number1 % number2);
    }
  }
  return (
    <div className='flex justify-center items-center w-full h-screen bg-white'>
      <div className='flex flex-col justify-evenly items-center rounded-xl bg-slate-200 w-[50vw] h-[60vh] gap-4'>
      <h1 className='text-black text-4xl'>Number Operations</h1>
        <div className='flex justify-evenly items-center w-[90%]'>
          <div className='flex flex-col justify-evenly items-center gap-2'>
            <button className='btn bg-zinc-700 text-white' onClick={() => { setNumber1(number1 + 1) }}>Increase First Number</button>
            <button className='btn bg-zinc-700 text-white' onClick={() => { setNumber1(number1 - 1) }}>Decrese First Number</button>
            <div className='text-xl text-black'>{number1}</div>
          </div>
          <div className='flex flex-col justify-evenly items-center gap-2'>
            <button className='btn bg-zinc-700 text-white' onClick={() => { setNumber2(number2 + 1) }}>Increase Second Number</button>
            <button className='btn bg-zinc-700 text-white' onClick={() => { setNumber2(number2 - 1) }}>Decrese Second Number</button>
            <div className='text-xl text-black'>{number2}</div>
          </div>
        </div>
        <div className='flex justify-evenly items-center gap-3'>
          <button className='btn bg-blue-300 hover:bg-white text-black w-24' onClick={() => { operation("add") }}>add</button>
          <button className='btn bg-yellow-200  hover:bg-white text-black w-24' onClick={() => { operation("subtract") }}>subtract</button>
          <button className='btn bg-green-300  hover:bg-white text-black w-24' onClick={() => { operation("multiply") }}>multiply</button>
          <button className='btn bg-red-300  hover:bg-white text-black w-24' onClick={() => { operation("divide") }}>divide</button>
          <button className='btn bg-fuchsia-200  hover:bg-white text-black w-24' onClick={() => { operation("mod") }}>mod</button>
        </div>
        <div className='flex justify-center items-center'>
        <div className='text-xl text-black'>{result}</div>
          
          
        </div>
        {/* <button className='btn bg-slate-200' onClick={() => { setNumber1(number1 + 1) }}>Increase First Number</button>
      <button className='btn bg-slate-200' onClick={() => { setNumber1(number1 - 1) }}>Decrese First Number</button>
      {number1}
      <button className='btn bg-slate-200' onClick={() => { setNumber2(number2 + 1) }}>Increase Second Number</button>
      <button className='btn bg-slate-200' onClick={() => { setNumber2(number2 - 1) }}>Decrese Second Number</button>
      {number2}
      <button className='btn bg-slate-200' onClick={() => { operation("add") }}>add</button>
      <button className='btn bg-slate-200' onClick={() => { operation("subtract") }}>subtract</button>
      <button className='btn bg-slate-200' onClick={() => { operation("multiply") }}>multiply</button>
      <button className='btn bg-slate-200' onClick={() => { operation("divide") }}>divide</button>
      <button className='btn bg-slate-200' onClick={() => { operation("mod") }}>mod</button>

      {result} */}
      </div>
    </div>

  )
}

export default App
