import React from "react";
import myPhoto from '../assets/img/jana.png'

export const About = () => {
  return (
    <section className='about' id="about">
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 text-center">
          <img 
            src={myPhoto}
            alt="About Me" 
            className="img-fluid rounded" 
            style={{ maxWidth: "50%", height: "auto" }} 
          />
        </div>
        {/* Right Side: Text */}
        
        <div className="col-md-6 mt-3">
          <h2>About Me</h2>
          <p>
            Hello! I'm Janarthana Collins, a passionate developer and designer with
            a deep enthusiasm for crafting creative and innovative solutions to complex problems.
            My journey in the world of technology has been driven by a constant
            curiosity and a love for learning.
          </p>
          <p>
            Whether it's front-end development, creating visually appealing
            designs I aim to deliver exceptional results. In my free time,
            I enjoy exploring the latest tech trends, working on personal 
            projects, and sharing knowledge
            with others. Fueled by a passion for creative and innovative design, 
            I am always eager to push boundaries and create something unique.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

