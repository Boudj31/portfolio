import React from "react";
import { useState } from "react";

const ContactForm = () => {


    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(email.match(regex)) {
            mail.style.display = 'none';
            return true;
        }else {
            mail.style.display = "block";
            mail.style.animation = "dongle 1s";
            setTimeout(() => {
                mail.style.animation = "none";
            }, 1000)
            return false;
        }
    };

    const errorMess = (message) => {
        let formMess = document.querySelector('.form-message');
        formMess.innerHTML = message ;
        formMess.style.opacity = '1';
        formMess.style.background = 'red';

        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    };

    const successMess = () => {
        let formMess = document.querySelector('.form-message');
        formMess.innerHTML = 'Votre message à bien été envoyé !';
        formMess.style.opacity = '1';
        formMess.style.background = '#0E4478';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout( () => {
            formMess.style.opacity = '0'
        }, 5000)

    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && isEmail() && message) {
            sendFeedback("template_f4xdy1i", {
                name,
                company,
                phone,
                email,
                message,
            });
        }else {
            errorMess('Merci de remplir correctement les champs requis *');
        }

    };

    const sendFeedback = (templateId, variables) => {

        window.emailjs
            .send("service_v3wwt1l", templateId, variables)
            .then((res) => {
                successMess();
                setName("");
                setCompany("");
                setPhone("");
                setEmail("");
                setMessage("");
            })
            .catch(
                (err) =>
                    document.querySelector('.form-message').innerHTML =
                        "Une erreur s'est produite, veuillez réessayer.")
    };

    return (
        <form className="contact-form">
            <h2>Contactez-moi</h2>
            <form className="form-content">
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nom *"
                    value={name}
                    autoComplete="off"
                    aria-required="true"
                />
                <input
                    type="text"
                    id="company"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="société"
                    value={company}

                />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="téléphone"
                    value={phone}
                />
                <div className="email-content">
                    <label id="not-mail">Email non valide</label>
                    <input
                        type="mail"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email *"
                        value={email}
                        aria-required="true"
                        autoComplete="off"
                    />
                </div>
                <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message *"
                    aria-required="true"
                    value={message}
                />
            </form>

            <input
                className="button"
                type="button"
                value="Envoyer"
                onClick={handleSubmit}
            />

            <div className="form-message"></div>
        </form>
    );
};

export default ContactForm;