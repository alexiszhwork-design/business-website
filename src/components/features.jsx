import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Special events</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => {
                const posterFiles = [
                  "img/poster.png",
                  "img/poster1.avif",
                  "img/poster2.avif",
                  "img/poster3.avif",
                ];
                const imgSrc = posterFiles[i % posterFiles.length];
                return (
                  <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    <img src={imgSrc} alt={d.title} className="img-responsive feature-poster" />
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
