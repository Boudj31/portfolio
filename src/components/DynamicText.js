import React, { useEffect } from "react";
import TextyAnim from "rc-texty";

const DynamicText = () => {

    const text = 'Réalisations';
    /*
        let array = ["Réalisations"];
    let wordIndex = 0;
    let letterIndex = 0;

    useEffect(() => {
        const target = document.getElementById("text-target");

        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 1000);
        };

        const loop = () => {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(() => {
                        loop();
                    }, 3000);
                }
            }, 200);
        };
        loop();
    }, []);
    */
    return (
        <TextyAnim
            type="mask-top"
            duration={(e) => {
                if (e.index === 2) {
                    return 1000;
                }
                return 2000;
            }}
            interval={(e) => {
                if (e.index === 2) {
                    return 1000;
                }
                return e.index * 100;
            }}
            onEnd={(type) => {
                // tslint:disable-next-line
                console.log(type);
            }}
        >
            {text}
        </TextyAnim>
    );
};

export default DynamicText;