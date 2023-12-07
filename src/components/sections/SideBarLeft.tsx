
"use client";
import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import { PiStudentBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { IoLogOutOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"


const SideBarLeft = () => {
  const router = useRouter()
  return (

    // <div className=" left-0 top-0 text-white h-screen  bg-[#1B264F] ">
       <div className=' left-0 top-0 text-white h-screen  bg-[#1B264F] flex flex-col justify-between'>
            <div className='flex py-10 justify-center items-center'><h2>LOGO</h2>
              </div>
            <div className='flex justify-center  items-center'>
              <ul className='space-y-3 flex-col items-center justify-center ml-4'>
                <h1 className='text-[#5b5b5b]'>Main</h1>
                <li onClick={() => router.push('/home')}
                  className="mb-2 flex items-center  px-2 py-1 rounded-sm hover:bg-[#1B5299] cursor-pointer transition-all duration-300 ease-in-out transform ">
                  <FaHome className="mr-2 text-[12px]" />
                  <span className='text-[12px] font-semi-bold'>Home</span>
                </li>
                <li onClick={() => router.push('/students')}
                  className="mb-2 flex items-center px-2 py-1 rounded-sm hover:bg-[#1B5299] cursor-pointer  transition-all duration-300 ease-in-out transform ">
                  <PiStudentBold className="mr-2 text-[12px]" />
                  <span className='text-[12px] font-semi-bold'>Students</span>
                </li>
                <li onClick={() => router.push('/staffs')}
                  className=" mb-2 flex items-center  px-2 py-1 rounded-sm hover:bg-[#1B5299] cursor-pointer transition-all duration-300 ease-in-out transform  ">
                  <GrUserWorker className="mr-2 text-[12px]"/>
                  <span className='text-[12px] font-semi-bold'>Staffs</span>
                </li>
                <li onClick={() => router.push('/management')}
                  className=" mb-2 flex items-center px-2 py-1 rounded-sm hover:bg-[#1B5299] cursor-pointer transition-all duration-300 ease-in-out transform  ">
                  <FaUser className="mr-2 text-[12px]" />
                  <span className='text-[12px] font-semi-bold'>Management</span>
                </li>
                <div className=' py-10'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='text-[#5b5b5b] rounded-sm hover:text-white hover:bg-[#1B5299] px-3'>Settings</DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-white '>
                            <DropdownMenuItem onClick={() => router.push('/setting/generalsetting')} >General Setting</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push('/setting/profilesetting')}  >Profile</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
              </ul>
            </div>
            <div className='flex  items-center ml-4  mb-3 '>
            <div onClick={() => router.push('/login')}
            className='flex flex-wrap mr-2 mb-2 items-center space-x-1.5 px-3 py-1 rounded-sm hover:bg-red-500  transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
              <IoLogOutOutline className="mr-2 text-[12px] font-bold" />
              <span className='text-[12px] font-semi-bold'>Log Out</span>
            </div>
          </div>
       </div>
  // </div>
   
    
  );
};

export default SideBarLeft;