import { roboto } from "styles/font";

export default function Home() {
  return (
    <font className={roboto.className}>
      <main className='bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] h-screen'>
        <div className='flex justify-center items-center w-full h-screen'>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative text-6xl px-5 py-2.5 transition-all ease-in duration-75 bg-white
            dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Create room
            </span>
          </button>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative text-6xl px-5 py-2.5 transition-all ease-in duration-75 text-whiete  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Learn more.
            </span>
          </button>

        </div>
      </main>
    </font>
  )
}
