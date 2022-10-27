import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container-wrapper">
        <div className="main-container">

          <div className="name-title">
            Hi, I'm <i> Kyle Carter.</i>

            <div className="image-container">
              <img
                className="personal-picture"
                alt="personal picture"
                src="./personal.jpg"
              />
            </div>

            <div className="text-container">
              <p className="about-desc">
                After starting to learn the front-end, I decided to begin a
                journey of fullstack development
              </p>
              <p className="about-desc-extra">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
