import React from 'react'
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SkillsData from "../components/SkillsData";
import Navtest from "../components/Navtest";


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

    return (
        <>

            <Mouse />
            <Navtest />
            <div className=" container main-sk mt-3">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-10 skills-box justify-content-center">
                        <div className="box-name">
                            <h4 className="text-center p-2">Developement()</h4>
                        </div>
                        <SkillsData datas={skills} />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-10 skills-box justify-content-center">
                        <div className="box-name">
                            <h4 className="text-center p-2">Design</h4>
                        </div>
                        <SkillsData datas={design} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-10 skills-box justify-content-center">
                        <div className="box-name">
                            <h4 className="text-center p-2">Softs Skills</h4>
                        </div>
                        <SkillsData datas={soft} />
                    </div>
                </div>
            </div>
        </>
    );

}