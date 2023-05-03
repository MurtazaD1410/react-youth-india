import React, { useEffect, useState } from 'react'


const MovieCard = ({ movie }) => {
  const [image, setImage] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    if (movie.primaryImage === null) {
      setImage('https://st.depositphotos.com/1003492/3731/v/950/depositphotos_37316681-stock-illustration-movie-poster.jpg')
    } else {
      setImage(movie.primaryImage.url)
    }
  }, [movie])

  useEffect(() => {
    if (movie.releaseDate === null) {
      setYear('Unknown')
    } else {
      setYear(movie.releaseDate.year)
    }
  }, [movie])


  return (
    <div className=" p-5 border-gray-400 border m-4 rounded-md bg-slate-50 ">
      <img src={image} alt="" className=' h-[500px] w-full object-contain' />
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col mt-3'>
          <h1 className='text-xl   font-bold'>{movie.titleText.text}</h1>
        </div>
        <div className="flex flex-row space-x-2 text-gray-600">
          <p className="">Release Year:</p>
          <p className="">{year}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard