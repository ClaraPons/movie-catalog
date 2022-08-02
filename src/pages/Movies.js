import { Link } from 'react-router-dom'
import Catalog from '../Catalog.json'


const Movies = () => {

  return (
    <>
    <h1>Movies</h1>
    <ul>
    {Catalog.map(Catalog => (
        <li key={Catalog.title}>
        <Link to={`/movie/${Catalog.id}`}>{Catalog.title}</Link>
        </li>
    ))}
    </ul>
    </>
  );
}

export default Movies;
