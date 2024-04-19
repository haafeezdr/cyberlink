"use client";

import React from 'react'
import FileUploader from '@/components/section/FileUploader'


const page = () => {
  return (
    <div className='border-2 rounded-lg border-[#525252]'>
      <div className='m-3'>
        <h1 className='text-white text-center p-3'>Upload New NFT</h1>
        <hr  />
      </div>  
      <div className='border-dashed border-2 border-[#525252] m-3'>
         <FileUploader /> 
      </div> 
      <div className='m-3'>
        <input type="text" placeholder='Price (ETH)' className='mb-3 w-full  bg-[#525252] outline-none rounded p-2' />
        <input type="text" placeholder='Title' className='mb-3 w-full  bg-[#525252]  outline-none rounded p-2' />
        <textarea  placeholder='Description' className='mb-3 w-full  bg-[#525252] outline-none rounded p-2' />
      </div>
      <hr />
      <div className='flex justify-between items-center p-5'>
        <div className='flex flex-col gap-1 text-white'>
          <h2>Nft will be listed at:</h2>
          <h2>Sunday - 2023 10 December</h2>
        </div>
        <div className='flex text-white gap-2'>
          <button className='bg-[#000000] rounded-md py-2 px-5 text-xs'>cancel</button>
          <button className='bg-[#9747FF] rounded-md py-2 px-5 text-xs'>publish</button>
        </div>
      </div>
    </div>
  )
}

export default page