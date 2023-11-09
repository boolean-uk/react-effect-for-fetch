import ArtListItem from "./ArtListItem";

const ArtList = ({ artList }) => {
  return (
    <ul className='art-list'>
      {artList.map((list) => {
        return <ArtListItem list={list} key={list.id} />;
      })}
    </ul>
  );
};
export default ArtList;
