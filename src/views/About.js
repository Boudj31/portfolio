import React from 'react'
import Mouse from "../components/Mouse";
import AboutComponent from "../components/AboutComponent";
import Navtest from "../components/Navtest";
import ScrollButtons from "../components/ScrollButtons";
import {motion} from "framer-motion";

export default function About() {
    const variants = {
        initial: {
            opacity: 0.4,
            transition: { duration: 0.3 },
            x: 700,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.3 },
            x: -700,
        }
    };
    return (
        <>
            <Mouse />
            <Navtest />
            <motion.div
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}
                className="container mt-3"
                role="main">
                <AboutComponent />
                <ScrollButtons right={"/contact"} left={"/skills"}/>
            </motion.div>
        </>
    );

}