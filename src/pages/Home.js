import { Link } from 'react-router-dom'
import Catalog from '../Catalog.json'
import Movie from './Movie.js';
import './Home.css'


const Home = () => {

  return (
    <>
    <h1 className='title-movies'>Movies list</h1>
    <ul className='list-movies'>
    {Catalog.map(movie => (
        <Link className="link" to={`/movie/${movie.id}`}>
            <div className='box'>
                <img className='affiche-all' src={movie.image} alt='affiche'></img>
                <li key={movie.title}>
                    <p className='link-text'>{movie.title}</p>
                </li>
            </div>
        </Link>
    ))}
    </ul>
    </>
  );
}

export default Home;
