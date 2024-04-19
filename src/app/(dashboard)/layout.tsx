
import  Sidebar  from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';
import '../globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Cyberlink',
  description: 'Generated using next by haafeez',
}

export default function Rootlayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    <div className='flex h-full w-full bg-[#0E0C17]'>
        <div className=' border-r-2 border-[#5F5959] w-[20%]'><Sidebar /></div>
        <div className=' w-full h-full'>
            <div className='border-b-2 border-[#5F5959]'><Navbar /></div>
            <section className='m-3'>
            {children}
            </section>
        </div>
    </div>
    </html>
  );
}
