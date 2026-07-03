import React, { useState } from "react";

export const Navigation = (props) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleClick = (e, page) => {
    e.preventDefault();
    setServicesOpen(false);
    setAboutOpen(false);
    setGalleryOpen(false);
    if (props.onNavigate) {
      props.onNavigate(page);
    }
  };

  const handleServicesMouseEnter = () => {
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesOpen(false);
  };

  const handleAboutMouseEnter = () => {
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setAboutOpen(false);
  };

  const handleGalleryMouseEnter = () => {
    setGalleryOpen(true);
  };

  const handleGalleryMouseLeave = () => {
    setGalleryOpen(false);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Dreams Blossom Color & Chord
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={(e) => handleClick(e, "features")}>
                Home
              </a>
            </li>
            <li
              className={`dropdown ${aboutOpen ? "open" : ""}`}
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <a href="#about" className="page-scroll dropdown-toggle">
                About <span className="caret"></span>
              </a>
              {aboutOpen && (
                <ul className="dropdown-menu" style={{ display: "block" }}>
                  <li>
                    <a href="#about" onClick={(e) => handleClick(e, "about")}>
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#team" onClick={(e) => handleClick(e, "team")}>
                      Our Team
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`dropdown ${servicesOpen ? "open" : ""}`}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <a
                href="#services"
                className="page-scroll dropdown-toggle"
              >
                Services <span className="caret"></span>
              </a>
              {servicesOpen && (
                <ul className="dropdown-menu" style={{ display: "block" }}>
                  <li>
                    <a href="#programs" onClick={(e) => handleClick(e, "programs")}>
                      Program (Art & Music)
                    </a>
                  </li>
                  <li>
                    <a href="#workshops" onClick={(e) => handleClick(e, "workshops")}>
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a href="#schedule" onClick={(e) => handleClick(e, "schedule")}>
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={(e) => handleClick(e, "services")}>
                      Parties and Camps
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={(e) => handleClick(e, "services")}>
                      Private Lessons
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`dropdown ${galleryOpen ? "open" : ""}`}
              onMouseEnter={handleGalleryMouseEnter}
              onMouseLeave={handleGalleryMouseLeave}
            >
              <a href="#portfolio" className="page-scroll dropdown-toggle">
                Gallery <span className="caret"></span>
              </a>
              {galleryOpen && (
                <ul className="dropdown-menu" style={{ display: "block" }}>
                  <li>
                    <a href="#portfolio" onClick={(e) => handleClick(e, "gallery")}>
                      Student Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" onClick={(e) => handleClick(e, "gallery")}>
                      Event Highlight
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll" onClick={(e) => handleClick(e, "testimonials")}>
                Testimonials
              </a>
            </li> */}
            
            <li>
              <a href="#contact" className="page-scroll" onClick={(e) => handleClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
