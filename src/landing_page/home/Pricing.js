import React from "react";

function Pricing(){
    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-4 mb-4">
                    <h1 className="mb-3">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>See Pricings <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-md-2 d-none d-md-block"></div>
                <div className="col-12 col-md-6 mb-4">
                    <div className="row text-center">
                        <div className="col-6 p-3 border">
                            <h1 className="mb-3">0</h1>
                            <p>Free account<br/>opening</p>
                        </div>
                        <div className="col-6 p-3 border">
                            <h1 className="mb-3">20</h1>
                            <p>Intraday and<br/>F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;