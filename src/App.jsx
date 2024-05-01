import AdviceSection from "./sections/Advice/AdviceSection";
import ArtsSection from "./sections/Art/ArtsSection";
import UsersSection from "./sections/Users/UsersSection";
import "./App.css";

function App() {
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  );
}

export default App;
