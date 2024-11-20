import ArtListItemComponent from "./ArtListItem"

export default function ArtListComponent(props){

    const { arts, apiURL } = props
    console.log(arts)

    return (
        <ul>
            {
                arts.map((art, i) => (
                    <ArtListItemComponent art={art} apiURL={apiURL}/>
                ))
            }
        </ul>
    )
}