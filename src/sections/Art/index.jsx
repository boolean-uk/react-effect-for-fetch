import React from "react";
import ReactDOM from "react-dom";
import ArtsSection from "./components/ArtsSection";
import "./style.css";

function App() {
  return (
    <div>
      <ArtsSection />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
