import AdviceSection from "./sections/Advice"
import ArtsSection from "./sections/Art"
import UsersSection from "./sections/Users"
import "./styles.css"
import { useState, useEffect} from "react"

function App() {
console.log("App running")

  return (
    <div className="main-layout">
      <ArtsSection/>
      <UsersSection/>
      <AdviceSection />
    </div>
  )
}

export default App