import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const MyComponent = () => {
  const [text] = useTypewriter({
    words: [' Shaheed Nasrullah Gadani Academy'],
    loop: 0
  })

  return (
    <div className='text-xl sm:text-5xl font-bold items-center text-blue-800'>
      <span>|{text}</span>
    </div>
  )
}


export default  MyComponent;