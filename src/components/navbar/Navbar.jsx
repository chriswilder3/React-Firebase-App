import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 mb-16 py-5 px-8 bg-black md:flex justify-center gap-10 rounded-b-xl shadow-lg">
        <ul className="flex gap-10 font-bold text-2xl poppins text-yellow-400 space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 glow" : "hover:text-blue-400 hover:glow"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={({ isActive }) => isActive ? "text-red-600 glow" : "hover:text-blue-400 hover:glow"}>
              Posts
            </NavLink>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors glow">About</a>
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
    </>
  )
}

export default Navbar