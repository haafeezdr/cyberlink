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
        <main className='flex h-screen'>
          <div className='hidden md:block h-screen w-1/2  '>
            <Image 
              src="/assets/images/image 4.png"
              alt="logo"
              width={600}
              height={500}
              className="h-screen"
            />
          </div>
          <section className=' m-5 bg-[#1C1A24]  '>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
