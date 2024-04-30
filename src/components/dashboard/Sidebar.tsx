import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between items-center p-6 fixed h-full'>
        <div className="mb-5">
         <Image src="/assets/images/Group 4.png" alt="logo" className="" width={70} height={70} />
        </div>
        <div className='flex flex-col mb-7 '>
                <Link href="/createCollection" className='flex gap-1 btn hover:animate-pulse rounded-lg p-2 cursor-pointer  mb-8'>
                  <Image src="/assets/fluent_add-12-filled.png" alt="logo" className="" width={10} height={10} />
                  <span className='text-white text-xs'>Create collection</span>
                </Link>
                <div className='flex flex-col gap-7 '>
                  <Link href="/home" className='flex gap-3  rounded-lg py-1 px-3 cursor-pointer hover:border-[#713db4]'>
                    <Image src="/assets/solar_home-smile-broken.png" alt="logo" className="" width={20} height={10} />
                    <span className='text-white text-xs'>Home</span>
                  </Link>
                  <Link href="/market" className='flex gap-3  rounded-lg py-1 px-3 cursor-pointer hover:border-[#713db4]'>
                    <Image src="/assets/Group.png" alt="logo" className="" width={20} height={10} />
                    <span className='text-white text-xs'>Market</span>
                  </Link>
                  <Link href="/wallet" className='flex gap-3  rounded-lg py-1 px-3 cursor-pointer hover:border-[#713db4]'>
                    <Image src="/assets/bx_wallet.png" alt="logo" className="" width={20} height={10} />
                    <span className='text-white text-xs'>Wallet</span>
                  </Link>
                  <Link href="/history" className='flex gap-3  rounded-lg py-1 px-3 cursor-pointer hover:border-[#713db4]'>
                    <Image src="/assets/Vector.png" alt="logo" className="" width={20} height={10} />
                    <span className='text-white text-xs'>History</span>
                  </Link>
                  <Link href="/settings" className='flex gap-3  rounded-lg py-1 px-3 cursor-pointer hover:border-[#713db4]'>
                    <Image src="/assets/Vector (1).png" alt="logo" className="" width={20} height={10} />
                    <span className='text-white text-xs'>Settings</span>
                  </Link>
                </div>
          </div>
          <div className='flex flex-col justify-end mt-5'>
            <Link href="/logout" className='flex gap-3  rounded-lg py-1 px-3 cursor-pointer hover:border-[#713db4]'>
                <Image src="/assets/bx_wallet.png" alt="logo" className="" width={20} height={10} />
                <span className='text-white text-xs'>Log out</span>
            </Link>
          </div>
      </div>
  )
}

export default Sidebar