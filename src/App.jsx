import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './component/Random'
import Tag from './component/Tag'
function App() {
  return (
    <div className='background w-full min-h-screen flex flex-col items-center'>
      <h1 className='rounded-lg bg-white text-center w-11/12 mt-[40px] text-4xl'>RANDOM GIF</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px] pb-10'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
