import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Catalog from '../Catalog.json'
import './Movie.css'



const Movie = () => {
  
  const params = useParams()
  const [movie] = useState(Catalog[params.id - 1])

  return (
      <>
    <div className='box-movie'>
        <h1 className='title-movie'>{movie.title}</h1>
        <div className='box-2'>
        <img className='affiche' src={movie.image} alt='affiche'></img>
        <div className='box-text-movie'>
        <p><strong>Director: </strong>{movie.director}</p>
        <p><strong>Stars:</strong></p>
        {movie.stars.map(star => (
            <ul>
                <li>{star}</li>
            </ul>
        ))}
        <p><strong>Description: </strong>{movie.description}</p>
        </div>
        </div>
    </div>
    </>
  );
}

export default Movie;
