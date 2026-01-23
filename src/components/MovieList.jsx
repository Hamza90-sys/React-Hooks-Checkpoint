import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  if (!movies.length) return <p>No movies found.</p>
  return (
    <div className="movie-list">
      {movies.map((m, idx) => (
        <MovieCard movie={m} index={idx} key={m.title + idx} />
      ))}
    </div>
  )
}
