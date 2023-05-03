import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage, setMoviesPerPage] = useState(8)
  const [movies, setMovies] = useState([])
  const { searchterm } = useParams()

  const lastMovieIndex = currentPage * moviesPerPage
  const firstMovieIndex = lastMovieIndex - moviesPerPage
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex)

  useEffect(() => {
    fetchFromAPI(`titles/search/title/${searchterm}`)
      .then((movie) => setMovies(movie.results))
  }, [searchterm])

  if (!movies) return <h1>Loading...</h1>


  return (
    <div className="">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 bg-slate-100">
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

export default Search