import React from "react";

function Hero(){
    return(
        <section className="container-fluid" id="supportHero"> 
            <div className="p-3" id="supportWrapper">
               <h4>Support Tickets</h4>
               <a href="">Track Tickets</a>
            </div>

            <div className="row p-3 m-1 m-md-3">
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="Eg.how do I activate F&O" className="w-100 mt-2"></input><br/>
                    <div className="mt-2">
                        <a href="" className="d-block">Track account opening</a>
                        <a href="" className="d-block">Track segment activation</a>
                        <a href="" className="d-block">Intrady margins</a>
                        <a href="" className="d-block">Kite user manual</a>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <h1>Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="">Latest Intrady leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}
export default Hero;