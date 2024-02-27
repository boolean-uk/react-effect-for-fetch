import { useEffect, useState } from "react";

function AdviceSection() {
  const [adviceData, setAdviceData] = useState([]);
  const [favoriteAdviceList, setFavoriteAdviceList] = useState([]);

  const URL = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    console.log("Running advice useEffect");

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // to bypass the fetch delay adviceslip.com have set in place we fetch by using different id:S
      const randomFetchId = generateRandomId();
      const req = await fetch(`${URL}/${randomFetchId}`);
      const res = await req.json();
      setAdviceData([res.slip]);
      console.log("setting advice data to: ", [res.slip]);
    } catch (er) {
      console.log("OBS! Something went wrong");
    }
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 220) + 1;
  };

  const handleReRollAdvice = () => {
    console.log("ReRoll");
    fetchData();
  };

  const handleSaveToFavorite = () => {
    setFavoriteAdviceList((prevList) => [...prevList, ...adviceData]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Advice Section</h3>
        {adviceData.map((advice) => (
          <p key={advice.id}>{advice.advice}</p>
        ))}
        <button id="reRollAdvice" onClick={handleReRollAdvice}>
          Get More Advices
        </button>
        <button id="saveAdvice" onClick={handleSaveToFavorite}>
          Save To Favorite
        </button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favorite Advice Slips</h3>
        <ul>
          {favoriteAdviceList.map((advice, index) => (
            <li key={index}>{advice.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
