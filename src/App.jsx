import ArtsSection from "./components/Art.jsx";
import UsersSection from "./components/Users.jsx";
import AdviceSection from "./components/Advice.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  );
}
