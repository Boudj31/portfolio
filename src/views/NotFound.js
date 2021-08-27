import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";

export default class NotFound extends Component {
    render() {
        return (
            <main>
                <Mouse />
                <Navtest />
                <div className="notfound container" role="main">
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
                </div>
            </main>
        )
    }
}