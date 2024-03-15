import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//390ca2b4  s=Ironman
const API_URL='http://www.omdbapi.com/?apikey=390ca2b4&';


function App() {

  const [movies , setMovies] = useState([]); //array of movies
  const [searchTerm , setSearchTerm] = useState('') ; //string for search input

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await  response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
      searchMovie('iron man');
  },[]);


  return (
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">
        <input type="text" placeholder="Search Movie" 
        value={searchTerm}
        onChange={(evt)=>setSearchTerm(evt.target.value)}/>

        <img src={SearchIcon} alt="searchIcon"
        onClick={()=> searchMovie(searchTerm)} />
      </div>

      {
        movies?.length > 0 ?
        (
          <div className="container">
          {
            movies.map((movie)=>{
             return <MovieCard movie={movie}/>
            })
          }
         </div>
        ) : (
          <div className="empty">
            <h2>No Movie Found</h2>
          </div>
        )

      }

      
     </div>
  );
}

export default App;
