import React from "react";

export const ProgramDetail = ({ data, onNavigate }) => {
  if (!data) {
    return (
      <div className="container">
        <div className="section-title">
          <h2>Program</h2>
        </div>
        <p>Program not found.</p>
      </div>
    );
  }

  const img = data.image || "img/poster.png";

  return (
    <div id="program-detail">
      <div className="container">
        <div className="section-title text-center">
          <h2>{data.title}</h2>
          <p>{data.subtitle || "Learn more and register for this program."}</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={img} alt={data.title} className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h3>About this program</h3>
            <p>{data.desc || data.text || "Details coming soon."}</p>

            <div style={{ marginTop: 18 }}>
              <button className="btn btn-custom" onClick={() => onNavigate && onNavigate("contact")}>
                Register Now
              </button>
              <button style={{ marginLeft: 8 }} className="btn btn-default" onClick={() => onNavigate && onNavigate("programs")}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
