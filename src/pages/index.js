import React from "react";
import Home from "./Home";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Contact />
    </>
  );
};

export default IndexPage;
