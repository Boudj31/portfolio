import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Carousel } from 'react-responsive-carousel';
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

export default function Project({ projets }) {
    const [selectedId, setSelectedId] = useState(null)

    return(

          <>


              <Splide
                  options={ {
                      rewind : true,
                      perPage: 2,
                      width  : '100%',
                      gap    : '2rem',
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
                                  className="overlay">
                                  <img className="card-img-top project-img" src={projet.img} alt="Card image cap" width="100%" />
                                  <h5 className=" overlay-title text-center">{ projet.title }</h5>
                                  <p className=" overlay-infos text-center">{projet.infos}</p>
                                  <p className=" overlay-lang text-center">{projet.languages.join(", ")}</p>
                                  <a href={projet.link} className={"overlay-link"}>{projet.link}</a>
                                 </motion.div>
                              </SplideSlide>
                          </React.Fragment>
                              )
                  })}
              </Splide>


        </>


        );
}