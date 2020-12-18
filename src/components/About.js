import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Our Team",
    text:
      "Team desciption",
  });
  const [state] = React.useState([
    { id: 1, title: "Name :", text: "Duc Ho Minh" },
    { id: 2, title: "Name :", text: "Hoang" },
    { id: 3, title: "Name :", text: "Tuong" },
    { id: 4, title: "Name :", text: "Tri" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/Aventador.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                About info
              </div>
              <div className="about__info-p2">
                About info
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
