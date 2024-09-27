import React, { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import { SingleAdvice } from "../interfaces/interface";

const AdviceSection = () => {
  const [singleAdvice, setSingleAdvice] = useState<SingleAdvice>({
    slip: {
      id: '0',
      advice: ''
    }
  });
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [favouriteAdvices, setFavouriteAdvices] = useState<string[]>([]);
  const baseURL = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    const featchAdvice = async () => {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error('Failed to fetch single advice..');
      }
      const data = await response.json();
      setSingleAdvice(data);
    }
    featchAdvice();
  }, [buttonClicked]);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip 
          buttonClicked={buttonClicked} 
          setButtonClicked={setButtonClicked} 
          data={singleAdvice}
          favourites={favouriteAdvices}
          setFavourite={setFavouriteAdvices}
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favouriteAdvices={favouriteAdvices} />
      </section>
    </section>
  )
}

export default AdviceSection
