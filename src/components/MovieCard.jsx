import React from 'react'
import { Link } from 'react-router-dom'

function ratingColor(r) {
  if (r >= 4) return '#18c37b'
  if (r === 3) return '#f39c12'
  return '#e74c3c'
}

export default function MovieCard({ movie, index }) {
  const { title, description, posterURL, rating } = movie
  return (
    <Link to={`/movies/${index}`} className="movie-card-link">
      <div className="movie-card">
        <div className="poster-wrap">
          {posterURL ? (
            <img src={posterURL} alt={title} className="movie-poster" />
          ) : (
            <div className="no-poster">
              <div className="no-poster-text">{title}</div>
            </div>
          )}
          <div
            className="rating-badge"
            style={{ backgroundColor: ratingColor(rating) }}
          >
            {rating}★
          </div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-desc">{description}</p>
        </div>
      </div>
    </Link>
  )
}
