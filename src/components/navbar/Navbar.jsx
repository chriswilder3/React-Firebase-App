import React from 'react'

function Navbar() {
  return (
    <div className=" ">
      <ul className=" fixed z-10 w-1/2 py-6 px-8 rounded-full  indianred md:flex gap-10 poppins font-semibold text-lg text-white shadow-md">
        <li>
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400 transition-colors">Posts</a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
        </li>
        {/* <li className="flex items-center gap-2">
          <input
            className="p-2 text-sm rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="search"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="bg-sky-500 text-white px-3 py-1 rounded-md hover:bg-sky-600 transition-all font-medium"
          >
            Search
          </button>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar