import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {motion} from "framer-motion";

export default function Project({ projets }) {
    return(
          
              <Splide
                  options={ {
                      rewind : true,
                      perPage: 2,
                      width  : '95%',
                      height: 500,
                      gap: '2rem',
                      breakpoints: {
                          730: {
                              perPage: 1,
                          },
                      }
                  } }>
                  {projets.map((projet) => {
                      return(
                          <React.Fragment key={projet.id}>
                              <SplideSlide>
                              <motion.div
                                  className="overlay justify-content-center">
                                  <img className="project-img" src={projet.img} alt="Card cap" width="100%" />
                                  <h5 className=" overlay-title text-center">{ projet.title }</h5>
                                  <p className=" overlay-infos text-center">{projet.infos}</p>
                                  <p className=" overlay-lang text-center">{projet.languages.join(", ")}</p>
                                  <a href={projet.link} target="_blank" className={"overlay-link"}>{projet.link}</a>
                                 </motion.div>
                              </SplideSlide>
                          </React.Fragment>
                              )
                  })}
              </Splide>
        );
}