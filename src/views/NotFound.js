import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";

export default class NotFound extends Component {
    render() {
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
            <main>
                <Mouse />
                <Navtest />
                <motion.div
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="notfound container"
                    role="main">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center mt-4 ">Erreur 404:</h1>
                            <h2 className="text-center"> La page n'existe pas.</h2>
                        </div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="col-12 img-not text-center">
                                <img src="img/404final.svg" alt="Illustration ordinateur avec un panneau 404"/>
                            </motion.div>
                    </div>
                </motion.div>
            </main>
        )
    }
}