import React from 'react'
import Mouse from "../components/Mouse";
import SkillsData from "../components/SkillsData";
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";
import ScrollButtons from "../components/ScrollButtons";


export default function Skills() {
  const skills = [
      {
          id: 1,
          img: "img/logo/html.png",
          title: "Html/CSS"
      },

      {
          id: 2,
          img: "img/logo/atom.png",
          title: "ReactJS"
      },
      {
          id: 3,
          img: "img/logo/vue.png",
          title: "VueJS"
      },
      {
          id: 4,
          img: "img/logo/symfony.png",
          title: "Symfony"
      },
      {
          id: 5,
          img: "img/logo/swift.png",
          title: "Swift"
      },
      {
          id: 6,
          img: "img/logo/wordpress.png",
          title: "Wordpress"
      },




  ];
    const design = [
        {
            id: 1,
            img: "img/logo/photoshop.png",
            title: "Photoshop"
        },

        {
            id: 2,
            img: "img/logo/illustrator.png",
            title: "Illustrator"
        },

        {
            id: 3,
            img: "img/logo/xd.png",
            title: "XD"
        },
        {
            id: 4,
            img: "img/logo/pr.png",
            title: "Première Pro"
        },
        {
            id: 5,
            img: "img/logo/ae.png",
            title: "After Effect"
        },


    ];
    const soft = [
        {
            id: 1,
            img: "img/logo/algorithme.png",
            title: "Algorithmie"
        },

        {
            id: 2,
            img: "img/logo/design-creatif.png",
            title: "Creatif"
        },

        {
            id: 3,
            img: "img/logo/probleme.png",
            title: "Curieux"
        },
        {
            id: 4,
            img: "img/logo/balise-seo.png",
            title: "Réferencement SEO"
        },
        {
            id: 5,
            img: "img/logo/github.png",
            title: "Github"
        },


    ];
    const variants = {
        initial: {
            opacity: 0.4,
            transition: { ease: [.03,.87,.73,.9], },
            x: 500,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { ease: [.03,.87,.73,.9], },
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
                className="container main-sk mt-3"
                 role="main">
                <div className="box-title">
                    <h2 className="text-center"> Mes compétences à votre service</h2>
                </div>
                <div className="row justify-content-between">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="col-lg-3 col-md-6 col-sm-7 skills-box justify-content-center">
                        <div className="box-name">
                            <h4 className="text-center p-2"> Dévelopemment</h4>
                        </div>
                        <SkillsData datas={skills} />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="col-lg-3 col-sm-6 col-7 skills-box justify-content-center">
                        <div className="box-name">
                            <h4 className="text-center p-2"> Design Web </h4>
                        </div>
                        <SkillsData datas={design} />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="col-lg-3 col-md-6 col-sm-7 skills-box justify-content-center">
                        <div className="box-name">
                            <h4 className="text-center p-2"> Autres compétences </h4>
                        </div>
                        <SkillsData datas={soft} />
                    </motion.div>
                </div>
                <ScrollButtons right={"/about"} left={"/projets"}/>
            </motion.div>
        </>
    );

}