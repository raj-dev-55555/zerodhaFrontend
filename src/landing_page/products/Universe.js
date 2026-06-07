import React from "react";

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-6 col-md-4 p-2 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" className="img-fluid w-50"></img>
                    <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds.</p>
                </div>
                <div className="col-6 col-md-4 mt-5 p-2">
                    <img src="media/images/sensibullLogo.svg" className="img-fluid w-50"></img>
                    <p className="text-small text-muted">Options trading platform that lets you create strategies and analyze positions.</p>
                </div>
                <div className="col-6 col-md-4 mt-5 p-2">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid"></img>
                    <p className="text-small text-muted">Investment research platform that offers detailed insights on stocks and sectors.</p>
                </div>
                <div className="col-6 col-md-4 p-2 mt-5">
                    <img src="media/images/streakLogo.png" className="img-fluid w-50"></img>
                    <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies.</p>
                </div>
                <div className="col-6 col-md-4 mt-5 p-2">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid"></img>
                    <p className="text-small text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks.</p>
                </div>
                <div className="col-6 col-md-4 mt-5 p-2">
                    <img src="media/images/dittoLogo.png" className="img-fluid w-50"></img>
                    <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>

                <div className="col-12 mt-4">
                    <button className="p-2 btn btn-primary fs-5 w-50 w-md-25 mx-auto">Signup Now</button>
                </div>
            </div>
        </div>
    )
}
export default Universe;