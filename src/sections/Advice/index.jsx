/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'


function AdviceSection() {

  const url = "https://api.adviceslip.com/advice";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
    setFilteredData(jsonData); 
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <section>
      <h2>Advice Section</h2>
        <section>
          <h2>Advice Section</h2>
          <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{data.slip ? (data.slip.advice) : ('no advice')}</p>
            <button>Get More Advice</button>
            <button>Save to Favourties</button>
          </section>
          <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
              <li>Measure twice, cut once.</li>
              <li>{"Don't let the bastards grind you down."}</li>
              <li>Always the burrito.</li>
            </ul>
          </section>
        </section>
    </section>
  )
}

export default AdviceSection
