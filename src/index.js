import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class Index extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="Index" data-testid="index">
       
      </div>
    );
  }
}
export default Index;