import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";
import ArtListItem from "./components/ArtListItem";
import PublicationHistoryList from "./components/PublicationHistoryList";

function ArtsSection() {
  // State to store art items
  const [artItems, setArtItems] = useState([]);
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch art items from API
  const fetchArtItems = async () => {
    try {
      const response = await fetch('https://boolean-api-server.fly.dev/art');
      const data = await response.json();
      setArtItems(data); // Set fetched art items
      setIsLoading(false); // Update loading state
    } catch (error) {
      console.error('Error fetching art items:', error);
    }
  };

    // useEffect to fetch art items on component 
    useEffect(() => {
      fetchArtItems();
    }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      {/* Render ArtList component with art items */}
      <ArtList>
          {/* Map through art items and render ArtListItem components */}
          {isLoading ? (
            <div>Loading...</div> // Display loading message while fetching data
          ) : (
            artItems.map((artItem, index) => (
              <ArtListItem
                key={index}
                imageUrl={artItem.imageURL}
                title={artItem.title}
                artist={artItem.artist}
                publicationHistory={artItem.publicationHistory}
              />
            ))
          )}
        </ArtList>

      </div>
    </section>
  )
}

export default ArtsSection
