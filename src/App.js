import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './component/MovieCard';

function App() {
const API_URL ="https://api.themoviedb.org/3/movie/popular?api key=fa1192549721df01a1fb28a7788e6608"

  const [movies,setMovies] = useState([])
useEffect(() =>{
fetch(API_URL)
.then(res=> res.json())
.then(data => setMovies(data.results))
},[])
console.log(movies)


  return (
    <div className="App">
      <div className='searchnav'>
        <div>
          <h1>Movise</h1>
        </div>
        <form>
          <input/>
          <button>Search</button>
        </form>
      </div>
      <div className='movies'>
     {movies.map((movie)=>
<MovieCard/>      
     )}


      </div>
    </div>
  );
}

export default App;
