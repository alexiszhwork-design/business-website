import React from "react";

export const Programs = (props) => {
  return (
    <div id="programs">
      <div className="container">
        <div className="section-title text-center">
          <h2>Programs</h2>
          <p>Explore our art and music programs for young learners.</p>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="program-text">
              <h3>Art Programs</h3>
              <p>
                We offer a variety of art classes that encourage creativity
                through drawing, painting, and mixed media. Students learn
                fundamentals of color, composition, and storytelling while
                exploring different materials and techniques.
              </p>
              <ul>
                <li>Drawing & Sketching: observational drawing fundamentals</li>
                <li>Painting: acrylics, watercolors, and tempera</li>
                <li>Mixed-Media Workshops: collage, printmaking, and sculpture</li>
                <li>Portfolio Prep: advanced classes for young artists</li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="program-text">
              <h3>Music Programs</h3>
              <p>
                Our music curriculum blends theory, ear training, and
                performance. Children learn voice, rhythm, and instrumental
                skills in a supportive ensemble environment.
              </p>
              <ul>
                <li>Early Music: rhythm games and singing for ages 3–6</li>
                <li>Instrument Lessons: piano, guitar, violin, and ukulele</li>
                <li>Songwriting & Composition: melody, harmony, and structure</li>
                <li>Ensemble & Performance: small group rehearsals and showcases</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="program-artwork text-center">
              <img src="img/programs-art.jpg" className="img-responsive" alt="program art" />
              <p className="caption">Where brushstrokes meet melodies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
