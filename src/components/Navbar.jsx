import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1 className="brand">My Movie App</h1>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
      </div>
    </nav>
  )
}
