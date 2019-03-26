import React , { Component } from 'react';
import reactIcon from '../Images/react.png';
import materialIcon from '../Images/material.png';
import '../Styles/Technologies.css';


class Technologies extends Component {

    triggerAnimationOnScroll() {
        let scrollPosition = window.pageYOffset;
        let windowHeight = document.documentElement.clientHeight;
        let elementHeight = document.getElementById('tech-wrapper').offsetHeight;
        let element = document.getElementById('tech-wrapper').offsetTop;
        if (scrollPosition > element - windowHeight && scrollPosition < element) {
            for(let i = 0; i < 7; i++){
                let element = document.getElementById('icon' + i);
                element.classList.add('animate' + i);
            }
            let element = document.getElementById('tech-header');
            element.classList.add('header-animation')
        }

        if (scrollPosition > element + elementHeight || scrollPosition < element - windowHeight) {
            for(let i = 0; i < 7; i++){
                let element = document.getElementById('icon' + i);
                element.classList.remove('animate' + i);
            }
            let element = document.getElementById('tech-header');
            element.classList.remove('header-animation')
        }
    }

    render() {
        document.onscroll = () => this.triggerAnimationOnScroll()
        const { data } = this.props
        return (
            <section className="tech-section" id="tech-section">
                <div className="tech-wrapper" id='tech-wrapper' >
                <p className="tech-header" id="tech-header" >{data.header}</p>
                    <div className="icon-wrapper" id="icon0"><img className="icon" src={reactIcon} alt="react"/>ReactJS</div>
                    <div className="icon-wrapper" id="icon1"><img className="icon" src="https://img.icons8.com/color/96/000000/javascript.png" alt="JS"/>JavaScript</div>
                    <div className="icon-wrapper" id="icon2"><img className="icon" src="https://img.icons8.com/color/96/000000/html-5.png" alt="HTML5"/>HTML5</div>
                    <div className="icon-wrapper" id="icon3"><img className="icon" src="https://img.icons8.com/color/96/000000/css3.png" alt="CSS3"/>CSS3</div>
                    <div className="icon-wrapper" id="icon4"><img className="icon" src="https://img.icons8.com/color/96/000000/git.png" alt="GIT"/>GIT</div>
                    <div className="icon-wrapper" id="icon5"><img className="icon" src="https://img.icons8.com/color/96/000000/npm.png" alt="npm"/>npm</div>
                    <div className="icon-wrapper" id="icon6"><img className="icon" src={materialIcon} alt="material-ui"/>material-ui</div>
                </div>
            </section>
        )
    }
}

export default Technologies;