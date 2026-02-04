import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MoviesContext } from '../App'

export default function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movies } = useContext(MoviesContext)
  const movie = movies.find((m) => String(m.id) === String(id))

  if (!movie) return <div className="container">Movie not found.</div>

  return (
    <div className="detail container">
      <button className="back" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-inner">
        <img src={movie.posterURL} alt={movie.title} className="detail-poster" />
        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="rating">Rating: {movie.rating} / 5</p>
          <p>{movie.description}</p>
          <div className="trailer">
            <iframe title={movie.title} width="560" height="315" src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
