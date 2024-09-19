import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // تأكد من استيراد Bootstrap
import "./MoviesList.css"; // تأكد من إضافة التنسيق الإضافي إذا لزم الأمر

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "7ee736783963d935b4a872882160ab21"; // استبدله بمفتاح API الخاص بك

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Popular Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-4">
            <div className="card">
              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
