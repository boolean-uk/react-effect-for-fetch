import ArtsSection from "./sections/Art"
import UsersSection from "./sections/Users"
import "./App.css"

function App() {
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
    </div>
  )
}

export default App