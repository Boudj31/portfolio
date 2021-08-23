import React from 'react'
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import AboutComponent from "../components/AboutComponent";
import Navtest from "../components/Navtest";

export default function About() {
    return (
        <>
            <Mouse />
            <Navtest />
            <div className="container mt-3">
                <AboutComponent />
            </div>
        </>
    );

}