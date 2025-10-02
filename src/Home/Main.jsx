import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Main() {
    const [text, setText] = useState([]);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    const toggleFavorite = (meal) => {
    const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
    const updatedFavs = isFav
        ? favorites.filter((fav) => fav.idMeal !== meal.idMeal)
        : [...favorites, meal];
        setFavorites(updatedFavs);
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    };

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => setText(res.data.meals || []));
            }, [search]);

    const filteredMeals = categoryFilter
        ? text.filter((meal) => meal.strCategory === categoryFilter)
        : text;

    return (
        <div>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <input className="form-control" placeholder="search with name" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                </div>
                <div className="row text-center my-3">
                    <div className="col-12">
                        <button className="btn btn-outline-success m-2" onClick={() => setCategoryFilter("Dessert")}>Dessert</button>
                        <button className="btn btn-outline-success m-2" onClick={() => setCategoryFilter("Seafood")}>Seafood</button>
                        <button className="btn btn-outline-success m-2" onClick={() => setCategoryFilter("Vegetarian")}>Vegetarian</button>
                        <button className="btn btn-outline-success m-2" onClick={() => setCategoryFilter("")}> All</button>
                    </div>
                </div>
                <div className="row">
                    {filteredMeals && filteredMeals.length > 0 ? (
                        filteredMeals.map((result) => (
                            <div key={result.idMeal} className="col-md-4 text-center mb-4" style={{boxShadow: "0 4px 8px rgba(0,0,0,0.2)",borderRadius: "10px",padding: "20px",marginTop: "30px",}}>
                                <img src={result.strMealThumb} className="img-fluid" style={{ height: "170px", width: "170px", borderRadius: "10px" }} alt={result.strMeal}/>
                                <h4>{result.strMeal}</h4>
                                <h6>{result.strCategory}</h6>
                                <h6 style={{ fontSize: "0.9rem" }}>{result.strArea}</h6>
                                <div>
                                <Link to={`/details/${result.idMeal}`}>
                                    <button style={{borderRadius: "10px",color: "white",backgroundColor: "#0B5330",margin: "15px",}}>
                                        View recipe
                                    </button>
                                </Link>

                                <FaHeart onClick={() => toggleFavorite(result)} style={{color: favorites.some((fav) => fav.idMeal === result.idMeal) ? "red" : "white",backgroundColor: "#0B5330",borderRadius: "50%",padding: "5px",cursor: "pointer",fontSize: "24px",}}/>
                                    
                                </div>
                            </div> 
                        ))
                    ) : (
                        <p className="text-center mt-4">null</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
