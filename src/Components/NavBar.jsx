import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [mode, setMode] = useState(false); // false = Light, true = Dark

    useEffect(() => {
        document.body.style.backgroundColor = mode ? "#302e2eff" : "#f8f9fa";
        document.body.style.color = mode ? "#fff" : "#000";
    }, [mode]);

    const changeTheme = () => {
        setMode(!mode); 
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:'fixed',width:"100%",backgroundColor: mode ? "#302e2eff" : "#fff", top:"0",zIndex:"1000"}}>
                <div className="container-fluid" style={{ borderBottom: '0.5px solid #0B5330' }}>
                    <img src="assets/images/logo.png" alt="logo" style={{ borderRadius: '13px', marginLeft: '30px' }}/>
                    <h1 className="navbar-brand" style={{ color: mode ? "#fff" : "#0B5330" , marginRight: "200px", marginTop: "5px" }}>Recipes Finder</h1>

                    <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '500px' }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <h5><Link style={{ color: mode ? "white" : "black" }} className="nav-link active" to="/">Home</Link></h5>
                            </li>

                            <li className="nav-item">
                                <h5><Link style={{ color: mode ? "white" : "black" }} to="Favorites" className="nav-link">Favorites</Link></h5>
                            </li>
                        </ul>

                        <button onClick={changeTheme} aria-pressed={mode}style={{marginLeft: "20px",backgroundColor: mode ? "#0B5330" : "#e0e0e0",
                        color: mode ? "white" : "black",border: "none",padding: "6px 15px",borderRadius: "20px",cursor: "pointer",fontWeight: "500",
                        }}>
                            {mode ? "Light" : "Dark"}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
