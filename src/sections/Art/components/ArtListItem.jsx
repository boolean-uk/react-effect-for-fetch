import SubjectList from "./SubjectList";

export default function ArtListItem({ art, config }) {
    const filteredArt = art?.filter((piece) => piece.image_id);
    return (
        <>
        {filteredArt?.map((piece, idx) =>
        <li key={idx}>
         <div className="frame">
             <img 
             src={`${config.iiif_url}/${piece.image_id}/full/843,/0/default.jpg`}
             />
             </div>
         <h3>{piece.title}</h3>
         <p>Artist: {piece.artist_title}</p>
         <h4>Artistic Subjects:</h4>
         <SubjectList piece={piece}/>
        </li>         
            )}
        </>
    )
}