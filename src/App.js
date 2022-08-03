import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.js'
import NotFound from './pages/NotFound.js'
import Movie from "./pages/Movie.js";


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
