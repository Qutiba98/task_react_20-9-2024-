import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // تأكد من استيراد Bootstrap
import "./MovieDetails.css"; // تأكد من إضافة التنسيق الإضافي إذا لزم الأمر

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = "7ee736783963d935b4a872882160ab21"; // استبدله بمفتاح API الخاص بك

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id, API_KEY]);

  return (
    <div className="container mt-4">
      {movie ? (
        <div className="row">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <h1>{movie.title}</h1>
            <p className="text-muted">Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
