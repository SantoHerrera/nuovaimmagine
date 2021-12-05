import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
       
        return (
          <VerticalTimelineElement            
            className="vertical-timeline-element--work"
            date={work.years}                   
            iconStyle={{
              background: "#AE944F" ,
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-angle-right experience-icon"></i>}
            key={i}
            
          >
           

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
           
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline  layout='1-column-left'>
            {work}            
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
