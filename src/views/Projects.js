import React from 'react'
import Mouse from "../components/Mouse";
import Project from "../components/Project";
import Navtest from "../components/Navtest";
import ScrollButtons from "../components/ScrollButtons";
import {motion} from "framer-motion";

export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Svp-Visio",
            date: "Avril 2021",
            languages: ["Wordpress"],
            infos:
                "Site Wordpress de screencasts ",
            img: "./img/projet/svp.png",
            link: "http://www.svp-visio.fr",
        },
        {
            id: 2,
            title: "Stock Manager",
            date: "Decembre 2020",
            languages: ["Symfony", "HTML/CSS", "Sass"],
            infos:
                "Progiciel de gestion de stock.",
            img: "./img/projet/naga.png",
            link: "http://www.nagastock.com",
        },
        {
            id: 3,
            title: "Bourse aux déchets",
            date: "Avril 2020",
            languages: ["Vue", "HTML/CSS", "Symfony"],
            infos:
                "Site d'annonces pour la gestion de déchets.",
            img: "./img/projet/wasted.png",
            link: "http://www.nagastock.fr",
        },
        {
            id: 4,
            title: "Symfony Online",
            date: "Juillet 2020",
            languages: ["Symfony", "HTML/CSS", "Sass"],
            infos:
                "Site E-learning sur Symfony",
            img: "./img/projet/online.png",
            link: "http://www.google.com",
        },

        {
            id: 5,
            title: "Portfolio",
            date: "Septembre 2021",
            languages: ["HTML/CSS",'ReactJS'],
            infos:
                "Portfolio de Boudjenane Rachid",
            img: "./img/projet/port.png",
            link: "http://www.rachidboudjenane.fr",
        },
        {
            id: 5,
            title: "Nitehop V1",
            date: "Septembre 2019",
            languages: ["Swift",'Firebase'],
            infos:
                "Application IOS pour le monde de la nuit.",
            img: "./img/projet/nite.png",
            link: "http://www.nitehop.fr",
        },
        {
            id: 6,
            title: "Maquette Svp-visio",
            date: "Septembre 2021",
            languages: ["Adode XD",'Illustrator'],
            infos:
                "Première idée de maquette",
            img: "./img/projet/xdsvp.png",
            link: "https://xd.adobe.com/view/38f0fc14-3702-4cba-9abf-dceb9e3482fb-6da3/",
        },
        {
            id: 7,
            title: "Screencast modèle boite css",
            date: "Septembre 2019",
            languages: ["Première Pro",'After Effect', 'Audition'],
            infos:
                "tuto sur les modèles de boite en CSS",
            img: "./img/projet/css.png",
            link: "https://vimeo.com/manage/videos/574024391",
        },
        {
            id: 8,
            title: "Introduction after",
            date: "Septembre 2019",
            languages: ['After Effect'],
            infos:
                "Animation en motion design",
            img: "./img/projet/intro.png",
            link: "https://vimeo.com/manage/videos/574028292",
        },
        {
            id: 9,
            title: "Illustration Mario",
            date: "Septembre 2019",
            languages: ['Illustrator'],
            infos:
                "Illustation svg",
            img: "./img/projet/mario.png",
            link: "http://www.nitehop.fr",
        },
        {
            id: 10,
            title: "Illustration Homme souriant",
            date: "Septembre 2019",
            languages: ['Illustrator'],
            infos:
                "Illustation svg",
            img: "./img/projet/homme.png",
            link: "http://www.nitehop.fr",
        },
    ];
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
        <>
            <Mouse />
            <Navtest />
            <motion.div
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}
                className="container-lg"
                role="main">
                <div className="row mb-3 justify-content-center align-baseline box-title">
                    <h2 className="text-center"> Découvrez mes Réalisations</h2>
                </div>
                <div className="text-center">
                  <Project projets={projectsData}/>
                </div>
            </motion.div>
            <ScrollButtons right={"/skills"} left={"/"}/>
        </>
    );

}