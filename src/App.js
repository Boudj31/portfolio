import React, { useEffect } from "react";
import {Switch, Route, useLocation, useHistory, BrowserRouter,} from "react-router-dom";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    let history = useHistory();

    useEffect(() => {
        const handleScrollToElement = (e) => {
            console.log(e.wheelDeltaY);
            const url = window.location.origin + "/";

            const wheelRouter = (after, before) => {
                if (e.wheelDeltaY < 0) {
                    setTimeout(() => {
                        history.push(after);
                    }, 800);
                } else if (e.wheelDeltaY > 0) {
                    setTimeout(() => {
                        history.push(before);
                    }, 800);
                }
            };

            switch (window.location.href.toString()) {
                case url:
                    if (e.wheelDeltaY < 0) {
                        setTimeout(() => {
                            history.push("projets");
                        }, 500);
                    }
                    break;
                case url + "projets":
                    wheelRouter("skills", "");
                    break;
                case url + "skills":
                    wheelRouter("about", "projets");
                    break;
                case url + "about":
                    wheelRouter("contact", "skills");
                    break;
                case url + "contact":
                    if (e.wheelDeltaY > 0) {
                        setTimeout(() => {
                            history.push("about");
                        }, 800);
                    }
                    break;
                default:
                    console.log("nothing");
            }
        };
        window.addEventListener("wheel", handleScrollToElement);
    }, [history]);

    return (
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projets" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
            </Switch>
        </AnimatePresence>

  );
}

export default App;
