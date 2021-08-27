import React from 'react'
import Mouse from "../components/Mouse";
import Project from "../components/Project";
import Navtest from "../components/Navtest";
import ScrollButtons from "../components/ScrollButtons";

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
    ];
    return (
        <>
            <Mouse />
            <Navtest />
            <div className="container-lg" role="main">
                <div className="row mb-3 justify-content-center align-baseline box-title">
                    <h2 className="text-center"> Découvrez mes Réalisations</h2>
                </div>
                <div className="text-center">
                  <Project projets={projectsData}/>
                </div>
            </div>
            <ScrollButtons right={"/skills"} left={"/"}/>
        </>
    );

}