import React from "react";

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 text-center">
                    <img src={imageUrl} className="img-fluid"></img>
                </div>
                <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{marginLeft:"30px"}}>Learn More</a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" className="img-fluid" style={{width:"40%"}}></img>
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appStoreBadge.svg" className="img-fluid" style={{width:"40%"}}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftSection;