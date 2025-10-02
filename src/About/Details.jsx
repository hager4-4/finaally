import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => setMeal(res.data.meals[0]));
    }, [id]);

    if (!meal) return <p className="text-center mt-5">Loading...</p>;

    return (
        <div style={{display: "flex",justifyContent: "center",padding: "40px",backgroundColor: "#f3f6f9",minHeight: "100vh",}}>
            <div style={{display: "flex",gap: "40px",maxWidth: "900px",width: "100%",background: "#fff",borderRadius: "20px",boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            padding: "30px",flexWrap: "wrap",}}>
                <div style={{ flex: "1 1 300px" }}>
                    <h3 style={{ color: "#34495e", marginBottom: "15px" }}>Ingredients</h3>
                    <div style={{display: "grid",gridTemplateColumns: "1fr",gap: "10px",marginBottom: "25px",}}>
                            {Array.from({ length: 20 }).map((_, i) => {
                                const ingredient = meal[`strIngredient${i + 1}`];
                                const measure = meal[`strMeasure${i + 1}`];
                                return ingredient ? (
                                    <div key={i} style={{background: "#f8f9fa",padding: "10px",borderRadius: "10px",fontSize: "0.95rem",boxShadow: "0 2px 6px rgba(0,0,0,0.05)",}}>{ingredient} - {measure}</div>
                                ) : null;
                        })}
                    </div>
                    <h3 style={{ color: "#34495e", marginBottom: "15px" }}>Instructions</h3>
                    <p style={{lineHeight: "1.8",background: "#fdfdfd",padding: "20px",borderRadius: "15px",boxShadow: "0 2px 8px rgba(0,0,0,0.05)",fontSize: "1rem",}}>{meal.strInstructions}</p>
                </div>
                <div style={{ flex: "0 0 300px", textAlign: "center" }}>
                    <img src={meal.strMealThumb}alt={meal.strMeal} style={{borderRadius: "15px",width: "100%",boxShadow: "0 4px 15px rgba(0,0,0,0.2)",marginBottom: "20px",}}/>
                    <h2 style={{ color: "#2c3e50", marginTop: "0", fontWeight: "700" }}>{meal.strMeal}</h2>
    
                    {meal.strYoutube && (
                        <div style={{ marginTop: "20px" }}>
                            <iframe width="100%" height="200" src={meal.strYoutube.replace("watch?v=", "embed/")} title="YouTube video player"frameBorder="0" allowFullScreen style={{ borderRadius: "15px",boxShadow: "0 4px 15px rgba(0,0,0,0.1)",}}
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Details;
