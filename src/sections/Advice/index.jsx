import { useEffect, useState } from "react";

function AdviceSection() {
  const [adviceData, setAdviceData] = useState([]);

  const URL = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    console.log("Running advice useEffect");
    const fetchData = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        setAdviceData(res);
      } catch (er) {
        console.log("OBS! Something went wrong");
      }
    };
    fetchData();
  }, [URL]);

  console.log(adviceData);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
    </section>
  );
}

export default AdviceSection;
