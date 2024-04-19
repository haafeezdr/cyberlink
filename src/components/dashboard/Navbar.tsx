import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full h-full p-4 flex justify-between items-center gap-10'>
      <div className='bg-[#2A2931] flex gap-1 border-2 border-[#9747FF] rounded-sm'>
        <Image src="/assets/search.png" alt="logo" className="p-2" width={30} height={30} />
        <input type="text" placeholder='search' className='outline-none w-full bg-[#2A2931] text-white'/>
      </div>
      <div className='flex gap-1'>
        <Image src="/assets/notification.png" alt="logo" className="" width={30} height={30} />
        <Image src="/assets/Rectangle 25.png" alt="logo" className="" width={30} height={30} />
      </div>
    </div>
  )
}

export default Navbar