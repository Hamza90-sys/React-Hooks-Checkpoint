import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import './App.css'
import MovieList from './components/MovieList'
import Filter from './components/Filter'

const initialMovies = [
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years.',
    posterURL: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    rating: 5,
    trailer: 'https://www.youtube.com/embed/6hB3S9bIaco',
  },
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine producer.',
    posterURL: 'https://m.media-amazon.com/images/I/81G+V1Z1WLL._AC_SY679_.jpg',
    rating: 5,
    trailer: 'https://www.youtube.com/embed/HhesaQXLuRY',
  },
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
    posterURL: 'https://m.media-amazon.com/images/I/51s+uGz3JWL._AC_.jpg',
    rating: 4,
    trailer: 'https://www.youtube.com/embed/8hP9D6kZseM',
  },
  {
    title: 'The Matrix',
    description: 'A computer hacker learns about the true nature of reality and his role in the war.',
    posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
    rating: 5,
    trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
  },
  {
    title: 'Stranger Things',
    description: 'When a young boy disappears, his mother, a police chief, and his friends confront terrifying forces.',
    posterURL: 'https://m.media-amazon.com/images/I/71m7y3z4dSL._AC_SY679_.jpg',
    rating: 4,
  },
  {
    title: 'Game of Thrones',
    description: 'Nine noble families wage war against each other to gain control over the mythical land of Westeros.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'House of the Dragon',
    description: 'A prequel series that chronicles the history of House Targaryen.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'The Witcher',
    description: 'A mutated monster-hunter struggles to find his place in a world where people often prove more wicked than beasts.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind who plunges Gotham City into anarchy.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Interstellar',
    description: 'A team travels through a wormhole in search of a new home for humanity.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Avengers: Endgame',
    description: 'The Avengers assemble once more to undo Thanos\' actions and restore balance.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in tales of violence and redemption.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'A meek Hobbit sets out on a journey to destroy a powerful ring.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'The Crown',
    description: 'Chronicles the life of Queen Elizabeth II from the 1940s to modern times.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Westworld',
    description: 'A dark odyssey about the dawn of artificial consciousness.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Ozark',
    description: 'A financial planner relocates his family to launder money for a drug cartel.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Better Call Saul',
    description: 'The trials and tribulations of criminal lawyer Jimmy McGill before he became Saul Goodman.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Chernobyl',
    description: 'A dramatization of the 1986 nuclear disaster and the cleanup efforts that followed.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'The Mandalorian',
    description: 'A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Loki',
    description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'WandaVision',
    description: 'Blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff and Vision begin to suspect that things are not as they seem.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'The Boys',
    description: 'A group of vigilantes set out to take down corrupt superheroes.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Succession',
    description: 'The Roy family fights for control of a global media and entertainment empire.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Fargo',
    description: 'Various tales of deception, intrigue and murder in and around frozen Minnesota.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Mindhunter',
    description: 'Two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'True Detective',
    description: 'Seasonal anthology series in which police investigations unearth personal and professional secrets of those involved.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Narcos',
    description: 'A chronicled look at the criminal exploits of cocaine kingpins in the late 1980s.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Peaky Blinders',
    description: 'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Black Mirror',
    description: 'An anthology series exploring a twisted, high-tech world where humanity\'s greatest innovations and darkest instincts collide.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Rick and Morty',
    description: 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Friends',
    description: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Schitt\'s Creek',
    description: 'When rich video store magnate Johnny Rose and his family suddenly find themselves broke, the only remaining asset is the small town of Schitt\'s Creek.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Seinfeld',
    description: 'The continuing misadventures of neurotic New York stand-up comedian Jerry Seinfeld and his equally neurotic friends.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'House M.D.',
    description: 'An antisocial maverick doctor who specializes in diagnostic medicine.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Doctor Who',
    description: 'The adventures of a Time Lord called the Doctor, a time-travelling humanoid alien.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Sherlock',
    description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    posterURL: '',
    rating: 5,
  },
  {
    title: 'Vikings',
    description: 'The adventures of Ragnar Lothbrok, the greatest hero of his age.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Rome',
    description: 'A historical drama series that tells the story of the transition of Rome from Republic to Empire.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Battlestar Galactica',
    description: 'The last remnants of humanity flee through space pursued by the Cylons.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Lost',
    description: 'The survivors of a plane crash are forced to work together to survive on a seemingly deserted tropical island.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Prison Break',
    description: 'An engineer installs himself in a prison he helped design in order to save his falsely accused brother from execution.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Dexter',
    description: 'By day a blood spatter analyst for Miami Metro Police Department; but at night he is a serial killer who targets other murderers.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Mr. Robot',
    description: 'A cybersecurity engineer and hacker finds himself at the center of a complex game of global capitalism and control.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Twin Peaks',
    description: 'An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.',
    posterURL: '',
    rating: 4,
  },
  {
    title: 'Money Heist',
    description: 'An enigmatic man called The Professor recruits a group of eight people for a grand heist.',
    posterURL: '',
    rating: 5,
  },
]

export default function App() {
  const [movies, setMovies] = useState(initialMovies)

  const [searchTitle, setSearchTitle] = useState('')
  const [minRating, setMinRating] = useState(0)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posterURL, setPosterURL] = useState('')
  const [rating, setRating] = useState(1)
  const [trailer, setTrailer] = useState('')

  function handleAddMovie(e) {
    e.preventDefault()
    if (!title.trim()) return
    const newMovie = { title: title.trim(), description, posterURL, rating: Number(rating), trailer }
    setMovies((prev) => [newMovie, ...prev])
    setTitle('')
    setDescription('')
    setPosterURL('')
    setRating(1)
    setTrailer('')
  }

  const filtered = movies.filter((m) => {
    const matchesTitle = m.title.toLowerCase().includes(searchTitle.toLowerCase())
    const matchesRating = m.rating >= minRating
    return matchesTitle && matchesRating
  })

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <nav className="top-nav">
              <div className="brand">My Movies</div>
              <div className="nav-sub">Favorites &amp; Shows</div>
            </nav>

            <h1>Browse and Add</h1>

            <section className="controls">
              <Filter
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                minRating={minRating}
                setMinRating={setMinRating}
              />

              <form className="add-form" onSubmit={handleAddMovie}>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
                <input
                  value={posterURL}
                  onChange={(e) => setPosterURL(e.target.value)}
                  placeholder="Poster URL"
                />
                <input
                  value={trailer}
                  onChange={(e) => setTrailer(e.target.value)}
                  placeholder="Trailer embed URL (https://www.youtube.com/embed/...)"
                />
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description"
                />
                <label>
                  Rating:
                  <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </label>
                <button type="submit">Add Movie</button>
              </form>
            </section>

            <main>
              <MovieList movies={filtered} />
            </main>
          </div>
        }
      />

      <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
    </Routes>
  )
}
