import ArtListItem from "./ArtListItem"

function ArtList(props) {
    //console.log("ArtList props:", props)
    return <ul className="art-list">

    { //Each artwork: 
    props.artList.map((art) => {
        return (<ArtListItem art={art} imgURL={props.imgURL}/>
        )
        })
    }</ul>

}

export default ArtList