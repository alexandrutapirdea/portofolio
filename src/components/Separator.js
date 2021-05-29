import * as React from "react";
import "./Separator.scss";

const Separator = ({ section }) => {
  return (
    <div className="separator__container" id={section}>
      <h2 className="separator__title">{section}</h2>
    </div>
  );
};

export default Separator;
