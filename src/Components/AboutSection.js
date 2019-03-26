import React, { Component } from 'react';
import '../Styles/AboutSection.css';

class AboutSection extends Component {
    state = {
      more: false,
    }

  hanldeMoreButton() {
    let element = document.getElementById('basic-info-wrapper');
    this.state.more ? element.classList.add('basic-info-wrapper-less') : element.classList.add('basic-info-wrapper-more')
    this.state.more ? element.classList.remove('basic-info-wrapper-more') : element.classList.remove('basic-info-wrapper-less')
    this.setState({
      more: !this.state.more,
    })
  }

  triggerAnimationOnScroll() {
    let scrollPosition = window.pageYOffset;
    let windowHeight = document.documentElement.clientHeight;
    let elementHeight = document.getElementById('basic-info-wrapper').offsetHeight;
    let element = document.getElementById('basic-info-wrapper').offsetTop;
    if (scrollPosition > element - windowHeight && scrollPosition < element) {
      document.getElementById('header-about').style.cssText = "animation: header-transform 2s ease 0s 1 normal forwards;";
      document.getElementById('my-name').style.cssText = "animation: text-from-left-transform 2s ease 0s 1 normal forwards;";
      document.getElementById('text-from-right').style.cssText = "animation: text-from-right-transform 2s ease 0s 1 normal forwards;";
      document.getElementById('text-from-left').style.cssText = "animation: text-from-left-transform 2s ease 0s 1 normal forwards;";
      document.getElementById('more-button').style.cssText = "animation: more-button-transform 2s ease 0s 1 normal forwards;";
    }
    if (scrollPosition > element + elementHeight || scrollPosition < element - windowHeight) {
      document.getElementById('header-about').style.cssText = "animation: none";
      document.getElementById('my-name').style.cssText = "animation: none";
      document.getElementById('text-from-right').style.cssText = "animation: none";
      document.getElementById('text-from-left').style.cssText = "animation: none";
      document.getElementById('more-button').style.cssText = "animation: none";
      document.getElementById('basic-info-wrapper').classList.remove('basic-info-wrapper-more');
      this.setState({
        more: false,
      })
    }

    
}

  render() {
    window.onscroll = () => this.triggerAnimationOnScroll();
    document.body.onload = () => this.triggerAnimationOnScroll();
    const { data } = this.props
    return (
        <section className="about-section" id="about-section">
          <div className="basic-info-wrapper" id="basic-info-wrapper" >
            <p className="header-about" id="header-about" >{data.header}</p>
            <h1 className="my-name" id="my-name">{data.myName}</h1>
            <p className="text-from-right" id="text-from-right">{data.looking}</p>
            <p className="text-from-left" id="text-from-left">{data.wannaBe}</p>
            <button className="more-button" id="more-button" onClick={() => {this.hanldeMoreButton()}} >{this.state.more ? `${data.less}` : `${data.more}`}</button>
          {this.state.more ? <div className="more-wrapper" id="more-wrapper" >
            {data.moreInfo}
          </div> : null}
          </div>
        </section>
    );
  }
}

export default AboutSection;
