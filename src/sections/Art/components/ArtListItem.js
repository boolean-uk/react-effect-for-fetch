import SubjectList from "./SubjectList";

function ArtListItem({ artic }) {
    return (
        <>
            {
                artic.map((art) => {
                    // console.log(art);
                    return (
                        <li key={art.id}>
                            <div class="frame">

                                <img
                                    src=
                                    {!art.image_id ?
                                        "https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80" :
                                        `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`

                                    }
                                />
                            </div>
                            <h3>{art.title ? art.title : "No title given"}</h3>
                            <p>Artist:
                                {
                                    !art.artist_title ?
                                        <strong>"No artist name given"</strong> :
                                        art.artist_title === "Unknown artist" ?
                                            <strong>"No artist name given"</strong> :
                                            art.artist_title

                                }
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