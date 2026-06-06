import React from "react";
import {render,screen} from "@testing-library/react";
import Hero from "../landing_page/home/Hero";
import "@testing-library/jest-dom";

describe("Hero Componenent",()=>{
    test("render hero image",()=>{
        render(<Hero></Hero>);
        const heroImage = screen.getByAltText("Hero images");
        expect(heroImage).toBeInTheDocument();
        expect (heroImage).toHaveAttribute("src","media/images/homeHero.png")
    })
})

describe("Hero Componenent",()=>{
    test("render hero image",()=>{
        render(<Hero></Hero>);
        const heroImage = screen.getByAltText("Hero images");  // getByRole => jo name jaise button par jo name likhahai uske hisab se check karna ho 
        expect(heroImage).toBeInTheDocument();
        expect (heroImage).toHaveAttribute("src","media/images/homeHero.png") // toHaveClass yha class ko bhe check kar sakte hai ke isme yhi class lagin hai na 
    })
})