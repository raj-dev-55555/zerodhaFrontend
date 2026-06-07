import React from "react";

function RightSection({ productName, productDescription, imageUrl, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src={imageUrl} className="img-fluid"></img>
                </div>
            </div>
        </div>
    )
}
export default RightSection;