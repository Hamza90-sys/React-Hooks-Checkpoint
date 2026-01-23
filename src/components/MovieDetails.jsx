import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function MovieDetails({ movies }) {
  const { id } = useParams()
  const idx = Number(id)
  const movie = movies && movies[idx]

  if (!movie) {
    return (
      <div style={{ padding: 20 }}>
        <p>Movie not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  const { title, description, posterURL, rating, trailer } = movie

  return (
    <div className="movie-details" style={{ padding: 20 }}>
      <Link to="/">← Back</Link>
      <h2>{title}</h2>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        {posterURL ? (
          <img src={posterURL} alt={title} style={{ width: 220 }} />
        ) : null}
        <div>
          <p>{description}</p>
          <p>Rating: {rating}★</p>

          {trailer ? (
            <div style={{ marginTop: 12 }}>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  title={`${title} trailer`}
                  src={trailer}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <p>No trailer available.</p>
          )}
        </div>
      </div>
    </div>
  )
}
