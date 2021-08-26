import React from 'react'
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import Project from "../components/Project";
import Navtest from "../components/Navtest";
import DynamicText from "../components/DynamicText";
import ScrollButtons from "../components/ScrollButtons";

export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Svp-Visio",
            date: "Avril 2021",
            languages: ["Wordpress"],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: "./img/projet/svp.png",
            link: "http://www.svp-visio.fr",
        },
        {
            id: 2,
            title: "Stock Manager",
            date: "Decembre 2020",
            languages: ["Symfony", "HTML/CSS", "Sass"],
            infos:
                "Progiciel de gestion de stock pour faciliter le traitement d'une association Naga44 qui récupere des ordinateurs pour leur adhérents.",
            img: "./img/projet/naga.png",
            link: "http://www.nagastock.com",
        },
        {
            id: 3,
            title: "Bourse aux déchets",
            date: "Avril 2020",
            languages: ["Vue", "HTML/CSS", "Symfony"],
            infos:
                "Site d'annonces ",
            img: "./img/projet/wasted.png",
            link: "http://www.nagastock.fr",
        },
        {
            id: 4,
            title: "Symfony Online",
            date: "Juillet 2020",
            languages: ["Symfony", "HTML/CSS", "Sass"],
            infos:
                "Lorem",
            img: "./img/projet/online.png",
            link: "http://www.google.com",
        },

        {
            id: 5,
            title: "Portfolio",
            date: "Septembre 2021",
            languages: ["HTML/CSS",'ReactJS'],
            infos:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",
            img: "./img/projet/port.png",
            link: "http://www.rachidboudjenane.fr",
        },
        {
            id: 5,
            title: "Nitehop V1",
            date: "Septembre 2019",
            languages: ["Swift",'Firebase'],
            infos:
                "Nitehop est l'application tout en un qui simplifie la vie à tous ceux et celles qui rêvent de passer des moments fun en soirée.",
            img: "./img/projet/nite.png",
            link: "http://www.nitehop.fr",
        },
    ];
    return (
        <>
            <Mouse />
            <Navtest />
            <div className="container-lg">
                <div className="row mb-3 justify-content-center">
                    <h2 className="text-center"> >Découvrez mes </h2>

                    <div className="dynamic-text text-center">
                        <DynamicText />
                    </div>
                </div>
                <Project projets={projectsData}/>
                {/*
                <div className="row">
                   <h2 className="text-center"> >Découvrez mes </h2>

                   <div className="dynamic-text">
                       <DynamicText />
                   </div>
                   <Project projets={projectsData}/>
                   </div>
                */}
            </div>
            <ScrollButtons right={"/skills"} left={"/"}/>
        </>
    );

}