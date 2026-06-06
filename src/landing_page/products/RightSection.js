import React from "react";

function RightSection({ productName, productDescription, imageUrl,learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none" }}>Learn More</a>



                </div>
                <div className="col-6">
                    <img src={imageUrl}></img>

                </div>
            </div>
        </div>
    )
}
export default RightSection;