import React, { Component } from 'react'

export default class SocialNetwork extends Component {
    render() {

        const anim = () => {
            let navlinks = document.querySelectorAll('.social-network a');
            navlinks.forEach(link => {
                link.addEventListener('mouseover', (e) => {
                    let attrX = e.offsetX - 20;
                    let attrY = e.offsetY - 13;

                    link.style.transform = `translate(${attrX}px, ${attrY}px`;
                })
                link.addEventListener('mouseleave', () => {
                    link.style.transform = '';
                })
            })
        }
        return (
            <div className="social-network">
                <ul>
                    <a href="http://www.facebook.com" target="_blank"
                       rel="noopener noreferre" className="hover" onMouseOver={anim}>
                        <li> <img src="img/logo/facebook.png" alt="face"/></li>
                    </a>
                    <a href="http://www.github.com" target="_blank"
                       rel="noopener noreferre" className="hover" onMouseOver={anim}>
                        <li> <img src="img/logo/github.png" alt="face"/></li>
                    </a>
                    <a href="http://www.linkdin.com" target="_blank"
                       rel="noopener noreferre" className="hover" onMouseOver={anim}>
                        <li><img src="img/logo/linkedin.png" alt="face"/></li>
                    </a>
                </ul>

            </div>
        )
    }
}
