import React from 'react'

function Header() {
    return (
        <div>
            <div className="container">
                <div className="row" style={{ borderRadius:"10px", marginTop:"30px" ,paddingTop:"60px"}}>
                    <div className="col-lg-6" >
                        <h1 style={{color:"#0B5330", padding:"140px" , fontSize:"2.7rem"}}>Find Your Next Recipe</h1>
                    </div>
                    <div className="col-lg-6">
                        <img src="assets/images/s1.jpg"  style={{width:"100%" , height:"100%", borderRadius:"10px"}} alt="sp"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header