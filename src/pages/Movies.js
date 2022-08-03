import { Link } from 'react-router-dom'
import Catalog from '../Catalog.json'
import './Movies.css'


const Movies = () => {

  return (
    <>
    <h1 className='title-movies'>Movies list</h1>
    <ul className='list-movies'>
    {Catalog.map(Catalog => (
        <Link className="link" to={`/movie/${Catalog.id}`}>
            <div className='box'>
                <img className='affiche-all' src={Catalog.image} alt='affiche'></img>
                <li key={Catalog.title}>
                    <p className='link-text'>{Catalog.title}</p>
                </li>
            </div>
        </Link>
    ))}
    </ul>
    </>
  );
}

export default Movies;
