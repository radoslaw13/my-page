import React, { Component } from "react";
import proj1 from "../Images/project1.PNG";
import proj2 from "../Images/project2.PNG";
import "../Styles/Project.css";

const projects = [
  {
    demo: "https://radoslaw13.github.io/osp-page-project/",
    git: "https://github.com/radoslaw13/osp-page-project",
    photo: proj1,
    technologies: [
      "ReactJS",
      "React-Redux",
      "React-Router",
      "Material-UI",
      "Parse Server",
      "npm packages"
    ],
    technologiesMobile:
      "ReactJS/React-Redux/React-Router/Material-UI/Parse Server/npmpackages"
  },
  {
    demo: "https://radoslaw13.github.io/weather-page/",
    git: "https://github.com/radoslaw13/weather-page",
    photo: proj2,
    technologies: ["ReactJS", "AccuWeather API"],
    technologiesMobile: "ReactJS/AccuWeather API"
  }
];

class Projects extends Component {
  state = {
    currentProject: 0
  };

  triggerAnimationOnScroll() {
    let scrollPosition = window.pageYOffset;
    let windowHeight = document.documentElement.clientHeight;
    let elementHeight = document.getElementById("proj-wrapper").offsetHeight;
    let element = document.getElementById("proj-wrapper").offsetTop;
    if (scrollPosition > element - windowHeight && scrollPosition < element) {
      document.getElementById("proj-wrapper").style.cssText =
        "animation: project-animation 2s ease 0s 1 normal forwards;";
    }
    if (
      scrollPosition > element + elementHeight ||
      scrollPosition < element - windowHeight
    ) {
      document.getElementById("proj-wrapper").style.cssText = "animation: none";
    }
  }

  nextProject() {
    document.getElementById("project").style.cssText =
      "animation: go-away-right 0.8s ease 0s 1 normal forwards;";
    setTimeout(() => {
      this.setState(
        {
          currentProject: this.state.currentProject + 1
        },
        () => {
          document.getElementById("project").style.cssText =
            "animation: go-from-left 0.8s ease 0s 1 normal forwards;";
        }
      );
    }, 500);
  }

  prevProject() {
    document.getElementById("project").style.cssText =
      "animation: go-away-left 0.8s ease 0s 1 normal forwards;";
    setTimeout(() => {
      this.setState(
        {
          currentProject: this.state.currentProject - 1
        },
        () => {
          document.getElementById("project").style.cssText =
            "animation: go-from-right 0.8s ease 0s 1 normal forwards;";
        }
      );
    }, 500);
  }

  render() {
    window.addEventListener("scroll", this.triggerAnimationOnScroll);
    const data = this.props.data[this.state.currentProject];
    const { currentProject } = this.state;
    return (
      <section className="proj-section" id="proj-section">
        <div className="proj-wrapper" id="proj-wrapper">
          <div className="project" id="project">
            <h2 className="title">{data.title}</h2>
            <p className="subtitle">{data.subtitle}</p>
            <div className="image-and-tech-wrapper">
              <div
                className="image-wrapper"
                style={{
                  backgroundImage: `url(${projects[currentProject].photo})`
                }}
              >
                <div className="hover-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projects[currentProject].demo}
                    className="live-demo"
                  >
                    LIVE DEMO
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projects[currentProject].git}
                    className="repo"
                  >
                    REPOSITORY
                  </a>
                </div>
              </div>
              <div className="project-label-tech">
                <ul className="tech-list">
                  {projects[currentProject].technologies.map(tech => {
                    return <li key={tech}>{tech}</li>;
                  })}
                </ul>
                <span className="project-label-tech-mobile">
                  {projects[currentProject].technologiesMobile}
                </span>
              </div>
            </div>
            <div className="project-label">{data.label}</div>
          </div>
          {currentProject !== projects.length - 1 ? (
            <div className="right-arrow-wrapper">
              <div
                onClick={() => {
                  this.nextProject();
                }}
                className="right-arrow"
              />
            </div>
          ) : null}
          {currentProject !== 0 ? (
            <div className="left-arrow-wrapper">
              <div
                onClick={() => {
                  this.prevProject();
                }}
                className="left-arrow"
              />
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}

export default Projects;
