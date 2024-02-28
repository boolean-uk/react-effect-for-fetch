import { useEffect, useState } from 'react';
import ArtList from './components/ArtList';
const baseAPIUrl = 'https://boolean-api-server.fly.dev';
function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch(`${baseAPIUrl}/art`)
      .then((response) => response.json())
      .then((data) => setArtList(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artList} baseAPIUrl={baseAPIUrl} />
      </div>
    </section>
  )
}

export default ArtsSection