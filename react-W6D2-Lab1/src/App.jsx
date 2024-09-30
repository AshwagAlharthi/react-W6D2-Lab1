import { useState } from 'react'

import './App.css'

function App() {
  const [number1, setNumber1] = useState(8);
  const [number2, setNumber2] = useState(3);
  const [result, setResult] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [currImage, setCurrImage] = useState(0);
  const images = [
    "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg",
    "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg",
    "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-review-img-6.jpg",
    "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-review-img-5.jpg",
    "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-review-img-4.jpg"]

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

  const changeMode = () => {
    setIsDark(!isDark);
  }

  const changingImageIndex = () => {
    setCurrImage((currImage) => {
      return currImage < images.length - 1 ? currImage + 1 : 0;
    });
  }
  return (
    <div className={`flex justify-evenly items-center w-full h-screen ${isDark ? "bg-slate-900" : "bg-white"} max-sm:flex-col`}>
      <div className={`flex flex-col justify-evenly items-center rounded-xl w-[50vw] h-[60vh] gap-4 max-sm:w-[90vw] max-sm:h-[45vh] ${isDark ? "bg-slate-200" : "bg-slate-400"}`}>
        <div className='w-[100%] flex justify-start items-start pl-5 pt-3'>
          <button className={`btn rounded-[50%] border-none ${isDark ? "bg-slate-400" : "bg-slate-950"}`} onClick={changeMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={`${isDark ? "slate-950" : "white"}`}>
              <path
                d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
              />
            </svg>
          </button>
        </div>
        <h1 className='text-black text-4xl'>Number Operations</h1>
        <div className='flex justify-evenly items-center w-[90%]'>
          <div className='flex flex-col justify-evenly items-center gap-2'>
            <button className={`btn border-none ${isDark ? "bg-slate-400" : "bg-zinc-700"} ${isDark ? "text-black" : "text-white"}`}
              onClick={() => { setNumber1(number1 + 1) }}>Increase First Number</button>
            <button className={`btn border-none ${isDark ? "bg-slate-400" : "bg-zinc-700"} ${isDark ? "text-black" : "text-white"}`}
              onClick={() => { setNumber1(number1 - 1) }}>Decrese First Number</button>
            <div className='text-xl text-black'>{number1}</div>
          </div>
          <div className='flex flex-col justify-evenly items-center gap-2'>
            <button className={`btn border-none ${isDark ? "bg-slate-400" : "bg-zinc-700"} ${isDark ? "text-black" : "text-white"}`}
              onClick={() => { setNumber2(number2 + 1) }}>Increase Second Number</button>
            <button className={`btn border-none ${isDark ? "bg-slate-400" : "bg-zinc-700"} ${isDark ? "text-black" : "text-white"}`}
              onClick={() => { setNumber2(number2 - 1) }}>Decrese Second Number</button>
            <div className='text-xl text-black'>{number2}</div>
          </div>
        </div>
        <div className='flex justify-evenly flex-wrap items-center gap-3'>
          <button className='btn bg-blue-300 hover:bg-white text-black w-24' onClick={() => { operation("add") }}>add</button>
          <button className='btn bg-yellow-200  hover:bg-white text-black w-24' onClick={() => { operation("subtract") }}>subtract</button>
          <button className='btn bg-green-300  hover:bg-white text-black w-24' onClick={() => { operation("multiply") }}>multiply</button>
          <button className='btn bg-red-300  hover:bg-white text-black w-24' onClick={() => { operation("divide") }}>divide</button>
          <button className='btn bg-fuchsia-200  hover:bg-white text-black w-24' onClick={() => { operation("mod") }}>mod</button>
        </div>
        <div className='flex justify-center items-center'>
          <div className='text-xl text-black'>{result}</div>
        </div>
      </div>
      <div className={`flex flex-col justify-evenly items-center rounded-xl w-[40vw] h-[60vh] gap-4 max-sm:w-[90vw] max-sm:h-[45vh] ${isDark ? "bg-slate-200" : "bg-slate-400"}`}>
        <button className={`btn border-none ${isDark ? "bg-slate-400" : "bg-zinc-700"} ${isDark ? "text-black" : "text-white"}`}
          onClick={changingImageIndex}>Change Image</button>
        <img src={images[currImage]} />
      </div>
    </div>

  )
}

export default App
