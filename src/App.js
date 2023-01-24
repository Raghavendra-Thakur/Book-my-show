import "./App.css"
import axios from "axios";

//pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";
import PlayPage from "./pages/play.page";

//routes
import { Routes, Route } from "react-router-dom";

//ract slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// ?api_key=8cde3b709e4d569e7e5eb6da6b7fa047&language=en-US&page=1
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_MOVIEDBAPI_KEY

function App() {
  return <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/movie/:id" element={<MoviePage/>}/>
    <Route path="/plays" element={<PlaysPage/>}/>
    <Route path="/tv/:id" element={<PlayPage/>}/>
  </Routes>
}

export default App;
