import { roboto } from "styles/font";
import Link from "next/link";

export default function Home() {
  return (
      <main className=' flex justify-center h-screen'>
        <div className='flex flex-col w-[80%] sm:flex-row justify-center items-center sm:w-full'>
          <Link href="/createroom">
            <button className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
              <span className="relative text-6xl px-5 py-2.5 transition-all ease-in duration-75 bg-white
              dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Create room
              </span>
            </button>
          </Link>

          <Link href='/rooms'>
            <button className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative text-6xl px-5 py-2.5 transition-all ease-in duration-75 text-whiete  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              My rooms...
              </span>
            </button>
          </Link>

        </div>
      </main>
  )
}
