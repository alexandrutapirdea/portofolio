import * as React from "react";
import { Button } from "reactstrap";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const redirectTo = (url) => {
  window.open(url, "_blank");
};

const Header = () => {
  return (
    <div className="header__container">
      <Button>
        Get in touch <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </Button>
      <Button
        onClick={() => {
          redirectTo("https://alexandru-tapirdea.medium.com/");
        }}
      >
        Blog{" "}
        <FontAwesomeIcon icon={faBook} className="header__icon" size="lg" />
      </Button>
    </div>
  );
};

export default Header;
