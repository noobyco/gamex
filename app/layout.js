import {roboto, sourceCodePro} from 'styles/font'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Gamex',
  description: 'Gamex app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='bg-transparent flex justify-center items-center w-100% h-fit fixed top-0 left-0 right-0'>
          <Link href='/'>
          <h1 className='text-8xl w-fit text-white cursor-pointer'>/gamex</h1>
          </Link>
        </div>
        {children}
        <div className='bg-transparent w-100% h-10 fixed bottom-0 left-0 right-0'>
          <div className='text-center text-white text-2xl'>
             @noobyco
          </div>
        </div>
      </body>
    </html>
  )
}
