import React from 'react'

export default function Filter({ searchTitle, setSearchTitle, minRating, setMinRating }) {
  return (
    <div className="filter-row">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="filter-input"
      />

      <label className="filter-rating">
        Min rating:
        <select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
          <option value={0}>All</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5</option>
        </select>
      </label>
    </div>
  )
}
