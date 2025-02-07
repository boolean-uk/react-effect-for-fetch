import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [artListData, setArtListData] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      fetch("https://boolean-uk-api-server.fly.dev/art")
        .then(resp => resp.json())
        .then(data => {
          data.forEach(x => {
            x.imageURL = "https://boolean-uk-api-server.fly.dev"+x.imageURL;
          })
          setArtListData(data)
        });
    }
    fetchData();
  },
  []
  );

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artListData}/>
      </div>
    </section>
  )
}

export default ArtsSection
