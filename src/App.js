import React, { Component } from "react";
import Menu from "./Components/Menu";
import AboutSection from "./Components/AboutSection";
import { connect } from "react-redux";
import { changeLang } from "./store/actions";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./App.css";

class App extends Component {
  changeToPL() {
    this.props.changeLang("pl");
  }

  changeToEN() {
    this.props.changeLang("en");
  }
  render() {
    return (
      <div className="App">
        <Menu data={this.props.content.page.menu} />
        <AboutSection data={this.props.content.page.aboutMe} />
        <Technologies data={this.props.content.page.tech} />
        <Projects data={this.props.content.page.projects} />
        <Contact data={this.props.content.page.contact} />
        <div className="lang-wrapper">
          <p
            className={
              this.props.content.lang === "pl"
                ? "lang-button lang-button-active"
                : "lang-button"
            }
            onClick={() => {
              this.changeToPL();
            }}
          >
            PL
          </p>
          <p
            className={
              this.props.content.lang === "en"
                ? "lang-button lang-button-active"
                : "lang-button"
            }
            onClick={() => {
              this.changeToEN();
            }}
          >
            EN
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    content: state.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLang: language => dispatch(changeLang(language))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
