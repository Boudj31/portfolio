import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import Navtest from "../components/Navtest";
import {motion} from "framer-motion";

export default class Legal extends Component {
    render() {
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
            <main>
                <Mouse />
                <motion.div
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="legal"
                    role="main">
                    <Navtest />
                    <motion.div className="container-fluid">
                                <motion.div
                                    className="big-box mb-3">
                                    <h2 className="text-center">Mentions légales</h2>

                                    <h3>1 - Édition du site</h3>
                                    <p>En vertu de <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000801164#LEGIARTI000042038977" target="_blank" rel="noreferrer noopener">l'article 6 de la loi n° 2004-575 du 21 juin 2004</a> pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://www.rboudjenanet-dev.dawan.ovh">https://www.rboudjenanet-dev.dawan.ovh</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
                                    <p><strong>Propriétaire du site : </strong>BOUDJENANE Rachid - Contact : rachid.developer31@gmail.com  0787041726 - Adresse : 5 Rue Jacqueline Auriol.</p>
                                    <p><strong>Identification de l'entreprise :</strong>  BOUDJENANE Rachid au capital social de € - SIREN :  - RCS ou RM :  - Adresse postale : 5 Rue Jacqueline Auriol. </p>
                                    <p><strong>Directeur de la publication : </strong>BOUDJENANE Rachid - Contact : rachid.developer31@gmail.com.</p>
                                    <p><strong>Hébergeur :</strong> OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 - Téléphone : 1007    </p>
                                    <p><strong>Délégué à la protection des données : </strong>BOUDJENANE Rachid - rachid.developer31@gmail.com</p>
                                    <p><strong>Autres contributeurs :</strong> Plusieurs images téléchargées sur Smashicons, Srip, BootstrapIcons, Freepix, Flaticons<br/><strong>Crédits:</strong> Symfony, ReactJS, VueJS, PhP, Swift, Wordpress</p>
                                    <h3>2 - Limitations de responsabilité.</h3>
                                    <p><strong>BOUDJENANE Rachid</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <a href="https://www.rboudjenanet-dev.dawan.ovh">https://www.rboudjenanet-dev.dawan.ovh</a>.</p>
                                    <p><strong>BOUDJENANE Rachid</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <a href="https://www.rboudjenanet-dev.dawan.ovh">https://www.rboudjenanet-dev.dawan.ovh</a>. </p>
                                    <p><strong>BOUDJENANE Rachid</strong> s’engage à sécuriser au mieux le site <a href="https://www.rboudjenanet-dev.dawan.ovh">https://www.rboudjenanet-dev.dawan.ovh</a>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p>
                                    <p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. <strong>BOUDJENANE Rachid</strong> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. </p>
                                    <p>Le cas échéant, <strong>BOUDJENANE Rachid</strong> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
                                </motion.div>
                            </motion.div>
                </motion.div>
            </main>
        )
    }
}