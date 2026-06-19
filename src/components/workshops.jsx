import React from "react";

export const Workshops = (props) => {
  return (
    <div id="workshops">
      <div className="container">
        <div className="section-title text-center">
          <h2>Workshops</h2>
          <p>Short, focused workshops to spark creativity.</p>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="workshop-text">
              <h3>Art Workshops</h3>
              <p>
                Our art workshops are hands-on sessions designed to introduce
                new techniques and inspire experimentation. Each workshop
                focuses on a single theme or medium so students leave with a
                finished piece and new skills.
              </p>
              <ul>
                <li>Illustration Lab — character design and storytelling</li>
                <li>Color Play — color theory through painting exercises</li>
                <li>Sculpt & Build — clay, cardboard, and found-materials</li>
                <li>Printmaking Basics — simple relief and mono-printing</li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="workshop-text">
              <h3>Music Workshops</h3>
              <p>
                Music workshops teach practical skills in a fun, supportive
                group setting — perfect for trying new instruments, rhythm
                games, and collaborative songwriting.
              </p>
              <ul>
                <li>Rhythm & Movement — beat, groove, and body percussion</li>
                <li>Intro to Composition — building melodies and chord progressions</li>
                <li>Band Jam — basic ensemble skills for beginner players</li>
                <li>Voice & Performance — confidence, phrasing, and expression</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="workshop-notes text-center">
              <p>
                Workshops run as single-session intensives or multi-day
                mini-courses. Contact us for ages, pricing, and registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
