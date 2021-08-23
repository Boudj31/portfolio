import React, { Component } from 'react'
import Mouse from '../components/Mouse'
import Navigation from '../components/Navigation'
import Navtest from "../components/Navtest";

export default class NotFound extends Component {
    render() {
        return (
            <main>
                <Mouse />
                <div className="notfound">
                    <Navtest />
                    <h1 className="text-center mt-4 ">Erreur 404:</h1>
                    <h2 className="text-center"> La page n'existe pas.</h2>
                </div>
            </main>
        )
    }
}