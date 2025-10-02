
import React, { useState, useEffect } from "react";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
        setFavorites(JSON.parse(saved));
    }
    }, []);

    return (
        <div className="container">
            <h2 className="text-center mb-4" style={{ color: "#0B5330" }}>My Favorite Recipes</h2>
            <div className="row">
                {favorites.length > 0 ? (
                favorites.map((meal) => (
                <div key={meal.idMeal} className="col-md-4 text-center mb-4" style={{boxShadow: "0 4px 8px rgba(0,0,0,0.2)",borderRadius: "10px",padding: "20px",marginTop: "30px"}}>
                <img src={meal.strMealThumb} className="img-fluid" style={{ height: "170px", width: "170px" }} alt={meal.strMeal}/>
                <h4>{meal.strMeal}</h4>
                <h6>{meal.strCategory}</h6>
                <h6 style={{ fontSize: "0.9rem" }}>{meal.strArea}</h6>
            </div>
            ))
        ) : (
            <p className="text-center mt-4">No favorites yet</p>
        )}
        </div>
    </div>
    );
}

export default Favorites;
