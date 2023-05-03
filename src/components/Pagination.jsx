import React from 'react'

const Pagination = ({ totalMovies, moviesPerPage, setCurrentPage, currentPage }) => {

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='flex flex-wrap justify-center py-8 space-x-6'>{
      pages.map((page) => (
        <button onClick={() => setCurrentPage(page)} key={page}
          className={page == currentPage ? 'border border-gray-600 bg-gray-600 text-white p-1 px-2  rounded-sm' : 'border border-gray-600 p-1 px-2  rounded-sm'}>
          {page}
        </button>
      ))

    }</div>
  )
}

export default Pagination