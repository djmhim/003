import React from 'react'
import logo from '../googlelogo_light_color_272x92dp.png'

export default function Header() {
  return (
    <>
    <div className="grid grid-cols-3 gap-2">
      <img src={logo} alt="" className=' bg-slate-800' />
      <div className='order-1'>Login / register </div>
      <div>
        <ul className='flex gap-2'>
          <li>Home</li>
          <li>About us</li>
        </ul>
        {/* //Props */}
        {/* Form handeling */}
      </div>
    </div>
    </>
  )
}
 