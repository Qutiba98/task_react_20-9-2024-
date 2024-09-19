import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./RecipeList.css"; 

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=e998a3d3cbe84b9b91ee2ea5fa03ba6f"
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
        />
      </div>
      <div className="row">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
