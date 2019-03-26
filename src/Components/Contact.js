import React, { Component } from 'react';
import '../Styles/Contact.css';

class Contact extends Component {

    triggerAnimationOnScroll() {
        let scrollPosition = window.pageYOffset;
        let windowHeight = document.documentElement.clientHeight;
        let elementHeight = document.getElementById('contact-wrapper').offsetHeight;
        let element = document.getElementById('contact-wrapper').offsetTop;
        if (scrollPosition > element - windowHeight && scrollPosition < element) {
            document.getElementById('contact-wrapper').style.cssText = "animation: contact-animation 2s ease 0s 1 normal forwards;";
        }
        if (scrollPosition > element + elementHeight || scrollPosition < element - windowHeight) {
            document.getElementById('contact-wrapper').style.cssText = "animation: none";
        }
    }

    render() {
        window.addEventListener('scroll', this.triggerAnimationOnScroll);
        const { data } = this.props
        return (
            <section className="contact-section"  id="contact-section" >
            <div className="contact-wrapper" id="contact-wrapper" >
                <form className="sending-form" method="POST" action="https://formspree.io/rad.musial@gmail.com">
                    <h3 className="send-message" >{data.title}</h3>
                    <p className="my-email" >rad.musial@gmail.com</p>
                    <input className='email-input' type="email" name="email" placeholder={`${data.yourMail}`} required/>
                    <textarea className='message-input' name="message" placeholder={`${data.contactMe}`} required></textarea>
                    <button className='submit-button' type="submit">{data.button}</button>
                </form>
                </div>
            </section>
        )
    }
}

export default Contact;