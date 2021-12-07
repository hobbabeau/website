import React from "react";
import about_photo from '../images/about_photo.png'
import coverphoto from '../images/coverphoto.png'


function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Hi I am Beau Hobba, and I am a mechatronics engineer. I moved to Sydney from rural Young, NSW in 2016. I currently still reside in Sydney, Australia and have recently finished with First Class Honours in Mechatronic Engineering. 

              <br></br>
              <br></br>
              I have a talent for leading teams and creating complex systems to match the project. My passions lie in automation, everday assistive robotics, AI, earth/space exploration, argiculture and in general ethical robotics.
              I am a firm believer that robotics are a central part of our futures and are fascinated by their ability to assist our everday lives. I wish to use my programming expertise to help develop technology which is yet to be discovered. 
              <br></br>
              <br></br>
              My hobbies include flying my drone, making video edits, playing/buying board games, making music (it isn't that good) and mountain biking. 

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
