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
            img: "./img/projet/svpvisio.png",
            link: "http://www.svp-visio.com",
        },
        {
            id: 2,
            title: "Stock Manager",
            date: "Decembre 2020",
            languages: ["Symfony", "HTML/CSS", "Sass"],
            infos:
                "Progiciel de gestion de stock.",
            img: "./img/projet/naga.png",
            link: "https://github.com/Boudj31/naga-stoock",
        },
        {
            id: 3,
            title: "Bourse aux déchets",
            date: "Avril 2020",
            languages: ["Vue", "HTML/CSS", "Symfony"],
            infos:
                "Site d'annonces pour la gestion de déchets.",
            img: "./img/projet/wasted.png",
            link: "https://nagamad.netlify.app/",
        },
        {
            id: 4,
            title: "Symfony Online",
            date: "Juillet 2020",
            languages: ["Symfony", "HTML/CSS", "Sass"],
            infos:
                "Site E-learning sur Symfony",
            img: "./img/projet/online.png",
            link: "https://www.symfony-online.fr",
        },

        {
            id: 5,
            title: "Portfolio",
            date: "Septembre 2021",
            languages: ["HTML/CSS",'ReactJS'],
            infos:
                "Portfolio de Boudjenane Rachid",
            img: "./img/projet/port.png",
            link: "www.boudjenanerachid.fr",
        },
        {
            id: 5,
            title: "Nitehop V1",
            date: "Septembre 2019",
            languages: ["Swift",'Firebase'],
            infos:
                "Application IOS pour le monde de la nuit.",
            img: "./img/projet/nite.png",
            link: "https://apps.apple.com/fr/app/nitehop/id1484707520",
        },
        {
            id: 6,
            title: "Blog VueJs",
            date: "Septembre 2021",
            languages: ["VueJs",'Firebase'],
            infos:
               "Projet perso, initation à la technologie VueJS",
            img: "./img/projet/blog.png",
            link: "https://github.com/Boudj31/BlogBdj",
        },
        {
            id: 7,
            title: "MovieAPP NuxtJS",
            date: "Septembre 2021",
            languages: ["VueJS", "NuxtJS"],
            infos:
                "Projet perso, initation à la technologie NuxtJS",
            img: "./img/projet/movieapp.png",
            link: "https://movie-nuxt.herokuapp.com/",
        },
        {
            id: 8,
            title: "EasyBank",
            date: "Novembre 2021",
            languages: ["VueJS"],
            infos:
                "Première idée de maquette",
            img: "./img/projet/easy.png",
            link: "https://easybank31.netlify.app/",
        },
        {
            id: 9,
            title: "Maquette Svp-visio",
            date: "Septembre 2021",
            languages: ["Adode XD",'Illustrator'],
            infos:
                "Première idée de maquette",
            img: "./img/projet/xdsvp.png",
            link: "https://xd.adobe.com/view/38f0fc14-3702-4cba-9abf-dceb9e3482fb-6da3/",
        },
        {
            id: 10,
            title: "Screencast modèle boite css",
            date: "Septembre 2019",
            languages: ["Première Pro",'After Effect', 'Audition'],
            infos:
                "tuto sur les modèles de boite en CSS",
            img: "./img/projet/css.png",
            link: "https://vimeo.com/642009568",
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
                    <h2 className="text-center"> Découvrer mes Réalisations</h2>
                </div>
                <div className="text-center">
                  <Project projets={projectsData}/>
                </div>
            </motion.div>
            <ScrollButtons right={"/skills"} left={"/"}/>
        </>
    );

}