import React, {Fragment} from 'react'
import Mouse from "../components/Mouse";
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";
import ScrollButtons from "../components/ScrollButtons";
import DynamicText from "../components/DynamicText";


export default function Home() {
    return (
        <Fragment>
            <Mouse />
            <Navtest />
            <div className="home container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12 text-home">
                        <h1>I AM <br/>BOUDJENANE <span>
                            Rachid
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
                            whileTap={{ scale: 0.9 }}className="col-lg-5 img-home">
                            <img src="img/mac.svg" alt="mac"/>
                        </motion.div>

                </div>

            </div>
            <ScrollButtons right={"/projets"}/>

        </Fragment>
    );

}