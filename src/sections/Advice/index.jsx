import React from "react";
import ReactDOM from "react-dom";
import AdviceSection from "./components/AdviceSection";
import "./style.css";

function App() {
  return (
    <div className="main-layout">
      <AdviceSection />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
