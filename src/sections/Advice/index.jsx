import { useEffect, useState } from "react";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const ADVICE_ENDPOINT = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    console.log(
      "Running my effect only the first time the component is rendered; note: dependency array is empty []..."
    );
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setLoading(true);
    fetch(ADVICE_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  };

  const handleGetAdvice = () => {
    fetchAdvice();
  };

  const handleAddToFavorites = () => {
    if (advice.trim() !== "") {
      //This condition checks if the trimmed advice is not an empty string.
      //If the advice is not empty, it proceeds to the next step.
      setFavorites((prevFavorites) => [...prevFavorites, advice]);
      //This line updates the favorites state by adding the current advice to the list of
      //favorites. It uses the functional form of setFavorites to ensure that the update is
      //based on the previous state (prevFavorites). It creates a new array
      //([...prevFavorites, advice]) by spreading the elements of prevFavorites
      //and appending the advice to it.
      //(prevFavorites): This parameter represents the previous state of the
      //favorites array.
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {loading ? <p>Loading...</p> : <p>{advice}</p>}
        <button onClick={handleGetAdvice}>Get More Advice</button>
        <button onClick={handleAddToFavorites}>Save to Favourites</button>
      </section>
      <FavouriteSlipsList favorites={favorites} />
    </section>
  );
}

export default AdviceSection;
