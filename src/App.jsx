
import React from 'react';
import ArtsSection from './sections/Art/ArtsSection';
import UsersSection from './sections/Users/UsersSection';
import AdviceSection from "./sections/Advice/components/AdviceSection";
import './App.css';

function App() {
  return (
    <div className="main-layout">
      <ArtsSection artSection={[]} />
      <UsersSection />
      <AdviceSection />
    </div>
  );
}

export default App;
