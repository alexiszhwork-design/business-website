import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Programs } from "./components/programs";
import { Workshops } from "./components/workshops";
import { Schedule } from "./components/schedule";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [currentPage, setCurrentPage] = useState("features");

  const renderPage = () => {
    switch (currentPage) {
      case "features":
        return <Features data={landingPageData.Features} />;
      case "about":
        return <About data={landingPageData.About} />;
      case "services":
        return <Services data={landingPageData.Services} />;
      case "programs":
        return <Programs data={landingPageData.Programs} />;
      case "gallery":
        return <Gallery data={landingPageData.Gallery} />;
      case "testimonials":
        return <></>; // Testimonials not used by default
      case "team":
        return <Team data={landingPageData.Team} />;
      case "schedule":
        return <Schedule data={landingPageData.Schedule} />;
      case "contact":
        return <Contact data={landingPageData.Contact} />;
      default:
        return <Features data={landingPageData.Features} />;
    }
  };

  return (
    <div>
      <Navigation onNavigate={setCurrentPage} />
      {currentPage === "features" && (
        <Header data={landingPageData.Header} />
      )}
      {renderPage()}
    </div>
  );
};

export default App;
