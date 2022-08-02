import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from './pages/Movies.js'
import NotFound from './pages/NotFound.js'
import Movie from "./pages/Movie.js";


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
