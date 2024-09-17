import { useState, useEffect } from 'react';

import ArtList from './components/ArtList';
import { getRequest } from '../../utils/requests';

function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    getRequest('https://boolean-api-server.fly.dev/art')
      .then(data => setArtList(
        data.map(art => ({...art, image: 'https://boolean-api-server.fly.dev' + art.imageURL}))
      ));
  }, []);
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artList} />
      </div> 
    </section>
  )
}

export default ArtsSection
