import SubjectList from "./SubjectList"
export default function ArtListItem({ art, config }) {
    return (
        <>
        {art?.map((piece, index) =>
        <li key={index}>
         <div className="frame">
             <img 
             src={piece.image_id ? `${config.iiif_url}/${piece.image_id}/full/843,/0/default.jpg` 
             : "https://static.thenounproject.com/png/3674270-200.png"
            }
            alt={piece.title}
             />
             </div>
         <h3>{piece.title}</h3>
         <p>Artist: {piece.artist_title}</p>
         <h4>Artistic Subjects:</h4>
         <SubjectList piece={piece} />
        </li>         
            )}
        </>
    )
}