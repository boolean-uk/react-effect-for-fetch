import React from "react";
import ReactDOM from "react-dom";

import UsersSection from "./components/UsersSection";
import "./style.css";

function App() {
  return (
    <div className="main-layout">
      <UsersSection />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
