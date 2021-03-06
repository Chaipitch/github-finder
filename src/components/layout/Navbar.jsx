import React from 'react'
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
            <div className='flex-none px-2 mx-2'>
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to='/' className='text-lg font-bold align-middle'>GH Finder</Link>
            </div>
        <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
                <Link className='btn btn-ghost btn-sm' to='/'>Home</Link>
                <Link className='btn btn-ghost btn-sm' to='/about'>About</Link>
            </div>
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar