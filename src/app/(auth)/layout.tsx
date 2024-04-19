import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css';
import Image from 'next/image';
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
        <main className='flex h-full md:h-screen gap-5'>
          <div className='hidden md:flex h-full w-[40%]'>
            <Image 
              src="/assets/images/image 4.png"
              alt="logo"
              width={600}
              height={500}
              className="h-full"
            />
          </div>
          <section className='ml-5 md:ml-0 mb-5 mt-5 mr-5  bg-[#1C1A24] rounded-sm border-2 border-[#9747FF] w-[100%] md:w-[60%]'>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
