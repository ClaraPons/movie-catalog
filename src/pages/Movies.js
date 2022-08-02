import { Link } from 'react-router-dom'
import Catalog from '../Catalog.json'
import './Movies.css'


const Movies = () => {

  return (
    <>
    <h1 className='title-movies'>Movies</h1>
    <ul className='list-movies'>
    {Catalog.map(Catalog => (
        <Link to={`/movie/${Catalog.id}`}>
            <div className='box'>
                <img className='affiche' src={Catalog.image}></img>
                <li key={Catalog.title}>
                    <p>{Catalog.title}</p>
                </li>
            </div>
        </Link>
    ))}
    </ul>
    </>
  );
}

export default Movies;
