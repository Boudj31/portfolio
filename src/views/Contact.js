import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import ContactForm from '../components/ContactForm'
import SocialNetwork from "../components/SocialNetwork";
import Navtest from "../components/Navtest";


export default class Contact extends Component {
    render() {
        return (
            <main>
                <Mouse />
                <Navtest />
                <div className="contact">
                    <ContactForm />
                </div>
            </main>
        )
    }
}