import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row text-center p-3 border-top">
                <h1 className="fs-2">People</h1>
            </div>

            <div className="row p-3 p-md-5" style={{lineHeight:"1.8", fontSize:"1.1em"}}>
                <div className="col-12 col-md-6 p-3 p-md-5 text-center">
                    <img src="/media/images/nithinKamath.jpg" className="img-fluid rounded-circle w-50 w-md-60"></img>
                    <h4 className="mt-3">Nithin Kamath</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    )
}
export default Team;