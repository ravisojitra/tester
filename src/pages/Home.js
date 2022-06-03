import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/latestevent">LatestEvent</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/latestnews">LatestNews</Link>
        </li>
        <li>
          <Link to="/newsdetail">NewsDetail</Link>
        </li>
        <li>
          <Link to="/eventdetails">EventDetails</Link>
        </li>
        <li>
          <Link to="/alumniinterviewdetails">AlumniInterviewDetails</Link>
        </li>
        <li>
          <Link to="/careerdetails">CareerDetails</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
