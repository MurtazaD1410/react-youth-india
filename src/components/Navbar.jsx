import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import {GoSearch} from 'react-icons/go'

const Navbar = () => {

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <div onSubmit={handleSubmit} className='h-20 bg-blue-200'>
      <div className="flex justify-around items-center h-full">
        <div className="font-bold text-lg">
          <Link to='/'>
            Frontend-Task
            </Link>
        </div>
        <form ty className='flex items-center space-x-2'>
          <input
            className='search-bar rounded-md p-1 px-2'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='' onClick={handleSubmit}>
            <GoSearch className='text-2xl' />
          </button>
        </form>
        
      </div>

    </div>
  )
}

export default Navbar