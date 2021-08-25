import React from "react";
import {motion} from "framer-motion";

const AboutComponent = () => {
 
    return(

        <>
            {/*
            <main className="about">
                <div className="about-box">
                    <div className="box-name">
                        <h2>BOUDJENANE Rachid</h2>
                    </div>
                    <div className="row">
                       <div className="col-3 d-sm-block ">
                           <img src="img/rch.jpeg" alt="" width="150"  className="avatar"/>
                           <div className="row mt-4 mb-3">
                               <img src="img/logo/house.png" alt="logo maison" width="30" className="col-3"/>
                               <h5 className="col-6">Toulouse</h5>
                           </div>
                           <div className="row mb-3">
                               <img src="img/logo/birthday-cake.png" alt="logo maison" className="col-3"/>
                              <h5 className="col-6">09/07/1997</h5>
                           </div>
                           <div className="row mb-3">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-github" viewBox="0 0 16 16">
                                   <path
                                       d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                               </svg>
                               <h5 className="col-6">09/07/1997</h5>
                           </div>
                           <div className="row mb-3">
                               <img src="img/logo/car.png" alt="logo maison" className="col-3"/>
                              <h5 className="col-6">Permis</h5>
                           </div>
                       </div>
                       <div className="col-9">
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur deleniti deserunt dignissimos esse excepturi hic incidunt itaque labore, laborum, libero magnam magni nesciunt nisi perspiciatis recusandae saepe totam voluptatum.</p>
                       </div>
                    </div>
                </div>
            </main>
            */}

            <main className="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="col-lg-3 col-md-12 text-center">
                            <img src="img/rch.jpeg" alt="photo de moi" className="avatar" />
                        </motion.div>
                        <div className="col-lg-8 col-md-12">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="big-box mb-5">
                                <h3 className="text-center">Qui suis je ?</h3>
                                <p>Je m’appelle Rachid Boudjenane, développeur web fullstack et web designer Après plusieurs formation autour du Développement Web et mobile et plusieurs expériences professionnelles que je vous laisse consulter sur mon portfolio. <br/>

                                    Je suis maintenant à la recherche de nouvelles opportunités dans le Web avec les technologies Php, Symfony, Vue, React ou dans l’applicatif avec IOS et la technologie Swift. <br/>

                                    En parallèle, je continue à m’intéresser à d’autres technologies tels que Python, React Native.
                                    Ces brèves lignes pour vous dire que l’on métier me passionne ! <br/><br/>

                                    Intéressé par mon profil ? Envie d’échanger sur le métier ? Laissez moi un mail dans la rubrique contact.</p>
                            </motion.div>
                           <div className="row justify-content-between">
                               <motion.div
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   className="small-box col-lg-3 col-md-12">
                                   <h5 className="text-center">Réseaux</h5>
                                   <ul>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Linkedin
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Github
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height= "26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Facebook</li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height= "26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Facebook</li>
                                   </ul>
                               </motion.div>
                               <motion.div
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   className="small-box col-lg-3 col-md-12">
                                   <h5 className="text-center">Centre d'intérét</h5>
                                   <ul>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Jeux vidéos
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Films
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Série
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Série
                                       </li>
                                   </ul>
                               </motion.div>
                               <motion.div
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   className="small-box col-lg-3 col-md-12">
                                   <h5 className="text-center">Bonus</h5>
                                   <ul>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           Linkedin
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                               Github
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height= "26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                           <path
                                               d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                       </svg>
                                           Facebook</li>
                                   </ul>
                               </motion.div>
                           </div>
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default AboutComponent;