import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../store/actions';
import '../Styles/Menu.css';

class Menu extends Component {
    state = {
        open: false,
    }

    componentDidUpdate() {
        this.scrollSpy();
    }

    scroolTo(sectionName) {
        let element = document.getElementById(sectionName);
        element.scrollIntoView({behavior: "smooth"})
    }
    
    scrollSpy() {
        let scrollPosition = window.pageYOffset;
        let windowHeight = 3 * document.documentElement.clientHeight;
        console.log(scrollPosition)
        if ( scrollPosition <= windowHeight/4 ) {
            document.getElementById('underline1').classList.add('menu-item-active');
            document.getElementById('underline2').classList.remove('menu-item-active');
            document.getElementById('mobile-menu-button').innerHTML = this.props.data.about;
        } else if (scrollPosition > windowHeight/4 && scrollPosition <= 2 * windowHeight/4) {
            document.getElementById('underline1').classList.remove('menu-item-active');
            document.getElementById('underline2').classList.add('menu-item-active');
            document.getElementById('underline3').classList.remove('menu-item-active');
            document.getElementById('mobile-menu-button').innerHTML = this.props.data.tech;
        } else if (scrollPosition > 2*windowHeight/4 && scrollPosition <= 3*windowHeight/4) {
            document.getElementById('underline2').classList.remove('menu-item-active');
            document.getElementById('underline3').classList.add('menu-item-active');
            document.getElementById('underline4').classList.remove('menu-item-active');
            document.getElementById('mobile-menu-button').innerHTML = this.props.data.proj;
        } else if (scrollPosition > 3*windowHeight/4 && scrollPosition <= windowHeight) {
            document.getElementById('underline4').classList.add('menu-item-active');
            document.getElementById('underline3').classList.remove('menu-item-active');
            document.getElementById('mobile-menu-button').innerHTML = this.props.data.contact;
        }
    }

    handleOpen() {
        this.setState({
            open: true,
        })
        document.getElementById('mobile-menu-button').style.cssText = "display: none";       
    }

    handleClose = (section) => {
        if (section) {
            this.scroolTo(section);
        }
        this.setState({
            open: false,
        })
        document.getElementById('mobile-menu-button').style.cssText = "display: block";
    }

    changeToPL() {
        this.props.changeLang('pl')
    }

    changeToEN() {
        this.props.changeLang('en')
    }

    render() {
        window.addEventListener('scroll', this.scrollSpy.bind(this))
        window.addEventListener('load', this.scrollSpy.bind(this))
        const {data} = this.props
        return (
            <div className="menu" >
                {!this.state.open ? <div className="menu-wrapper" id="menu-wrapper">
                    <div className="menu-item" id="about-button" onClick={() => {this.scroolTo('about-section')}}>
                        {data.about}
                        <div className="menu-no-underline" id='underline1'></div>
                    </div>
                    <div className="menu-item" id="tech-button" onClick={() => {this.scroolTo('tech-section')}}>
                        {data.tech}
                        <div className="menu-no-underline" id='underline2'></div>
                    </div>
                    <div className="menu-item" id="proj-button" onClick={() => {this.scroolTo('proj-section')}}>
                        {data.proj}
                        <div className="menu-no-underline" id='underline3'></div>
                    </div>
                    <div className="menu-item" id="contact-button" onClick={() => {this.scroolTo('contact-section')}}>
                        {data.contact}
                        <div className="menu-no-underline" id='underline4'></div>
                    </div>
                </div> : null}
                <div className="menu-mobile" >
                    <div className="mobile-menu-item" id="mobile-menu-button" onClick={() => this.handleOpen()}>
                    </div>
                    {this.state.open ? <div className="popover-menu" >
                    <div className="mobile-menu-item" id="about-button" onClick={() => {this.handleClose('about-section')}}>
                        {data.about}
                        <div className="menu-no-underline" id='underline1'></div>
                    </div>
                    <div className="mobile-menu-item" id="tech-button" onClick={() => {this.handleClose('tech-section')}}>
                        {data.tech}
                        <div className="menu-no-underline" id='underline2'></div>
                    </div>
                    <div className="mobile-menu-item" id="proj-button" onClick={() => {this.handleClose('proj-section')}}>
                        {data.proj}
                        <div className="menu-no-underline" id='underline3'></div>
                    </div>
                    <div className="mobile-menu-item" id="contact-button" onClick={() => {this.handleClose('contact-section')}}>
                        {data.contact}
                        <div className="menu-no-underline" id='underline4'></div>
                    </div>
                    <p className={this.props.content.lang === 'pl' ? "lang-button lang-button-active" : "lang-button"} onClick={() => {this.changeToPL()}}>PL</p>
                    <p className={this.props.content.lang === 'en' ? "lang-button lang-button-active" : "lang-button"} onClick={() => {this.changeToEN()}}>EN</p>
                    </div> : null }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        content: state.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLang: (language) => dispatch(changeLang(language))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);