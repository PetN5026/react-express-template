import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/button";
const Index = () => {
  return (
    <div>
      WELCOME TO REACT APP!
      <Button type={"text"} />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById("app"));
