import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/nav/Nav";
import Weather from "./Components/Weather/Weather"; 
import MoviesList from "./Components/movies/MoviesList";
import MovieDetails from "./Components/movies/MovieDetails";
import ContactList from "./Components/ContactList/ContactList";
import RecipeList from "./Components/RecipeList/RecipeList";
import Home from "./Components/Home/Home";
import Notes from "./Components/Notes/Notes";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/movie" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/ContactList" element={<ContactList />} />
        <Route path="/RecipeList" element={<RecipeList />} />
        <Route path="/Notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
