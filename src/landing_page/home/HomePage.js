import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Educations from "./Educations"
import OpenAccount from "../OpenAccount"
import Navbar from "../Navbar"
import Footer from "../Footer"

function HomePage(){
    return(
        <>
      
        <Hero></Hero>
        <Award></Award>
        <Stats></Stats>
        <Pricing></Pricing>
        <Educations></Educations>
        <OpenAccount></OpenAccount>
     
        
        </>
    )
}

export default HomePage