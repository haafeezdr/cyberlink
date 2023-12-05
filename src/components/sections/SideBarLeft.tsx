
"use client";
import React from 'react';
import { FaHome, FaChalkboard, FaTasks, FaUser, FaCog } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation'


const SideBarLeft = () => {
  const router = useRouter()
  return (

    <div className="fixed  left-0 top-0 z-20 text-white h-screen border-r bg-[#1B264F]  overflow-hidden flex flex-col justify-between ">
      {/* Navigation Links */}
      <div className='flex py-8 justify-center items-center'><h2>LOGO</h2>
      </div>
      <div className='flex justify-self-center items-center'>
        <ul className='space-y-3 flex-col items-center justify-center ml-4'>
          <h1 className='text-[#5b5b5b]'>Main</h1>
          <li onClick={() => router.push('/dashboards')}
            className="mb-2 flex items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-[#5b5b5b] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaHome className="mr-2 text-[12px]" />
            <span className='text-[12px] font-semi-bold'>Home</span>
          </li>
          <li onClick={() => router.push('/courses')}
            className="mb-2 flex items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-[#5b5b5b] cursor-pointer  transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaChalkboard className="mr-2 text-[12px]" />
            <span className='text-[12px] font-semi-bold'>Students</span>
          </li>
          <li onClick={() => router.push('/assignment')}
            className=" mb-2 flex items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-[#5b5b5b] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ">
            <FaTasks className="mr-2 text-[12px]" />
            <span className='text-[12px] font-semi-bold'>Staffs</span>
          </li>
          <li onClick={() => router.push('/profile')}
            className=" mb-2 flex items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-[#5b5b5b] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ">
            <FaUser className="mr-2 text-[12px]" />
            <span className='text-[12px] font-semi-bold'>Management</span>
          </li>
          <div className=' py-8'>
            <h2 className='text-[#5b5b5b]'>Settings</h2>
          <li onClick={() => router.push('/settings')}
            className=" mb-2 flex items-center space-x-1.5 px-3 py-4 rounded-sm hover:bg-[#5b5b5b] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ">
            <FaCog className="mr-2 text-[12px]" />
            <span className='text-[12px] font-semi-bold'>General Settings</span>
          </li>
          <li onClick={() => router.push('/settings')}
            className=" mb-2 flex items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-[#5b5b5b] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ">
            <FaCog className="mr-2 text-[12px]" />
            <span className='text-[12px] font-semi-bold'>Profile Settings</span>
          </li>
          </div>
        </ul>
      </div>

      <div className='flex justify-self-center items-center ml-4 mb-16 '>
        <div className='flex flex-wrap mr-2 mb-2 items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-red-500  transition-all duration-300 ease-in-out transform hover:scale-105 '>
          <IoLogOutOutline className="mr-2 text-[12px] font-bold" />
          <span className='text-[12px] font-semi-bold'>Log Out</span>
        </div>
      </div>
    </div>
   
    
  );
};

export default SideBarLeft;