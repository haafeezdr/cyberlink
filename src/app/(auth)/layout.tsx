import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyberlink',
  description: 'Generated using next by haafeez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex h-screen gap-5'>
          <div className='hidden md:block h-screen w-1/3  '>
            <Image 
              src="/assets/images/image 4.png"
              alt="logo"
              width={600}
              height={500}
              className="h-screen"
            />
          </div>
          <section className=' m-5 bg-[#1C1A24] rounded-sm border-2 border-[#9747FF] w-[60%]'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
