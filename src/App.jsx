import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import tinycolor from 'tinycolor2'

function App() {
  const [input, setInput] = useState('')

  const grayscaleRed = tinycolor(input).greyscale().toHexString()

  const customPalette = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    purple: '#ac14e7',
  }



  let customColourArr = []
  for (const color in customPalette) {
    customColourArr.push([
      tinycolor.mix(input, customPalette[color],25).toHexString(),
      color,
    ])
  }

  const bang = (e) => {
    e.preventDefault()
    console.log(customColourArr)
  }

  return (
    <div>
      <form onSubmit={bang}>
        <input
          type='text'
          value={input}
          placeholder='enter a colour'
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Bang!</button>
      </form>

     {input && (
      <>
       {customColourArr?.map((item, index) => (
        <div key={index} style={{ backgroundColor: item[0] }}>
          <div>new Colour = {item[0]}</div>
          <div>mixed with {item[1]} - 25% </div>
        </div>
      ))}
      <div style={{ backgroundColor: grayscaleRed, height:'40px' }}>GrayScale Colour</div></>
     )}
    </div>
  )
}

export default App
