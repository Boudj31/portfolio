import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import ContactForm from '../components/ContactForm'
import Navtest from "../components/Navtest";
import ScrollButtons from "../components/ScrollButtons";
import {motion} from "framer-motion";


export default class Contact extends Component {
    render() {
        return (
            <>
            <main>
                <Mouse />
                <Navtest />
                <div
                    className="contact">
                    <ContactForm />
                </div>
            </main>
                <ScrollButtons left={"/about"} />
            </>
        )
    }
}