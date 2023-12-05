import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import  SideBarLeft from '../../components/sections/SideBarLeft'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex w-screen justify-start '>
        <div className="w-[13%]  overflow-hidden">
          <SideBarLeft />
          </div>
          <section className='container w-[60%] mt-3 overflow-hidden'>
           {children}
          </section>
        </main>
      </body>
    </html>
  )
}