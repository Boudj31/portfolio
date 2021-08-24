import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {motion} from "framer-motion";

export default function Project({ projets }) {
    return(

          <>
              <Carousel autoPlay interval={6000} infiniteLoop showThumbs>
        {projets.map((projet) => {
            return(
                <React.Fragment key={projet.id}>
                              <img className="card-img-top project-img" src={projet.img} alt="Card image cap" width="100%" />
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="overlay d-lg-block d-md-block d-none">
                        <h5 className=" overlay-title text-center">{ projet.title }</h5>
                        <p className=" overlay-infos text-center">{projet.infos}</p>
                        <p className=" overlay-date text-center">{projet.date}</p>
                        <p className=" overlay-lang text-center">{projet.languages.join("  ")}</p>
                        <a href={projet.link} className={"overlay-link"}>{projet.link}</a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="legend d-lg-none d-md-none d-sm-block">
                        <h5 className=" overlay-title text-center">{ projet.title }</h5>
                        <p className=" overlay-infos text-center">{projet.infos}</p>
                        <p className=" overlay-date text-center">{projet.date}</p>
                        <p className=" overlay-lang text-center">{projet.languages.join("  ")}</p>
                        <a href={projet.link} className={"overlay-link"}>{projet.link}</a>
                    </motion.div>

                </React.Fragment>

            )
            })}
              </Carousel>

              {/*
              {projets.map((projet) => {
                  return(
                      <React.Fragment key={projet.id}>
                          <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="desc-btm d-lg-none d-md-none">
                              <h5 className=" btm-title text-center">{ projet.title }</h5>
                              <p className=" btm-infos text-center">{projet.infos}</p>
                              <p className=" btm-date text-center">{projet.date}</p>
                              <p className=" btm-lang text-center">{projet.languages.join(",  ")}</p>
                              <a href={projet.link} className={"btm-link"}>{projet.link}</a>
                          </motion.div>

                      </React.Fragment>

                  )
              })}
              */}


        </>


        );
}