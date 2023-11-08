import SecAdvice from "./sections/Advice";
import SecArts from "./sections/Art";
import SecUser from "./sections/Users";
import "./App.css";

function App() {
  return (
    <div className="main-layout">
      <SecArts />
      <SecUser />
      <SecAdvice />
    </div>
  );
}

export default App;
