import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
      showbefore: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    )
  }

  tick() {
    this.setState({showbefore: !this.state.showbefore})
    
  }


  render() {
    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;


      let picsToUse = this.state.showbefore ? 0 : 1;
      var projects = this.props.pics.map(function (projects) {
      //var projects = this.props.pics.map(function (projects) {
      //var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto">
                <div>
                  <img
                    src={projects[picsToUse]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;

/* <h2>Automatic Slideshow</h2>
<p>Change image every 2 seconds:</p>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
 */

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

//year
// {/* <span className="project-date">{projects.startDate}</span> */}


// let detailsModalShow = (data) => {
    //   this.setState({ detailsModalShow: true, deps: data });
    // };

//  original
//    class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deps: {},
//       detailsModalShow: false,
//     };
//   }

//   render() {
//     let detailsModalClose = () => this.setState({ detailsModalShow: false });
//     if (this.props.resumeProjects && this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.projects;
//       var projects = this.props.resumeProjects.map(function (projects) {
//         return (
//           <div
//             className="col-sm-12 col-md-6 col-lg-4"
//             key={projects.title}
//             style={{ cursor: "pointer" }}
//           >
//             <span className="portfolio-item d-block">
//               <div className="foto">
//                 <div>
//                   <img
//                     src={projects.images[0]}
//                     alt="projectImages"
//                     height="230"
//                     style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
//                   />
                  
//                   <br />
//                   <p className="project-title-settings mt-3">
//                     {projects.title}
//                   </p>
//                 </div>
//               </div>
//             </span>
//           </div>
//         );
//       });
//     }

//     return (
//       <section id="portfolio">
//         <div className="col-md-12">
//           <h1 className="section-title" style={{ color: "black" }}>
//             <span>{sectionName}</span>
//           </h1>
//           <div className="col-md-12 mx-auto">
//             <div className="row mx-auto">{projects}</div>
//           </div>
//           <ProjectDetailsModal
//             show={this.state.detailsModalShow}
//             onHide={detailsModalClose}
//             data={this.state.deps}
//           />
//         </div>
//       </section>
//     );
//   }
// }