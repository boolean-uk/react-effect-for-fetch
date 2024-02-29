import "../../../App.css";

export default function ArtListItem({ artwork }) {
  return (
    <>
      <div className="frame">
        <img
          src={`https://boolean-api-server.fly.dev/` + artwork.imageURL}
          alt={artwork.title}
        />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist} </p>
    </>
  );
}
