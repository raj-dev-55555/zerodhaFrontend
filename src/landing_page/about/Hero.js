import React from "react";

function Hero(){
    return(
        <div className="container">
            <div className="row text-center p-3 p-md-5 mt-5">
                <h1 className="fs-2">We pioneered the discount broking model in India.<br/>
                Now, we are breaking ground with our technology.</h1>
            </div>
            
            <div className="row text-center p-3 p-md-5 mt-5 border-top text-muted" style={{lineHeight:"1.8", fontSize:"1.1em"}}>
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms.</p>
                </div>
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors</p>
                    <p><a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups.</p>
                    <p>Catch up on the latest updates on our <a href="" style={{textDecoration:"none"}}>blog</a> or see what the media is <a href="" style={{textDecoration:"none"}}>saying about us</a>.</p>
                </div>
            </div>
        </div>
    )
}
export default Hero;