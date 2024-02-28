import ArtListItem from "./ArtListItem";
function ArtList(props) {
  return props.data.map((artData, index) => {
    return <ArtListItem artData={artData} url={props.url} Key={index} />;
  });
}
export default ArtList;
