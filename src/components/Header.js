import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import $ from "jquery";
import About from "./About";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = {
      checked: false,
      resumeData: {},
      currentLang: "res_primaryLanguage.json"
    };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  // applyPickedLanguage(pickedLanguage) {
  //   // this.swapCurrentlyActiveLanguage(oppositeLangIconId);
  //   //document.documentElement.lang = pickedLanguage;
  //   // var resumePath =
  //   //   document.documentElement.lang === window.$primaryLanguage
  //   //     ? `res_primaryLanguage.json`
  //   //     : `res_secondaryLanguage.json`;    
  //   this.loadResumeFromPath(this.state.currentLang);
  // }

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

  switchLang = (lang) => {

    if (lang === "res_primaryLanguage.json") {
      return "res_secondaryLanguage.json"

    } else if (lang === "res_secondaryLanguage.json") {
      return "res_primaryLanguage.json"
    }

  }


  loadResumeFromPath(path) {
    // console.log(path)
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        console.log(this.state.resumeData)
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  onThemeSwitchChange(checked) {

    let newLang = this.switchLang(this.state.currentLang);
    console.log("in heresadfdsd");

    this.setState({ currentLang: newLang, checked });
    this.setTheme();

    this.loadResumeFromPath(
      this.state.currentLang
      // window.$secondaryLanguageIconId
    );
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);

  }

  render() {
    if (this.props.sharedData) {
      //var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles//.map(x => [x.toUpperCase(), 1500])//.flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="fa:cut" data-inline="false"></span>
              <br />


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

              <div><p> Eng | Spa</p></div>

            </div>
          </div>
        </div>
      </header>



    );
  }
}

export default Header;
