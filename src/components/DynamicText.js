import React  from "react";
import TextyAnim from "rc-texty";

const DynamicText = () => {

    const text = 'Réalisations';

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
                console.log(type);
            }}
        >
            {text}
        </TextyAnim>
    );
};

export default DynamicText;