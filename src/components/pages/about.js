import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Hello! My name is David Steward, I am a 31 year old navy veteran. I live in York, PA 
        and have a 7 year old daughter, 3 cats and a dog. I am originally from Texas and spent 
        6 and 1/2 years in the military before making my way to the northeast coast. I originally
        started college with the intention of going for a Bachelors in Business Administration. 
        After seeing an ad for Bottegga and the Coding foundations course, I was instanttly interested.
        I transitioned into this course in October while the late night classes are rough, the overall
        experience has been completely satifying.

      </div>
    </div>
  );
}