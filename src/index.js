import React from "react";
import ReactDOM from "react-dom";

var time = new Date();

var message = "";
var msgStyle = {
  color: "blue"
};

if (time.getHours() < 12) {
  message = "Good Morning";
  msgStyle.color = "pink";
} else if (time.getHours() < 15) {
  message = "Good Afternoon";
  msgStyle.color = "teal";
} else {
  message = "Good Evening";
}

ReactDOM.render(
  <div>
    <h1>React Js Challenge</h1>
    <h2 className="heading" style={msgStyle}>
      {message}
    </h2>
  </div>,
  document.getElementById("root")
);
