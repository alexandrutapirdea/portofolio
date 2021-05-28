import * as React from "react";
import Home from "./Home";
import AboutMe from "../components/AboutMe";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={1}>
          <Home />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <AboutMe />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default IndexPage;
