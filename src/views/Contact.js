import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import ContactForm from '../components/ContactForm'
import Navtest from "../components/Navtest";
import ScrollButtons from "../components/ScrollButtons";
import {motion} from "framer-motion";


export default class Contact extends Component {
    render() {
        const variants = {
            initial: {
                opacity: 0.4,
                transition: { duration: 2.9 },
                x: 500,
            },
            visible: {
                opacity: 1,
                x: 0,
            },
            exit: {
                opacity: 0.4,
                transition: { duration: 2.9 },
                x: -500,
            }
        };

        return (
            <>
                <main role="main">
                    <Mouse/>
                    <Navtest/>
                    <motion.div
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        variants={variants}
                        className="contact">
                        <ContactForm/>
                    </motion.div>
                </main>
                <ScrollButtons left={"/about"}/>
            </>
        )
    }
}