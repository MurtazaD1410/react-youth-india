import React from 'react'
import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'


const Home = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage, setMoviesPerPage] = useState(8)

  useEffect(() => {
    fetchFromAPI('titles?startYear=2000')
      .then((movie) => setMovies(movie.results))
  }, [])

  const lastMovieIndex = currentPage * moviesPerPage
  const firstMovieIndex = lastMovieIndex - moviesPerPage
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex)

  // console.log(firstMovieIndex, lastMovieIndex)


  if (!movies) return <h1>Loading...</h1>

  return (
    <div className="">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {currentMovies.map((movie) => (

          <div className="" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <Pagination totalMovies={movies.length} moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

export default Home