import React, {Fragment} from 'react'
import Mouse from "../components/Mouse";
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";
import ScrollButtons from "../components/ScrollButtons";
import DynamicText from "../components/DynamicText";


export default function Home() {
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
        <Fragment>
            <Mouse />
            <Navtest />
            <motion.div
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}
                className="home container-fluid"
                role="main">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-sm-12 text-home">
                        <h1 className="hi">Hi, I am <br/><span>
                            RACHID
                        </span>
                        </h1>
                        <div className="dynamic-text">
                            <DynamicText />
                        </div>
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
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}className="col-lg-5 col-sm-12 img-home">
                        </motion.div>

                </div>

            </motion.div>
            <ScrollButtons right={"/projets"}/>

        </Fragment>
    );

}