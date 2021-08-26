import React, {Fragment} from 'react'
import Mouse from "../components/Mouse";
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";
import ScrollButtons from "../components/ScrollButtons";


export default function Home() {
    return (
        <Fragment>
            <Mouse />
            <Navtest />
            <div className="home container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 text-home">
                        <h1>I am <br/>BOUDJENANE Rachid</h1>
                        <h2> Développeur Fullstack</h2>
                        <h2 className="wd"> Designer Web</h2>
                        <a href="cv/CV.pdf" download="CV">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="btn pr-3 pl-3">
                                Mon CV
                            </motion.button>
                        </a>
                    </div>
                        <div className="col-lg-4 img-home">
                            <img src="img/13730.png" alt="mac"/>
                        </div>

                </div>

            </div>
            <ScrollButtons right={"/projets"}/>

        </Fragment>
    );

}