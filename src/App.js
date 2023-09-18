import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";
import "./styles.css";

function App() {
    return (
        <div className="main-layout">
            <ArtsSection />
            <UsersSection />
          </div>
    );
}

export default App;
