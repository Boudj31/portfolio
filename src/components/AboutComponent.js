import React from "react";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

const AboutComponent = () => {
 
    return(

        <>
            <main className="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="col-lg-3 col-md-12 text-center">
                            <img src="img/rch.jpg" alt="photo de moi" className="avatar" />
                        </motion.div>
                        <div className="col-lg-8 col-md-12">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="big-box mb-5">
                                <h3 className="text-center">Qui suis je ?</h3>
                                <p>Je m’appelle Rachid Boudjenane, développeur web fullstack et web designer freelance, après plusieurs formations autour du Développement Web et mobile et plusieurs expériences professionnelles qui sont consultable sur mon portfolio et mon CV. <br/>
                                   Les <NavLink to="/legal"><span>Mentions légales</span></NavLink> sont consultables ici. <br/>

                                    Je suis maintenant à la recherche de nouvelles opportunités dans le Web design ou le Web avec les technologies <span>PHP</span>, <span>Symfony</span>, <span>VueJS</span>, <span>ReactJS</span> ou dans l’applicatif avec IOS et la technologie <span>Swift</span>. <br/>
                                    Idéalement dans une start-up ou une ESN ou bien en mission indépendante. <br/>
                                    Intéressé par mon profil ? Envie d’échanger sur le métier ? Laissez moi un message dans la rubrique <NavLink to="/contact">
                                        contact
                                    </NavLink>.</p>
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
                                                fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                               <path
                                                   d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                           </svg>
                                           <a href="https://www.linkedin.com/in/boudjenane/">Linkedin</a>

                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                           </svg>
                                           <a href="https://github.com/Boudj31">
                                               Github
                                           </a>
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                               <path
                                                   d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                           </svg>
                                           <a href="https://www.facebook.com/">
                                               Facebook
                                           </a>
                                           </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                               <path
                                                   d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                           </svg>
                                           <a href="">
                                               Twitter
                                           </a>
                                           </li>
                                   </ul>
                               </motion.div>
                               <motion.div
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   className="small-box col-lg-3 col-md-12">
                                   <h5 className="text-center">Passions</h5>
                                   <ul>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                                               <path
                                                   d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                               <path
                                                   d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                                           </svg>
                                           Jeux vidéos
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                                               <path
                                                   d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                                           </svg>
                                           Cinéma
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
                                               <path
                                                   d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                           </svg>
                                           Manga
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-briefcase-fill"
                                                viewBox="0 0 16 16">
                                               <path
                                                   d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                                               <path
                                                   d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                                           </svg>
                                           Voyages
                                       </li>
                                   </ul>
                               </motion.div>
                               <motion.div
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.9 }}
                                   className="small-box col-lg-3 col-md-12">
                                   <h5 className="text-center">Langues</h5>
                                   <ul>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                               <path
                                                   d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                                               <path
                                                   d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                                           </svg>
                                           Français
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                               <path
                                                   d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                                               <path
                                                   d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                                           </svg>
                                               Anglais
                                       </li>
                                       <li>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
                                               <path
                                                   d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                                               <path
                                                   d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                                           </svg>
                                            Espagnol</li>
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