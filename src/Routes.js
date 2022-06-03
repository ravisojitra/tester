import React from "react";
import CareerDetails from "pages/CareerDetails";
import AlumniInterviewDetails from "pages/AlumniInterviewDetails";
import EventDetails from "pages/EventDetails";
import NewsDetail from "pages/NewsDetail";
import LatestNews from "pages/LatestNews";
import Contact from "pages/Contact";
import Career from "pages/Career";
import LatestEvent from "pages/LatestEvent";
import AboutUs from "pages/AboutUs";
import Homepage from "pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/latestevent" element={<LatestEvent />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/latestnews" element={<LatestNews />} />
        <Route path="/newsdetail" element={<NewsDetail />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route
          path="/alumniinterviewdetails"
          element={<AlumniInterviewDetails />}
        />
        <Route path="/careerdetails" element={<CareerDetails />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
