import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
// import $ from "jquery";
// import About from "./About";

class App extends Component {

  titles = [];

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
      checked: false,
      currentLang: "res_primaryLanguage.json"
    };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  switchLang = (lang) => {
    if (lang === "res_primaryLanguage.json") {
      return "res_secondaryLanguage.json"
    } else if (lang === "res_secondaryLanguage.json") {
      return "res_primaryLanguage.json"
    }
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);

  }

  onThemeSwitchChange(checked) {
    let newLang = this.switchLang(this.state.currentLang);
    


    this.setState({ currentLang: newLang, checked });
    this.setTheme();
    this.loadResumeFromPath(
      this.state.currentLang
      // window.$secondaryLanguageIconId
    );
   
  }

  applyPickedLanguage(pickedLanguage, /*oppositeLangIconId*/) {
    //"en" "primary-lang-icon"
    //this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  // swapCurrentlyActiveLanguage(oppositeLangIconId) {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // }

  componentDidMount() {

    this.loadSharedData();
    this.loadResumeFromPath(
      this.state.currentLang
      // window.$secondaryLanguageIconId
    );
    // console.log(this.state.haredData, "shared after")
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {

        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {

    if (this.state.sharedData.basic_info) {

      var name = this.state.sharedData.basic_info.name;
      //const titles = this.state.sharedData.basic_info.titles
      let path = this.state.currentLang
      this.titles = this.state.sharedData.basic_info.titles[path].map(x => [x.toUpperCase(), 1500]).flat();
    }
    // let titles = this.state.sharedData.basic_info.titles
    // this.state.sharedData.basic_info.titles
    // var name = this.props.sharedData.name;

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);


    return (
      <div>

        <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
          <div className="row aligner" style={{ height: '100%' }}>
            <div className="col-md-12">
              <div>
                <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                <br />
                <h1 className="mb-0">
                  <Typical steps={[name]} wrapper="p" />
                </h1>

                <div className="title-container">
                  <HeaderTitleTypeAnimation />
                </div>
                <Switch
                  checked={this.state.checked}
                  onChange={this.onThemeSwitchChange}
                  offColor="#baaa80"
                  onColor="#353535"
                  className="react-switch mx-auto"
                  width={90}
                  height={40}
                  uncheckedIcon={
                    <span
                      className="iconify"
                      data-icon="twemoji:owl"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "20px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  checkedIcon={
                    <span
                      className="iconify"
                      data-icon="noto-v1:sun-with-face"
                      data-inline="false"
                      style={{
                        display: "block",
                        height: "100%",
                        fontSize: 25,
                        textAlign: "end",
                        marginLeft: "10px",
                        color: "#353239",
                      }}
                    ></span>
                  }
                  id="icon-switch"
                />
              </div>
            </div>
          </div>
          <div>
            <About
              resumeBasicInfo={this.state.resumeData.basic_info}

            />


          </div>
        </header>

        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />


        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        {/* <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        /> */}

        {/* <Footer sharedBasicInfo={this.state.sharedData.basic_info} /> */}
      </div>
    );
  }
}

export default App;

//<Header sharedData={this.state.sharedData.basic_info} />


//buttons that switch languages
/* <div className="col-md-12 mx-auto text-center language">
  <div
    onClick={() =>
      this.applyPickedLanguage(
        window.$primaryLanguage,
        // window.$secondaryLanguageIconId
      )
    }
    style={{ display: "inline" }}
  >
    <span
      className="iconify language-icon mr-5"
      data-icon="twemoji-flag-for-flag-united-kingdom"
      data-inline="false"
      id={window.$primaryLanguageIconId}
    ></span>
  </div>
  <div
    onClick={() =>
      this.applyPickedLanguage(
        window.$secondaryLanguage,
        //window.$primaryLanguageIconId
      )
    }
    style={{ display: "inline" }}
  >
    <span
      className="iconify language-icon"
      data-icon="twemoji-flag-for-flag-poland"
      data-inline="false"
      id={window.$secondaryLanguageIconId}
    ></span>
  </div>
</div> */