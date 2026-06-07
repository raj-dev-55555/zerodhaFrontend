import React from "react";

function Educations() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 text-center">
                    <img src="media/images/education.svg" className="img-fluid"></img>
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <h2 className="mb-3 text-muted">Free and open market educations</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="mx-5" style={{ textDecoration: "none" }}>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="mx-5" style={{ textDecoration: "none" }}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Educations;