"use client";

import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { useRouter } from 'next/navigation'

const Topbar = () => {
    const router = useRouter()
    return (
        <div className='fixed top-0 w-[85%] '>
            <nav className='flex items-center justify-between px-5 py-2 '>
                <div className="flex justify-start px-10">
                    <h1>Welcome back, <span className="text-sm text-[#1B5299]">Mr Haafeez Ali</span></h1>
                </div>
                <div className="flex justify-end ">
                <span className="text-[#1B5299]"><FaMessage /></span>
                    <span className="text-[#1B5299] px-3"><IoIosNotifications /></span>
                </div>
            </nav>
        </div>
  )
}

export default Topbar