import ArtListItem from "./ArtListItem"

export default function ArtList({ art }) {

    return (
        <>

        {art.map((art, index) => (
        <ArtListItem art={art} key={index} />

    
    
    ))}
        
        
        </>
    )

}
