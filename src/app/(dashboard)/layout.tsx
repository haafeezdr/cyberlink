

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import  SideBarLeft from '../../components/sections/SideBarLeft'
import  Topbar from '../../components/sections/Topbar'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <div className="flex flex-col w-screen h-screen overflow-hidden">
            <div className=" flex justify-end">
             <Topbar />
              </div>
               <main className=" flex w-screen">
               <div className="w-[15%] top-0 h-screen">
                   <SideBarLeft />
                 </div>
                 <section className="container w-[85%] h-screen mt-10 ">
                  <div className="">{children}</div>
                 </section>
               </main>
          </div>
      </body>
    </html>
  )
}