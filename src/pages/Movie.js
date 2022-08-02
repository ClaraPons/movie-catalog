import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Catalog from '../Catalog.json'



const Movie = () => {
  
  const params = useParams()
  const [movie, setMovie] = useState(Catalog[params.id - 1])

  return (
      <>
    <h1>{movie.title}</h1>
    <p>{movie.director}</p>
    <h3>Acteurs•trices</h3>
    {movie.stars.map(star => (
        <ul>
            <li>{star}</li>
        </ul>
    ))}
    <img src={movie.image}></img>
    <p>{movie.description}</p>
    </>
  );
}

export default Movie;
