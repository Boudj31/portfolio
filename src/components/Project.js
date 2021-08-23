import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {OverlayTrigger, Button, Popover} from "react-bootstrap";

export default function Project({ projets }) {
    return(

            <Carousel autoPlay interval={6000} infiniteLoop showThumbs>
        {projets.map((projet) => {
            return(

                <React.Fragment key={projet.id}>
                              <img className="card-img-top project-img" src={projet.img} alt="Card image cap" width="100%" />
                    {/* <OverlayTrigger
                        trigger="click"
                        key={projet.id}
                        overlay={
                            <Popover id="1">
                                <Popover.Header as="h3">POpopskeoj</Popover.Header>
                                <Popover.Body>
                                    <strong>je suis la </strong> Check this info.
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="secondary">Popover</Button>
                    </OverlayTrigger>
                    */ }
                    <div className="overlay">
                              <h5 className=" overlay-title text-center">{ projet.title }</h5>
                               <p className=" overlay-infos text-center">{projet.infos}</p>
                               <p className=" overlay-date text-center">{projet.date}</p>
                               <p className=" overlay-lang text-center">{projet.languages.join("  ")}</p>
                               <a href={projet.link} className={"overlay-link"}>{projet.link}</a>
                           </div>


                </React.Fragment>


            )
            })}
                </Carousel>


    );
}