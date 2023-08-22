import SubjectList from "./SubjectList"
import ArtListItemImage from "./ArtListItemImage";
import ArtListItemName from "./ArtListItemName";

function ArtListItem({ artic }) {
    return (
        <>
            {
                artic.map((art) => {
                    // console.log(art);
                    return (
                        <li key={art.id}>
                            <ArtListItemImage
                                art={art}
                            />
                            <h3>{art.title ?? 'No title given'}</h3>
                            <p>Artist:
                                <ArtListItemName
                                    art={art}
                                />
                            </p>
                            <h4>Artistic Subjects:</h4>
                            <ul>
                                <SubjectList
                                    art={art}
                                />
                            </ul>
                        </li>
                    );
                })
            }

        </>


    )
}
export default ArtListItem