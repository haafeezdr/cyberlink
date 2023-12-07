import react from "react"
import { FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "../../../components/ui/card";
 import Topcard from "../../../components/sections/Topcard";
import ChartCard from "../../../components/sections/ChartCard";
import TopStudent from "../../../components/sections/TopStudent";


const Dashboard = () => {
    return (
      
        <div className=" h-screen">
            <section className="">
                    <Topcard/>
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <TopStudent/> 
                    <ChartCard/>
                  </div>
            </section>
        </div>
    )
}

export default Dashboard