import React, { useState } from "react";

export const Navigation = (props) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClick = (e, page) => {
    e.preventDefault();
    setServicesOpen(false);
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
            React Landing Page
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
            <li>
              <a href="#about" className="page-scroll" onClick={(e) => handleClick(e, "about")}>
                About
              </a>
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
                  <li>
                    <a href="#services" onClick={(e) => handleClick(e, "services")}>
                      Parties & Events
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={(e) => handleClick(e, "gallery")}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={(e) => handleClick(e, "testimonials")}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={(e) => handleClick(e, "team")}>
                Team
              </a>
            </li>
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
