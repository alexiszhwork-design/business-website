import React from "react";

export const Programs = (props) => {
  // Use provided data if available, otherwise a small default list
  const data =
    props.data && props.data.length
      ? props.data
      : [
          {
            title: "Drawing & Painting",
            desc: "Creative visual arts classes for beginners and intermediate students.",
          },
          {
            title: "Early Music",
            desc: "Singing, rhythm and movement for ages 3–6.",
          },
          {
            title: "Instrument Lessons",
            desc: "Private and group lessons: piano, guitar, violin, ukulele.",
          },
          {
            title: "Songwriting & Ensemble",
            desc: "Composition, collaboration, and small-group performance.",
          },
        ];

  const posterFiles = [
    "img/poster.png",
    "img/poster1.avif",
    "img/poster2.avif",
    "img/poster3.avif",
  ];

  return (
    <div id="programs">
      <div className="container">
        <div className="section-title text-center">
          <h2>Programs</h2>
          <p>Explore our art and music offerings — classes, workshops, and private lessons.</p>
        </div>

        <div className="row programs-grid">
          {data.map((p, i) => (
            <div key={`${p.title}-${i}`} className="col-xs-12 col-sm-6 col-md-3">
              <div className="program-card">
                <div className="program-media">
                  <img src={posterFiles[i % posterFiles.length]} alt={p.title} className="img-responsive program-poster" />
                </div>
                  <div className="program-body">
                    <h4>{p.title}</h4>
                    <p>{p.desc || p.text}</p>
                    <div className="program-actions">
                      <button onClick={() => props.onSelectProgram && props.onSelectProgram(p)} className="btn btn-sm btn-custom">Register Now</button>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
