import React, { useEffect, useState } from "react";

function ArtsSection() {
  const [artsData, setArtsData] = useState([]);
  const baseURL = "https://boolean-uk-api-server.fly.dev/art";
  const imgBaseURL = "https://boolean-uk-api-server.fly.dev";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseURL);
      const jsonData = await response.json();
      setArtsData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artsData.map((object, index) => (
            <React.Fragment key={index}>
              <h3>{object.title}</h3>

              <li>
                <div className="frame">
                  <img src={imgBaseURL + object.imageURL} />
                </div>
              </li>

              <p>{"Artist: " + object.artist}</p>

              {!object.publicationHistory ? (
                <h4>{"No publication History."}</h4>
              ) : (
                <>
                  <h4>{"Publication history:"}</h4>
                  <ul>
                    {object.publicationHistory.map((his, idx) => (
                      <li key={index + "" + idx}>{his}</li>
                    ))}
                  </ul>
                </>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
