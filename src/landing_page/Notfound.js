import React from "react";
import { Link } from "react-router-dom";

function Notfound(){
    return(
      
           <div className="container p-5 mb-5"> 
          <div className="row text-center">
               <h1 className="mt-5">Page Is Not Found</h1>
               <p> Soory the page you looking for is not found</p>
               <Link to="/">
               <button className="p-2 btn btn-primary fs-5 " style={{width:"25%",margin:"0 auto"}}>Go Home</button>

               </Link>

          </div>
        </div>
        
    )
}

export default Notfound;