import React from "react";

function Broerage(){
    return(
        <div className="container">
           <div className="row p-3 p-md-5 mt-5 border-top">
            <div className="col-12 col-md-8 p-4">
                <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
                <ul style={{lineHeight:"2.5", fontSize:"16px"}}>
                    <li style={{listStyle:"none"}} className="text-muted">Individual account</li>
                    <li style={{listStyle:"none"}} className="text-muted">Minor account</li>
                    <li style={{listStyle:"none"}} className="text-muted">NRI account</li>
                    <li style={{listStyle:"none"}} className="text-muted">HUF account</li>
                    <li style={{listStyle:"none"}} className="text-muted">Partnership, LLP, and Corporate accounts</li>
                </ul>
            </div>
            <div className="col-12 col-md-4 p-4">
                <a href="" style={{textDecoration:"none"}}><h3>Pricing</h3></a>
            </div>
           </div>
        </div>
    )
}
export default Broerage;