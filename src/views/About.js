import React from 'react'
import Mouse from "../components/Mouse";
import AboutComponent from "../components/AboutComponent";
import Navtest from "../components/Navtest";
import ScrollButtons from "../components/ScrollButtons";

export default function About() {
    return (
        <>
            <Mouse />
            <Navtest />
            <div className="container mt-3">
                <AboutComponent />
                <ScrollButtons right={"/contact"} left={"/skills"}/>
            </div>
        </>
    );

}