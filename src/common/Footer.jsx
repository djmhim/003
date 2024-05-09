import React, { useState } from 'react'

function Footer() {

    const [nums, setNums] = useState(0)

    function add(){
        setNums(nums+1)
    }

    function min(){
        setNums(nums-1)
    }

  return (
    <>
        <div>Numbers : {nums}</div>
        <button className='bg-cyan-800 text-white px-5 py-1 rounded-full' onClick={add}>Add</button>
        <button className='bg-cyan-800 text-white px-5 py-1 rounded-full' onClick={min}>Min</button>
    </>
  )
}

export default Footer