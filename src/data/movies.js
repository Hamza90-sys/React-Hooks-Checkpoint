const movies = [
  { id: 1, title: 'Game of Thrones', description: 'A tale of power, family and dragons in Westeros.', rating: 5, trailer: 'https://www.youtube.com/embed/giYeaKsXnsI' },
  { id: 2, title: 'House of the Dragon', description: 'The rise of House Targaryen and the Dance of the Dragons.', posterURL: 'https://via.placeholder.com/200x300?text=House+of+the+Dragon', rating: 5, trailer: 'https://www.youtube.com/embed/4o1qg6C3CwM' },
  { id: 3, title: 'Breaking Bad', description: 'A chemistry teacher turns to making meth after a diagnosis.', posterURL: 'https://via.placeholder.com/200x300?text=Breaking+Bad', rating: 5, trailer: 'https://www.youtube.com/embed/HhesaQXLuRY' },
  { id: 4, title: 'Better Call Saul', description: 'The transformation of Jimmy McGill into Saul Goodman.', posterURL: 'https://via.placeholder.com/200x300?text=Better+Call+Saul', rating: 5, trailer: 'https://www.youtube.com/embed/gy0Yw5A0Q3k' },
  { id: 5, title: 'Stranger Things', description: 'A group of kids face supernatural events in Hawkins.', posterURL: 'https://via.placeholder.com/200x300?text=Stranger+Things', rating: 5, trailer: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
  { id: 6, title: 'The Crown', description: 'The political rivalries and romance behind Queen Elizabeth II’s reign.', posterURL: 'https://via.placeholder.com/200x300?text=The+Crown', rating: 4, trailer: 'https://www.youtube.com/embed/JJZ6fTq7v0I' },
  { id: 7, title: 'The Witcher', description: 'A monster hunter travels a turbulent world.', posterURL: 'https://via.placeholder.com/200x300?text=The+Witcher', rating: 4, trailer: 'https://www.youtube.com/embed/ndl1W4ltcmg' },
  { id: 8, title: 'The Mandalorian', description: 'A lone bounty hunter in the outer reaches of the galaxy.', posterURL: 'https://via.placeholder.com/200x300?text=The+Mandalorian', rating: 5, trailer: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
  { id: 9, title: 'The Boys', description: 'A group of vigilantes take on corrupt superheroes.', posterURL: 'https://via.placeholder.com/200x300?text=The+Boys', rating: 4, trailer: 'https://www.youtube.com/embed/LtbQkV5uI7M' },
  { id: 10, title: 'House', description: 'Brilliant diagnostician Dr. House solves medical mysteries.', posterURL: 'https://via.placeholder.com/200x300?text=House', rating: 4, trailer: 'https://www.youtube.com/embed/9IXd6P6HnR8' },
  { id: 11, title: 'Friends', description: 'Six friends navigate life and love in New York.', posterURL: 'https://via.placeholder.com/200x300?text=Friends', rating: 5, trailer: 'https://www.youtube.com/embed/hDNNmeeJs1Q' },
  { id: 12, title: 'Seinfeld', description: 'A show about nothing — observational comedy and everyday life.', posterURL: 'https://via.placeholder.com/200x300?text=Seinfeld', rating: 4, trailer: 'https://www.youtube.com/embed/94d8Gde2v4s' },
  { id: 13, title: 'Sherlock', description: 'Modern-day Sherlock Holmes solves complex mysteries.', posterURL: 'https://via.placeholder.com/200x300?text=Sherlock', rating: 5, trailer: 'https://www.youtube.com/embed/xK7S9mrFWL4' },
  { id: 14, title: 'Westworld', description: 'An amusement park populated by androids begins to break down.', posterURL: 'https://via.placeholder.com/200x300?text=Westworld', rating: 4, trailer: 'https://www.youtube.com/embed/3Mek2i0o1Zs' },
  { id: 15, title: 'The Office', description: 'A mockumentary on a group of office workers.', posterURL: 'https://via.placeholder.com/200x300?text=The+Office', rating: 5, trailer: 'https://www.youtube.com/embed/3GwjfUFyY6M' },
  { id: 16, title: 'Mad Men', description: 'Advertising executives in 1960s New York.', posterURL: 'https://via.placeholder.com/200x300?text=Mad+Men', rating: 4, trailer: 'https://www.youtube.com/embed/2Nw-1b2aGqg' },
  { id: 17, title: 'Chernobyl', description: 'A dramatization of the 1986 nuclear disaster.', posterURL: 'https://via.placeholder.com/200x300?text=Chernobyl', rating: 5, trailer: 'https://www.youtube.com/embed/s9APLXM9Ei8' },
  { id: 18, title: 'Ozark', description: 'A family laundering money for a drug cartel.', posterURL: 'https://via.placeholder.com/200x300?text=Ozark', rating: 4, trailer: 'https://www.youtube.com/embed/uwR2f3j3b6k' },
  { id: 19, title: 'Black Mirror', description: 'Standalone dramas exploring techno-paranoia.', posterURL: 'https://via.placeholder.com/200x300?text=Black+Mirror', rating: 4, trailer: 'https://www.youtube.com/embed/jDiYGYPfGMM' },
  { id: 20, title: 'Narcos', description: 'The history of drug cartels in Colombia.', posterURL: 'https://via.placeholder.com/200x300?text=Narcos', rating: 4, trailer: 'https://www.youtube.com/embed/1Yw8i1w4v_E' },
  { id: 21, title: 'Avatar: The Last Airbender', description: 'A young hero must master the elements.', posterURL: 'https://via.placeholder.com/200x300?text=Avatar+ATLA', rating: 5, trailer: 'https://www.youtube.com/embed/5Wg8XwH6W9A' },
  { id: 22, title: 'The Sopranos', description: 'A New Jersey mob boss struggles with personal issues.', posterURL: 'https://via.placeholder.com/200x300?text=The+Sopranos', rating: 5, trailer: 'https://www.youtube.com/embed/mq4b3q0m6Hk' },
  { id: 23, title: 'Twin Peaks', description: 'A town’s surreal investigation into a murder.', posterURL: 'https://via.placeholder.com/200x300?text=Twin+Peaks', rating: 4, trailer: 'https://www.youtube.com/embed/OT3s7fXjvEw' },
  { id: 24, title: 'Dexter', description: 'A serial killer who targets other killers.', posterURL: 'https://via.placeholder.com/200x300?text=Dexter', rating: 4, trailer: 'https://www.youtube.com/embed/eI1c0Y3npZs' },
  { id: 25, title: 'The Handmaid\'s Tale', description: 'A dystopian future of brutal subjugation of women.', posterURL: 'https://via.placeholder.com/200x300?text=Handmaids+Tale', rating: 4, trailer: 'https://www.youtube.com/embed/P8I0NFTq4sY' },
  { id: 26, title: 'Fargo', description: 'Dark comedic crime anthology based on the Coen Brothers film.', posterURL: 'https://via.placeholder.com/200x300?text=Fargo', rating: 4, trailer: 'https://www.youtube.com/embed/2e0w8rQ3DQE' },
  { id: 27, title: 'Lost', description: 'Survivors of a plane crash experience mysteries on the island.', posterURL: 'https://via.placeholder.com/200x300?text=Lost', rating: 4, trailer: 'https://www.youtube.com/embed/_5W0J7abJxU' },
  { id: 28, title: 'Battlestar Galactica', description: 'Human survivors flee from the Cylons across space.', posterURL: 'https://via.placeholder.com/200x300?text=Battlestar+Galactica', rating: 4, trailer: 'https://www.youtube.com/embed/9m8pVwW9q9E' },
  { id: 29, title: 'Rick and Morty', description: 'An eccentric scientist and his grandson go on adventures.', posterURL: 'https://via.placeholder.com/200x300?text=Rick+and+Morty', rating: 5, trailer: 'https://www.youtube.com/embed/7H6sO3blc4k' },
  { id: 30, title: 'Planet Earth', description: 'A stunning look at life on our planet.', posterURL: 'https://via.placeholder.com/200x300?text=Planet+Earth', rating: 5, trailer: 'https://www.youtube.com/embed/c8aFcHFu8QM' },
  { id: 31, title: 'House of Cards', description: 'A ruthless politician will stop at nothing to conquer Washington.', posterURL: 'https://via.placeholder.com/200x300?text=House+of+Cards', rating: 4, trailer: 'https://www.youtube.com/embed/ULwUzF1q5w4' },
  { id: 32, title: 'The Expanse', description: 'A conspiracy threatens the fragile peace of the solar system.', posterURL: 'https://via.placeholder.com/200x300?text=The+Expanse', rating: 4, trailer: 'https://www.youtube.com/embed/5y2Xk0oK5Jw' },
  { id: 33, title: 'Vikings', description: 'The sagas of Viking Ragnar Lothbrok and his sons.', posterURL: 'https://via.placeholder.com/200x300?text=Vikings', rating: 4, trailer: 'https://www.youtube.com/embed/1a3D2c5kVYY' },
  { id: 34, title: 'Peaky Blinders', description: 'A gangster family epic set in 1919 Birmingham.', posterURL: 'https://via.placeholder.com/200x300?text=Peaky+Blinders', rating: 5, trailer: 'https://www.youtube.com/embed/2eQJ0I0w1Yo' },
  { id: 35, title: 'Money Heist', description: 'A group of robbers take hostages and lock themselves in the Royal Mint.', posterURL: 'https://via.placeholder.com/200x300?text=Money+Heist', rating: 4, trailer: 'https://www.youtube.com/embed/3Q_c6w_Mz7I' },
  { id: 36, title: 'Dark', description: 'A German town reveals a time travel conspiracy.', posterURL: 'https://via.placeholder.com/200x300?text=Dark', rating: 5, trailer: 'https://www.youtube.com/embed/2zYv2gH8TNs' },
  { id: 37, title: 'Killing Eve', description: 'An intelligence investigator becomes obsessed with a skilled assassin.', posterURL: 'https://via.placeholder.com/200x300?text=Killing+Eve', rating: 4, trailer: 'https://www.youtube.com/embed/0b8Z8p1Q3Fg' },
  { id: 38, title: 'Sons of Anarchy', description: 'A motorcycle club deals with crime and family.', posterURL: 'https://via.placeholder.com/200x300?text=Sons+of+Anarchy', rating: 4, trailer: 'https://www.youtube.com/embed/6I1OYkN6rLE' },
  { id: 39, title: 'Mr. Robot', description: 'A hacker with dissociative identity disorder targets corrupt corporations.', posterURL: 'https://via.placeholder.com/200x300?text=Mr+Robot', rating: 5, trailer: 'https://www.youtube.com/embed/xIBiJ_SzJTA' },
  { id: 40, title: 'Firefly', description: 'A group of renegades travel the galaxy in a small transport ship.', posterURL: 'https://via.placeholder.com/200x300?text=Firefly', rating: 4, trailer: 'https://www.youtube.com/embed/pft7W0y6j2I' },
  { id: 41, title: 'Lost in Space', description: 'The Robinson family navigates survival in deep space.', posterURL: 'https://via.placeholder.com/200x300?text=Lost+in+Space', rating: 3, trailer: 'https://www.youtube.com/embed/3aZ7Jf3xA9g' },
  { id: 42, title: 'The Last of Us', description: 'A post-apocalyptic tale of survival and connection.', posterURL: 'https://via.placeholder.com/200x300?text=The+Last+of+Us', rating: 5, trailer: 'https://www.youtube.com/embed/CoY6f0E-0m8' },
  { id: 43, title: 'Euphoria', description: 'A look at modern teenage life and its challenges.', posterURL: 'https://via.placeholder.com/200x300?text=Euphoria', rating: 4, trailer: 'https://www.youtube.com/embed/MGm7hG1l8xk' },
  { id: 44, title: 'The Queen\'s Gambit', description: 'A chess prodigy rises to the top while battling addiction.', posterURL: 'https://via.placeholder.com/200x300?text=Queens+Gambit', rating: 5, trailer: 'https://www.youtube.com/embed/CDrieqwSdgI' },
  { id: 45, title: 'Cobra Kai', description: 'The Karate Kid saga continues decades later.', rating: 4, trailer: 'https://www.youtube.com/embed/47c0eY3bZs8' }
];

// Create a simple SVG poster for each movie so every entry has a unique cover image
const colors = ['#1f2937','#0ea5a4','#ef4444','#7c3aed','#f59e0b','#10b981','#3b82f6','#ef6ab0']

function makePoster(title, id){
  const bg = colors[id % colors.length]
  const escaped = title.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='48%' fill='#fff' font-family='Arial, Helvetica, sans-serif' font-size='28' font-weight='700' dominant-baseline='middle' text-anchor='middle'>${escaped}</text><text x='50%' y='58%' fill='rgba(255,255,255,0.85)' font-family='Arial, Helvetica, sans-serif' font-size='14' text-anchor='middle'>Series / Movie</text></svg>`
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
}

const moviesWithPosters = movies.map(m => {
  let poster = m.posterURL
  if (!poster && m.trailer) {
    const match = String(m.trailer).match(/embed\/([^?&'\"]+)/)
    if (match) poster = `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
  }
  if (!poster) poster = makePoster(m.title, m.id)
  return { ...m, posterURL: poster }
})

export default moviesWithPosters;
