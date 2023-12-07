"use client";
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "../ui/card";
 import { Calendar } from "../../components/ui/calendar"
 


 const Topcard = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const router = useRouter()
    return (
       <div>
        <CardHeader>
        <div className="grid grid-cols-1 gap-8  md:grid-cols-3">
              <div className="flex h-[160px] ">
                <Image 
                  src="/assets/images/Frame 3.png"
                  alt="logo"
                  width={100}
                  height={40}
                  className="w-[100%]"   
                />
              </div>
              <div className="flex h-[160px] ">
                <Image 
                  src="/assets/images/Frame 4.png"
                  alt="logo"
                  width={120}
                  height={40}
                  className="w-[100%]"   
                />
              </div>
              <div className="flex ">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border text-white bg-[#1B264F]"
                />
              </div>
            </div>
            </CardHeader>
        
       </div>
    );
 };

 export default Topcard
 