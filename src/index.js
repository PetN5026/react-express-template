import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/button";
const Index = () => {
  return (
    <div>
      <p className="text-3xl font-bold underline text-red-500">
        {" "}
        WELCOME TO REACT APP!
      </p>

      <Button type={"text"} />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById("app"));
